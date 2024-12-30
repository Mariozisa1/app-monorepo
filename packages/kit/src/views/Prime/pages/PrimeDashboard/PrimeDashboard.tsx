import { useCallback, useMemo, useState } from 'react';

import { StyleSheet } from 'react-native';

import type { IKeyOfIcons } from '@onekeyhq/components';
import {
  Button,
  Icon,
  IconButton,
  LottieView,
  Page,
  SizableText,
  Stack,
  Theme,
  Toast,
  XStack,
  YStack,
  useSafeAreaInsets,
} from '@onekeyhq/components';
import PrimeBannerBgDark from '@onekeyhq/kit/assets/animations/prime-banner-bg-dark.json';
import { ListItem } from '@onekeyhq/kit/src/components/ListItem';

import { useFetchPrimeUserInfo } from '../../hooks/useFetchPrimeUserInfo';
import { usePrimeAuth } from '../../hooks/usePrimeAuth';

import { PrimeUserInfo } from './PrimeUserInfo';

function PrimeBanner() {
  return (
    <YStack py="$5" gap="$2" alignItems="center">
      <Icon size="$20" name="OnekeyPrimeDarkColored" />
      <SizableText size="$heading3xl" mt="$-1" textAlign="center">
        OneKey Prime
      </SizableText>
      <SizableText
        size="$bodyLg"
        maxWidth="$96"
        textAlign="center"
        color="$textSubdued"
      >
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
    <ListItem drillIn onPress={onPress}>
      <YStack borderRadius="$3" borderCurve="continuous" bg="$brand4" p="$2">
        <Icon name={icon} size="$6" color="$brand9" />
      </YStack>
      <ListItem.Text flex={1} primary={title} secondary={subtitle} />
    </ListItem>
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
  const { top } = useSafeAreaInsets();
  const { login, loginLegacy, logout, privy, getAccessToken, user } =
    usePrimeAuth();

  const { result } = useFetchPrimeUserInfo();

  const onConfirm = useCallback(async () => {
    login();

    if (!user?.isLoggedIn) {
      // loginLegacy();
    }
  }, [login, user?.isLoggedIn]);

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
    <>
      <Theme name="dark">
        <Stack position="absolute" left="$5" top={top || '$5'} zIndex="$5">
          <Page.Close>
            <IconButton icon="CrossedLargeOutline" variant="tertiary" />
          </Page.Close>
        </Stack>
        <Page scrollEnabled>
          <Page.Header headerShown={false} />
          <Page.Body>
            <Stack
              px="$5"
              pt="$10"
              gap="$5"
              overflow="hidden"
              borderBottomWidth={StyleSheet.hairlineWidth}
              borderBottomColor="$borderSubdued"
            >
              <YStack
                position="absolute"
                top="50%"
                transform="translateY(-50%)"
                left={0}
                right={0}
                paddingBottom="100%"
              >
                <LottieView
                  position="absolute"
                  width="100%"
                  height="100%"
                  source={PrimeBannerBgDark}
                />
              </YStack>
              <PrimeBanner />
              {user?.isLoggedIn ? (
                <>
                  <PrimeUserInfo />
                  <PrimeSubscriptionPlans />
                </>
              ) : null}
            </Stack>
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
                    ready: privy.ready,
                    authenticated: privy.authenticated,
                    user: privy.user,
                  });
                }}
              >
                User Info
              </Button>
            </XStack>
          </Page.Body>
          <Page.Footer
            onConfirm={shouldShowConfirmButton ? onConfirm : undefined}
            onConfirmText="Subscribe"
          />
        </Page>
      </Theme>
    </>
  );
}
