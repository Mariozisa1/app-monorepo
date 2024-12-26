import { useCallback, useMemo, useState } from 'react';

import { usePrivy, useLogin as usePrivyLogin } from '@privy-io/react-auth';

import type { IKeyOfIcons } from '@onekeyhq/components';
import {
  ActionList,
  Badge,
  Button,
  Divider,
  Icon,
  IconButton,
  Page,
  SizableText,
  Stack,
  Toast,
  XStack,
  YStack,
} from '@onekeyhq/components';
import backgroundApiProxy from '@onekeyhq/kit/src/background/instance/backgroundApiProxy';
import { ListItem } from '@onekeyhq/kit/src/components/ListItem';
import { usePromiseResult } from '@onekeyhq/kit/src/hooks/usePromiseResult';
import { usePrimePersistAtom } from '@onekeyhq/kit-bg/src/states/jotai/atoms';

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

function PrimeUserInfoMoreButton() {
  const renderItems = useCallback(
    ({
      handleActionListClose,
    }: {
      handleActionListClose: () => void;
      handleActionListOpen: () => void;
    }) => {
      const userInfo = (
        <Stack px="$2" py="$3">
          <XStack alignItems="center">
            <SizableText size="$headingSm">hello@example.com</SizableText>
            <Stack flex={1} />
            <Badge badgeType="warning" badgeSize="sm">
              Prime
            </Badge>
          </XStack>
          <SizableText size="$bodyMd" color="$textSubdued">
            Ends on December 31, 2023.
          </SizableText>
        </Stack>
      );
      return (
        <>
          {userInfo}
          <ActionList.Item
            label="Change email"
            icon="EmailOutline"
            onClose={handleActionListClose}
          />
          <ActionList.Item
            label="Change password"
            icon="PasswordOutline"
            onClose={handleActionListClose}
          />
          <ActionList.Item
            label="Manage subscription"
            icon="CreditCardOutline"
            onClose={handleActionListClose}
          />
          <Divider mx="$2" my="$1" />
          <ActionList.Item
            label="Log out"
            icon="LogoutOutline"
            onClose={handleActionListClose}
          />
        </>
      );
    },
    [],
  );
  return (
    <ActionList
      title="Account"
      renderItems={renderItems}
      renderTrigger={
        <IconButton
          ml="$2"
          icon="MoreIllus"
          iconProps={{ color: '$iconSubdued' }}
          // variant="ghost"
          variant="tertiary"
          size="small"
          onPress={() => {
            console.log('1');
          }}
        />
      }
    />
  );
}

function PrimeUserInfo() {
  return (
    <XStack
      px="$4"
      mb="$5"
      h="$12"
      alignItems="center"
      borderColor="$borderSubdued"
      borderWidth={1}
      borderRadius="$3"
    >
      <Icon name="FolderUserOutline" color="$iconSubdued" />
      <SizableText mx="$2" size="$bodyMdMedium">
        hello@example.com
      </SizableText>
      <Stack flex={1} />
      <Badge badgeType="warning" badgeSize="sm">
        Prime
      </Badge>
      <Badge badgeType="critical" badgeSize="sm">
        Prime
      </Badge>
      <Badge badgeType="info" badgeSize="sm">
        Prime
      </Badge>
      <Badge badgeType="success" badgeSize="sm">
        Prime
      </Badge>
      <Badge badgeType="default" badgeSize="sm">
        Free
      </Badge>
      <PrimeUserInfoMoreButton />
    </XStack>
  );
}

export default function PrimeDashboard() {
  const [primePersistAtom, setPrimePersistAtom] = usePrimePersistAtom();

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

  const { result } = usePromiseResult(async () => {
    const userInfo = await backgroundApiProxy.servicePrime.apiPrimeUserInfo();
    return userInfo;
  }, []);

  const onConfirm = useCallback(async () => {
    login();

    if (!primePersistAtom?.isLoggedIn) {
      // try {
      //   const email = await backgroundApiProxy.servicePrime.startPrimeLogin();
      //   console.log('prime email >>> ', email);
      //   Toast.success({
      //     title: `Prime login success: ${email.email}`,
      //   });
      // } catch (error) {
      //   console.error(error);
      //   Toast.error({
      //     title: `login failed: ${(error as IOneKeyError)?.message || ''}`,
      //   });
      // }
    }
  }, [primePersistAtom?.isLoggedIn, login]);

  const shouldShowConfirmButton = useMemo(() => {
    if (!primePersistAtom?.isLoggedIn) {
      return true;
    }
    if (
      primePersistAtom?.isLoggedIn &&
      !primePersistAtom?.primeSubscription?.isActive
    ) {
      return true;
    }
    return false;
  }, [primePersistAtom?.isLoggedIn, primePersistAtom?.primeSubscription]);

  return (
    <Page scrollEnabled>
      <Page.Header title="Prime" />
      <Page.Body>
        <Stack>
          <Stack px="$4">
            <PrimeBanner />
            {primePersistAtom?.isLoggedIn ? (
              <>
                <PrimeUserInfo />
                <PrimeSubscriptionPlans />
              </>
            ) : null}
          </Stack>
          <Divider />
          <PrimeBenefitsList />
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
              console.log({ ready, authenticated, user });
            }}
          >
            User Info
          </Button>
        </Stack>
      </Page.Body>
      <Page.Footer
        onConfirm={shouldShowConfirmButton ? onConfirm : undefined}
        onConfirmText="Subscribe"
      />
    </Page>
  );
}
