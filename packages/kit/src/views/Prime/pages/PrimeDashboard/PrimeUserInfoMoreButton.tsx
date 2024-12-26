import { useCallback } from 'react';

import {
  ActionList,
  Badge,
  Dialog,
  Divider,
  IconButton,
  SizableText,
  Stack,
  XStack,
} from '@onekeyhq/components';

import { usePrimeAuth } from '../../hooks/usePrimeAuth';

function PrimeUserInfoMoreButtonDropDownMenu({
  handleActionListClose,
}: {
  handleActionListClose: () => void;
}) {
  const { user, logout, updateEmail } = usePrimeAuth();

  const userInfo = (
    <Stack px="$2" py="$3">
      <XStack alignItems="center">
        <SizableText size="$headingSm">{user?.email}</SizableText>
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
        onPress={() => updateEmail()}
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
        onPress={() => {
          Dialog.show({
            icon: 'InfoCircleOutline',
            title: 'Log out',
            description: 'Are you sure you want to log out?',
            onConfirmText: 'Log out',
            onConfirm: () => logout(),
          });
        }}
      />
    </>
  );
}

export function PrimeUserInfoMoreButton() {
  const renderItems = useCallback(
    ({
      handleActionListClose,
    }: {
      handleActionListClose: () => void;
      handleActionListOpen: () => void;
    }) => (
      <PrimeUserInfoMoreButtonDropDownMenu
        handleActionListClose={handleActionListClose}
      />
    ),
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
