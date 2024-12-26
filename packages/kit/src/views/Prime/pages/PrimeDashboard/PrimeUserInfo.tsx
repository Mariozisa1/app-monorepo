import { Badge, Icon, SizableText, Stack, XStack } from '@onekeyhq/components';

import { usePrimeAuth } from '../../hooks/usePrimeAuth';

import { PrimeUserInfoMoreButton } from './PrimeUserInfoMoreButton';

export function PrimeUserInfo() {
  const { user } = usePrimeAuth();
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
        {user?.email}
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
