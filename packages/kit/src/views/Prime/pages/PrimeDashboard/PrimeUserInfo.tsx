import { Badge, Icon, SizableText, Stack, XStack } from '@onekeyhq/components';

import { usePrimeAuth } from '../../hooks/usePrimeAuth';

import { PrimeUserInfoMoreButton } from './PrimeUserInfoMoreButton';

export function PrimeUserInfo() {
  const { user } = usePrimeAuth();
  return (
    <XStack
      px="$4"
      py="$3"
      mb="$5"
      alignItems="center"
      borderColor="$borderSubdued"
      borderWidth={1}
      borderRadius="$3"
      flexWrap="wrap"
    >
      <Icon name="FolderUserOutline" color="$iconSubdued" />
      <Stack flex={1}>
        <SizableText
          mx="$2"
          size="$bodyMdMedium"
          ellipse
          ellipsizeMode="middle"
        >
          test_long_email_address_for_testing_ellipsis_mode
          {user?.email}
        </SizableText>
      </Stack>
      {/* <Badge badgeType="warning" badgeSize="sm">
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
      </Badge> */}
      <Badge badgeType="default" badgeSize="sm">
        Free
      </Badge>
      <PrimeUserInfoMoreButton />
    </XStack>
  );
}
