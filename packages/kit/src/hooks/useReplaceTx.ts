import { useCallback } from 'react';

import { useIntl } from 'react-intl';

import { Toast } from '@onekeyhq/components';
import { ETranslations } from '@onekeyhq/shared/src/locale';
import { EModalRoutes, EModalSendRoutes } from '@onekeyhq/shared/src/routes';
import accountUtils from '@onekeyhq/shared/src/utils/accountUtils';
import type { IAccountHistoryTx } from '@onekeyhq/shared/types/history';
import type { ISendTxOnSuccessData } from '@onekeyhq/shared/types/tx';
import { EDecodedTxStatus, EReplaceTxType } from '@onekeyhq/shared/types/tx';

import backgroundApiProxy from '../background/instance/backgroundApiProxy';

import useAppNavigation from './useAppNavigation';
import { usePromiseResult } from './usePromiseResult';

function useReplaceTx({
  historyTx,
  onSuccess,
  isConfirmed,
}: {
  historyTx: IAccountHistoryTx | undefined;
  onSuccess?: (data: ISendTxOnSuccessData[]) => void;
  isConfirmed?: boolean;
}) {
  const navigation = useAppNavigation();
  const intl = useIntl();

  const canReplaceTx = usePromiseResult(async () => {
    if (!historyTx) return false;
    const { accountId, networkId, status, encodedTx } = historyTx.decodedTx;
    if (isConfirmed) return false;

    if (!encodedTx) return false;

    if (status !== EDecodedTxStatus.Pending) return false;

    const vaultSettings =
      await backgroundApiProxy.serviceNetwork.getVaultSettings({
        networkId,
      });

    if (!vaultSettings.replaceTxEnabled) return false;

    return backgroundApiProxy.serviceHistory.canAccelerateTx({
      accountId,
      networkId,
      encodedTx,
      txId: historyTx.decodedTx.txid,
    });
  }, [historyTx, isConfirmed]).result;

  const { result: cancelTxConfig } = usePromiseResult(async () => {
    const defaultConfig = {
      cancelTxEnabled: false,
      speedUpCancelEnabled: false,
    };
    if (!historyTx) return defaultConfig;
    if (isConfirmed) return defaultConfig;
    const { networkId } = historyTx.decodedTx;

    const vaultSettings =
      await backgroundApiProxy.serviceNetwork.getVaultSettings({
        networkId,
      });

    return {
      cancelTxEnabled: vaultSettings.cancelTxEnabled,
      speedUpCancelEnabled: vaultSettings.speedUpCancelEnabled,
    };
  }, [historyTx, isConfirmed]);

  const canCancelTx = historyTx
    ? historyTx.replacedType !== EReplaceTxType.Cancel
    : false;

  const handleReplaceTx = useCallback(
    async ({ replaceType }: { replaceType: EReplaceTxType }) => {
      if (!historyTx) return;
      const { decodedTx } = historyTx;
      const { accountId, networkId } = decodedTx;

      if (!canReplaceTx) {
        console.log('Cannot replace tx');
        return;
      }

      // External accounts may modify transaction nonce, so transaction replacement is disabled.
      if (accountUtils.isExternalAccount({ accountId })) {
        Toast.error({
          title: intl.formatMessage({
            id: ETranslations.feedback_connected_accounts_speed_up_or_cancel,
          }),
        });
        return;
      }

      const replaceEncodedTx =
        await backgroundApiProxy.serviceSend.buildReplaceEncodedTx({
          accountId,
          networkId,
          decodedTx,
          replaceType,
        });

      if (!replaceEncodedTx) return;

      navigation.pushModal(EModalRoutes.SendModal, {
        screen: EModalSendRoutes.SendReplaceTx,
        params: {
          accountId,
          networkId,
          replaceType,
          replaceEncodedTx,
          historyTx,
          onSuccess,
        },
      });
    },
    [canReplaceTx, historyTx, intl, navigation, onSuccess],
  );

  return {
    canReplaceTx,
    canCancelTx,
    cancelTxEnabled: cancelTxConfig?.cancelTxEnabled,
    speedUpCancelEnabled: cancelTxConfig?.speedUpCancelEnabled,
    handleReplaceTx,
  };
}

export { useReplaceTx };
