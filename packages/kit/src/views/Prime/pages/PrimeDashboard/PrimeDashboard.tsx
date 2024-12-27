import { useCallback, useMemo, useState } from 'react';

import type { IKeyOfIcons } from '@onekeyhq/components';
import {
  Button,
  Divider,
  Icon,
  Page,
  SizableText,
  Stack,
  Toast,
  XStack,
  YStack,
} from '@onekeyhq/components';
import { ListItem } from '@onekeyhq/kit/src/components/ListItem';
import platformEnv from '@onekeyhq/shared/src/platformEnv';
import timerUtils from '@onekeyhq/shared/src/utils/timerUtils';

import useAppNavigation from '@onekeyhq/kit/src/hooks/useAppNavigation';
import { useFetchPrimeUserInfo } from '../../hooks/useFetchPrimeUserInfo';
import { usePrimeAuth } from '../../hooks/usePrimeAuth';

import { PrimeUserInfo } from './PrimeUserInfo';

function PrimeBanner() {
  return (
    <YStack py="$5" gap="$3" alignItems="center">
      <Icon
        size="$16"
        name="KingVipCrownOutline"
        //   name="PlaceholderOutline"
      />
      <SizableText size="$heading3xl" textAlign="center">
        OneKey Prime
      </SizableText>
      <SizableText size="$bodyLg" color="$textSubdued" textAlign="center">
        Unlock advanced features to enhance your crypto asset management
        experience.
      </SizableText>
    </YStack>
  );
}

function PrimeBenefitsItem({
  icon,
  title,
  subtitle,
  onPress,
}: {
  icon: IKeyOfIcons;
  title: string;
  subtitle: string;
  onPress: () => void;
}) {
  return (
    <ListItem
      drillIn
      icon={icon}
      title={title}
      subtitle={subtitle}
      onPress={onPress}
    />
  );
}

function PrimeBenefitsList() {
  return (
    <Stack py="$2">
      <PrimeBenefitsItem
        icon="RepeatOutline"
        title="Sync"
        subtitle="Automatically back up app usage data, sync across devices."
        onPress={() => {
          Toast.success({
            title: 'Sync',
          });
        }}
      />
      <PrimeBenefitsItem
        icon="BezierNodesOutline"
        title="Premium RPC"
        subtitle="Enjoy rapid and secure blockchain access."
        onPress={() => {
          Toast.success({
            title: 'Premium RPC',
          });
        }}
      />
      <PrimeBenefitsItem
        icon="BellOutline"
        title="Account Activity"
        subtitle="Subscribe to activities from up to 100 accounts."
        onPress={() => {
          Toast.success({
            title: 'Account Activity',
          });
        }}
      />
      <PrimeBenefitsItem
        icon="FileTextOutline"
        title="Analytics"
        subtitle="sint occaecat cupidatat non proident"
        onPress={() => {
          Toast.success({
            title: 'Analytics',
          });
        }}
      />
      <PrimeBenefitsItem
        icon="PhoneOutline"
        title="Device management"
        subtitle="Access Prime on up to 5 devices."
        onPress={() => {
          Toast.success({
            title: 'Device management',
          });
        }}
      />
    </Stack>
  );
}

function PrimeSubscriptionPlanItem({
  selected,
  type,
  price,
  pricePerMonth,
  onPress,
}: {
  selected?: boolean;
  type: 'yearly' | 'monthly';
  price: string;
  pricePerMonth: string;
  onPress: () => void;
}) {
  return (
    <XStack
      alignItems="center"
      h="$20"
      px="$5"
      borderWidth={2}
      borderColor={selected ? '$borderActive' : '$borderSubdued'}
      borderRadius="$3"
      onPress={onPress}
    >
      <SizableText size="$headingXl">{type}</SizableText>
      <SizableText mx="$2" size="$headingXl">
        {price}
      </SizableText>
      <Stack flex={1} />
      <SizableText ml="$2" size="$bodyMd" color="$textSubdued">
        {pricePerMonth}
      </SizableText>
    </XStack>
  );
}

function PrimeSubscriptionPlans() {
  const [selectedPlan, setSelectedPlan] = useState<'yearly' | 'monthly'>(
    'yearly',
  );
  return (
    <YStack gap="$2" mb="$5">
      <PrimeSubscriptionPlanItem
        selected={selectedPlan === 'yearly'}
        type="yearly"
        price="$100"
        pricePerMonth="$10 / month"
        onPress={() => {
          setSelectedPlan('yearly');
        }}
      />
      <PrimeSubscriptionPlanItem
        selected={selectedPlan === 'monthly'}
        type="monthly"
        price="$10"
        pricePerMonth="$10 / month"
        onPress={() => {
          setSelectedPlan('monthly');
        }}
      />
    </YStack>
  );
}

export default function PrimeDashboard() {
  const { login, loginLegacy, logout, privy, getAccessToken, user } =
    usePrimeAuth();
  const navigation = useAppNavigation();
  const { result } = useFetchPrimeUserInfo();

  const onConfirm = useCallback(async () => {
    if (platformEnv.isNative) {
      // TODO: privy login Modal is conflict with OneKey Modal
      navigation.popStack();
      await timerUtils.wait(1000);
    }
    login();

    if (!user?.isLoggedIn) {
      // loginLegacy();
    }
  }, [login, navigation, user?.isLoggedIn]);

  const shouldShowConfirmButton = useMemo(() => {
    if (!user?.isLoggedIn) {
      return true;
    }
    if (user?.isLoggedIn && !user?.primeSubscription?.isActive) {
      return true;
    }
    return false;
  }, [user?.isLoggedIn, user?.primeSubscription]);

  return (
    <Page scrollEnabled>
      <Page.Header title="Prime" />
      <Page.Body>
        <Stack>
          <Stack px="$4">
            <PrimeBanner />
            {user?.isLoggedIn ? (
              <>
                <PrimeUserInfo />
                <PrimeSubscriptionPlans />
              </>
            ) : null}
          </Stack>
          <Divider />
          <PrimeBenefitsList />
          <XStack>
            <Button
              onPress={() => {
                void loginLegacy();
              }}
            >
              Login Legacy
            </Button>
            <Button
              onPress={() => {
                void logout();
              }}
            >
              Logout
            </Button>
            <Button
              onPress={() => {
                void getAccessToken().then(console.log);
              }}
            >
              Get Access Token
            </Button>
            <Button
              onPress={() => {
                console.log({
                  ready: privy.isReady,
                  authenticated: privy.authenticated,
                  userWeb: privy.web?.user,
                  userNative: privy.native?.user,
                  userEmail: privy.userEmail,
                });
              }}
            >
              User Info
            </Button>
          </XStack>
        </Stack>
      </Page.Body>
      <Page.Footer
        onConfirm={shouldShowConfirmButton ? onConfirm : undefined}
        onConfirmText="Subscribe"
      />
    </Page>
  );
}
