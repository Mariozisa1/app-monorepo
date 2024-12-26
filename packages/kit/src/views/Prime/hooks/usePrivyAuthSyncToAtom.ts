import { useEffect } from 'react';

import { usePrivy } from '@privy-io/react-auth';

import {
  usePrimeInitAtom,
  usePrimePersistAtom,
} from '@onekeyhq/kit-bg/src/states/jotai/atoms';

import backgroundApiProxy from '../../../background/instance/backgroundApiProxy';

export function usePrivyAuthSyncToAtom() {
  const [primePersistAtom, setPrimePersistAtom] = usePrimePersistAtom();
  const [primeInitAtom, setPrimeInitAtom] = usePrimeInitAtom();

  // https://github.com/privy-io/create-next-app/blob/main/pages/index.tsx
  const {
    ready,
    authenticated,
    user,
    logout,
    linkEmail,
    linkWallet,
    unlinkEmail,
    linkPhone,
    unlinkPhone,
    unlinkWallet,
    linkGoogle,
    unlinkGoogle,
    linkTwitter,
    unlinkTwitter,
    linkDiscord,
    unlinkDiscord,
    getAccessToken,
  } = usePrivy();

  useEffect(() => {
    void (async () => {
      if (!ready) {
        return;
      }
      let accessToken: string | null = '';
      if (authenticated) {
        accessToken = await getAccessToken();
      }

      await backgroundApiProxy.simpleDb.prime.saveAuthToken(accessToken || '');

      if (accessToken) {
        setPrimePersistAtom((v) => ({
          ...v,
          isLoggedIn: true,
          email: user?.email?.address,
        }));
      } else {
        setPrimePersistAtom((v) => ({
          ...v,
          isLoggedIn: false,
          email: undefined,
        }));
      }

      setPrimeInitAtom((v) => ({
        ...v,
        isReady: true,
      }));
    })();
  }, [
    setPrimePersistAtom,
    setPrimeInitAtom,
    ready,
    authenticated,
    getAccessToken,
    user?.email?.address,
  ]);
}
