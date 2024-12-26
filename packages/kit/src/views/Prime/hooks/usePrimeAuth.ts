import { useCallback, useMemo } from 'react';

import { usePrivy, useLogin as usePrivyLogin } from '@privy-io/react-auth';

import { Toast } from '@onekeyhq/components';
import {
  usePrimeInitAtom,
  usePrimePersistAtom,
} from '@onekeyhq/kit-bg/src/states/jotai/atoms';
import type { IOneKeyError } from '@onekeyhq/shared/src/errors/types/errorTypes';

import backgroundApiProxy from '../../../background/instance/backgroundApiProxy';

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

  const loginLegacy = useCallback(async () => {
    try {
      const email = await backgroundApiProxy.servicePrime.startPrimeLogin();
      console.log('prime email >>> ', email);
      Toast.success({
        title: `Prime login success: ${email.email}`,
      });
    } catch (error) {
      console.error(error);
      Toast.error({
        title: `login failed: ${(error as IOneKeyError)?.message || ''}`,
      });
    }
  }, []);

  return useMemo(
    () => ({
      // you should check isReady before use other methods
      // TODO when privy network is broken(isReady is false), we should show a Error Page on the Dashboard UI
      isReady: primeInitAtom.isReady,
      user: primePersistAtom,
      privy,
      login,
      loginLegacy,
      logout,
      updateEmail,
      updatePhone,
      getAccessToken,
    }),
    [
      getAccessToken,
      login,
      loginLegacy,
      logout,
      primeInitAtom,
      primePersistAtom,
      privy,
      updateEmail,
      updatePhone,
    ],
  );
}
