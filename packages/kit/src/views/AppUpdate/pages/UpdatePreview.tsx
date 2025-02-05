import { UNSTABLE_usePreventRemove as usePreventRemove } from '@react-navigation/core';
import { useIntl } from 'react-intl';

import type { IPageScreenProps } from '@onekeyhq/components';
import {
  Badge,
  Heading,
  Icon,
  Markdown,
  Page,
  ScrollView,
  SizableText,
  XStack,
  YStack,
} from '@onekeyhq/components';
import { ETranslations } from '@onekeyhq/shared/src/locale';
import platformEnv from '@onekeyhq/shared/src/platformEnv';
import type {
  EAppUpdateRoutes,
  IAppUpdatePagesParamList,
} from '@onekeyhq/shared/src/routes';

import { useAppChangeLog } from '../../../components/UpdateReminder/hooks';
import { UpdatePreviewActionButton } from '../components/UpdatePreviewActionButton';
import { ViewUpdateHistory } from '../components/ViewUpdateHistory';

const ExtPluginText = platformEnv.isExtension
  ? () => {
      const intl = useIntl();
      return (
        <SizableText size="$bodyMd" color="$textSubdued">
          {intl.formatMessage({
            id: ETranslations.update_recommend_regular_check_and_update_plugin,
          })}
        </SizableText>
      );
    }
  : () => null;

function UpdatePreview({
  route,
}: IPageScreenProps<IAppUpdatePagesParamList, EAppUpdateRoutes.UpdatePreview>) {
  const intl = useIntl();
  const {
    latestVersion,
    isForceUpdate,
    autoClose = false,
  } = route.params || {};
  usePreventRemove(!!isForceUpdate, () => {});
  const changeLog = useAppChangeLog(latestVersion);
  return (
    <Page>
      <Page.Header
        title={intl.formatMessage({ id: ETranslations.update_app_update })}
      />
      <Page.Body m="$5">
        <YStack gap="$3">
          <Heading size="$heading2xl">
            {intl.formatMessage({ id: ETranslations.update_new_app_version })}
          </Heading>
          <ExtPluginText />
          <XStack gap="$2.5" alignItems="center">
            <Badge badgeType="default" badgeSize="lg">
              {platformEnv.version}
            </Badge>
            <Icon name="ArrowRightSolid" size="$4" />
            <Badge badgeType="info" badgeSize="lg">
              {latestVersion}
            </Badge>
          </XStack>
        </YStack>
        {changeLog ? (
          <ScrollView
            mt="$7"
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{ pb: '$5' }}
          >
            <Markdown>{changeLog}</Markdown>
            <ViewUpdateHistory />
          </ScrollView>
        ) : null}
      </Page.Body>
      <UpdatePreviewActionButton autoClose={autoClose} />
    </Page>
  );
}

export default UpdatePreview;
