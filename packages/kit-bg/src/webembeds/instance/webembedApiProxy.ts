import appGlobals from '@onekeyhq/shared/src/appGlobals';
import {
  EAppEventBusNames,
  appEventBus,
} from '@onekeyhq/shared/src/eventBus/appEventBus';
import platformEnv from '@onekeyhq/shared/src/platformEnv';
import { checkIsDefined } from '@onekeyhq/shared/src/utils/assertUtils';

import { RemoteApiProxyBase } from '../../apis/RemoteApiProxyBase';

import type { IWebembedApi, IWebembedApiKeys } from './IWebembedApi';
import type { IBackgroundApiWebembedCallMessage } from '../../apis/IBackgroundApi';
import type WebEmbedApiChainAdaLegacy from '../WebEmbedApiChainAdaLegacy';
import type WebEmbedApiImageUtils from '../WebEmbedApiImageUtils';
import type WebEmbedApiSecret from '../WebEmbedApiSecret';
import type WebEmbedApiTest from '../WebEmbedApiTest';

class WebembedApiProxy extends RemoteApiProxyBase implements IWebembedApi {
  // backgroundApiProxy = appGlobals.$backgroundApiProxy;
  // backgroundApiProxy = backgroundApiProxy;

  override checkEnvAvailable(): void {
    if (!platformEnv.isNative) {
      throw new Error(
        'WebembedApiProxy should only be used in iOS/Android Native env.',
      );
    }
  }

  override async waitRemoteApiReady(): Promise<void> {
    const ready = await this.isSDKReady();
    if (!ready) {
      return new Promise((resolve, reject) => {
        const timerId = setTimeout(() => {
          reject(new Error('WebEmbedApi not ready after 5s.'));
        }, 5000);
        appEventBus.once(EAppEventBusNames.LoadWebEmbedWebViewComplete, () => {
          clearTimeout(timerId);
          resolve();
        });
        appEventBus.emit(EAppEventBusNames.LoadWebEmbedWebView, undefined);
      });
    }
  }

  protected override async callRemoteApi(options: {
    module: IWebembedApiKeys;
    method: string;
    params: any[];
  }): Promise<any> {
    const { module, method, params } = options;
    const message: IBackgroundApiWebembedCallMessage = {
      module: module as any,
      method,
      params,
    };

    return checkIsDefined(
      appGlobals?.$backgroundApiProxy,
    ).serviceDApp.callWebEmbedApiProxy(message);
  }

  async isSDKReady(): Promise<boolean> {
    const isWebEmbedApiReady = await checkIsDefined(
      appGlobals?.$backgroundApiProxy,
    ).serviceDApp.isWebEmbedApiReady();
    return Promise.resolve(!!isWebEmbedApiReady);
  }

  test: WebEmbedApiTest = this._createProxyModule<IWebembedApiKeys>('test');

  chainAdaLegacy: WebEmbedApiChainAdaLegacy =
    this._createProxyModule<IWebembedApiKeys>('chainAdaLegacy', undefined, {
      asyncThenSupport: true,
    });

  secret: WebEmbedApiSecret =
    this._createProxyModule<IWebembedApiKeys>('secret');

  imageUtils: WebEmbedApiImageUtils =
    this._createProxyModule<IWebembedApiKeys>('imageUtils');
}

const webembedApiProxy = new WebembedApiProxy();
export default webembedApiProxy;
appGlobals.$webembedApiProxy = webembedApiProxy;
