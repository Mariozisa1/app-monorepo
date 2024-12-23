import { useCallback, useEffect, useRef } from 'react';

import { useRoute } from '@react-navigation/core';
import { StackActions, useNavigation } from '@react-navigation/native';
import { AppState } from 'react-native';

import { Page, Spinner, Stack } from '@onekeyhq/components';
import backgroundApiProxy from '@onekeyhq/kit/src/background/instance/backgroundApiProxy';
import useAppNavigation from '@onekeyhq/kit/src/hooks/useAppNavigation';
import type { IModalSendParamList } from '@onekeyhq/shared/src/routes';
import { EModalSendRoutes } from '@onekeyhq/shared/src/routes';
import accountUtils from '@onekeyhq/shared/src/utils/accountUtils';
import type { IGasEIP1559, IGasLegacy } from '@onekeyhq/shared/types/fee';
import type { ISendTxOnSuccessData } from '@onekeyhq/shared/types/tx';

import type { RouteProp } from '@react-navigation/core';
import type { StackActionType } from '@react-navigation/native';

function SendConfirmFromSwap() {
  const pendingAction = useRef<StackActionType>();
  const navigation = useNavigation();
  const appNavigation = useAppNavigation();

  const route =
    useRoute<
      RouteProp<IModalSendParamList, EModalSendRoutes.SendConfirmFromSwap>
    >();

  const { networkId, accountId, unsignedTxs, onSuccess, onFail, onCancel } =
    route.params;

  const handleConfirmMultiTxsOnHwOrExternal = useCallback(
    async (multiTxsFeeResult: {
      common: {
        baseFee: string | undefined;
        feeDecimals: number;
        feeSymbol: string;
        nativeDecimals: number;
        nativeSymbol: string;
        nativeTokenPrice: number | undefined;
      };
      txFees: {
        gas: IGasLegacy[];
        gasEIP1559: IGasEIP1559[];
      }[];
    }) => {
      for (let i = 0, len = unsignedTxs.length; i < len; i += 1) {
        const unsignedTx = unsignedTxs[i];
        unsignedTx.feesInfo = {
          common: multiTxsFeeResult.common,
          gas: multiTxsFeeResult.txFees[i].gas,
          gasEIP1559: multiTxsFeeResult.txFees[i].gasEIP1559,
        };
        const isLastTx = i === len - 1;

        await new Promise((resolve) => {
          appNavigation.push(EModalSendRoutes.SendConfirm, {
            ...route.params,
            popStack: false,
            unsignedTxs: [unsignedTx],
            onSuccess: (data: ISendTxOnSuccessData[]) => {
              if (isLastTx) {
                onSuccess?.(data);
                appNavigation.popStack();
              }
              resolve(data);
            },
            onFail: (error: Error) => {
              onFail?.(error);

              appNavigation.popStack();
            },
            onCancel: () => {
              onCancel?.();
              appNavigation.popStack();
            },
          });
        });
      }
    },
    [unsignedTxs, appNavigation, route.params, onSuccess, onFail, onCancel],
  );

  const navigationToSendConfirm = useCallback(async () => {
    let action: any;
    let batchEstimateButSingleConfirm = false;
    const isMultiTxs = unsignedTxs.length > 1;
    if (
      isMultiTxs &&
      (accountUtils.isHwAccount({ accountId }) ||
        accountUtils.isExternalAccount({ accountId }))
    ) {
      const vaultSettings =
        await backgroundApiProxy.serviceNetwork.getVaultSettings({
          networkId,
        });
      if (vaultSettings.supportBatchEstimateFee?.[networkId]) {
        try {
          const encodedTxList = unsignedTxs.map((tx) => tx.encodedTx);
          const multiTxsFeeResult =
            await backgroundApiProxy.serviceGas.batchEstimateFee({
              accountId,
              networkId,
              encodedTxs: encodedTxList,
            });
          if (multiTxsFeeResult.txFees.length === unsignedTxs.length) {
            await handleConfirmMultiTxsOnHwOrExternal(multiTxsFeeResult);
            batchEstimateButSingleConfirm = true;
          } else {
            batchEstimateButSingleConfirm = false;
          }
        } catch (e) {
          batchEstimateButSingleConfirm = false;
        }
      }
    }

    if (!batchEstimateButSingleConfirm) {
      action = StackActions.replace(EModalSendRoutes.SendConfirm, {
        ...route.params,
        // @ts-ignore
        _disabledAnimationOfNavigate: true,
      });
    }

    if (action) {
      if (AppState.currentState === 'active') {
        setTimeout(() => navigation.dispatch(action));
      } else {
        pendingAction.current = action;
      }
    }
  }, [
    accountId,
    handleConfirmMultiTxsOnHwOrExternal,
    navigation,
    networkId,
    route.params,
    unsignedTxs,
  ]);

  const handleOnClose = () => {
    onCancel?.();
  };

  useEffect(() => {
    void navigationToSendConfirm();
  }, [navigation, navigationToSendConfirm, route.params, unsignedTxs]);

  return (
    <Page onClose={handleOnClose}>
      <Page.Body>
        <Stack h="100%" justifyContent="center" alignContent="center">
          <Spinner size="large" />
        </Stack>
      </Page.Body>
    </Page>
  );
}
export { SendConfirmFromSwap };
