import { useCallback } from 'react';

import { useIntl } from 'react-intl';

import { HeaderIconButton } from '@onekeyhq/components';
import useAppNavigation from '@onekeyhq/kit/src/hooks/useAppNavigation';
import { usePrimePersistAtom } from '@onekeyhq/kit-bg/src/states/jotai/atoms';
import { EModalRoutes } from '@onekeyhq/shared/src/routes';
import { EPrimePages } from '@onekeyhq/shared/src/routes/prime';

export function PrimeHeaderIconButton() {
  const [primePersistAtom, setPrimePersistAtom] = usePrimePersistAtom();
  const intl = useIntl();
  const navigation = useAppNavigation();

  const onPrimeButtonPressed = useCallback(async () => {
    navigation.pushModal(EModalRoutes.PrimeModal, {
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
      icon={
        primePersistAtom?.isLoggedIn
          ? 'KingVipCrownSolid'
          : 'KingVipCrownOutline'
      }
      iconProps={{
        color: primePersistAtom?.isLoggedIn ? '$iconSuccess' : undefined,
      }}
      onPress={onPrimeButtonPressed}
    />
  );
}
