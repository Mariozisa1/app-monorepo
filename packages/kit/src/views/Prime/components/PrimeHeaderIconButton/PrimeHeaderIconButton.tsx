import { useCallback } from 'react';

import { useIntl } from 'react-intl';

import { HeaderIconButton } from '@onekeyhq/components';
import useAppNavigation from '@onekeyhq/kit/src/hooks/useAppNavigation';
import { EModalRoutes } from '@onekeyhq/shared/src/routes';
import { EPrimePages } from '@onekeyhq/shared/src/routes/prime';

import { usePrimeAuth } from '../../hooks/usePrimeAuth';

export function PrimeHeaderIconButton() {
  const { user, isReady } = usePrimeAuth();
  const intl = useIntl();
  const navigation = useAppNavigation();

  const onPrimeButtonPressed = useCallback(async () => {
    navigation.pushFullModal(EModalRoutes.PrimeModal, {
      screen: EPrimePages.PrimeDashboard,
    });
  }, [navigation]);

  return (
    <HeaderIconButton
      key="header-prime-button"
      title={
        'Prime'
        // intl.formatMessage({ id: ETranslations.global_prime })
      }
      icon={user?.isLoggedIn ? 'KingVipCrownSolid' : 'KingVipCrownOutline'}
      iconProps={{
        color: user?.isLoggedIn ? '$iconSuccess' : undefined,
      }}
      onPress={onPrimeButtonPressed}
    />
  );
}
