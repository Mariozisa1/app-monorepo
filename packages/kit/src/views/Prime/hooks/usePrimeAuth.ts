import { useMemo } from 'react';

import { usePrivy, useLogin as usePrivyLogin } from '@privy-io/react-auth';

import {
  usePrimeInitAtom,
  usePrimePersistAtom,
} from '@onekeyhq/kit-bg/src/states/jotai/atoms';

export function usePrimeAuth() {
  const [primePersistAtom, setPrimePersistAtom] = usePrimePersistAtom();
  const [primeInitAtom, setPrimeInitAtom] = usePrimeInitAtom();

  const privy = usePrivy();
  const {
    ready,
    authenticated,
    user,
    logout,
    updateEmail,
    updatePhone,
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
  } = privy;

  const { login } = usePrivyLogin({
    onComplete(
      user0,
      isNewUser,
      wasAlreadyAuthenticated,
      loginMethod,
      loginAccount,
    ) {
      console.log('privy login complete >>> ', {
        user0,
        isNewUser,
        wasAlreadyAuthenticated,
        loginMethod,
        loginAccount,
      });
    },
  });

  return useMemo(
    () => ({
      // you should check isReady before use other methods
      // TODO when privy network is broken(isReady is false), we should show a Error Page on the Dashboard UI
      isReady: primeInitAtom.isReady,
      user: primePersistAtom,
      privy,
      login,
      logout,
      updateEmail,
      updatePhone,
      getAccessToken,
    }),
    [
      getAccessToken,
      login,
      logout,
      primeInitAtom,
      primePersistAtom,
      privy,
      updateEmail,
      updatePhone,
    ],
  );
}
