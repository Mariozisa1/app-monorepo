import { isString } from 'lodash';

import { ensureSensitiveTextEncoded } from '@onekeyhq/core/src/secret';
import { appApiClient } from '@onekeyhq/shared/src/appApiClient/appApiClient';
import {
  backgroundMethod,
  toastIfError,
} from '@onekeyhq/shared/src/background/backgroundDecorators';
import { PrimeLoginDialogCancelError } from '@onekeyhq/shared/src/errors';
import stringUtils from '@onekeyhq/shared/src/utils/stringUtils';
import timerUtils from '@onekeyhq/shared/src/utils/timerUtils';
import type { IApiClientResponse } from '@onekeyhq/shared/types/endpoint';
import { EServiceEndpointEnum } from '@onekeyhq/shared/types/endpoint';
import type { IPrimeUserInfo } from '@onekeyhq/shared/types/prime/primeTypes';

import { getEndpointInfo } from '../../endpoints';
import {
  primeLoginDialogAtom,
  primePersistAtom,
} from '../../states/jotai/atoms/prime';
import ServiceBase from '../ServiceBase';

import type { IPrimeLoginDialogKeys } from '../../states/jotai/atoms/prime';
import type { AxiosInstance } from 'axios';

class ServicePrime extends ServiceBase {
  constructor({ backgroundApi }: { backgroundApi: any }) {
    super({ backgroundApi });
  }

  _primeAuthClient: AxiosInstance | undefined;

  async getPrimeClient() {
    if (this._primeAuthClient) {
      return this._primeAuthClient;
    }
    const endpointInfo = await getEndpointInfo({
      name: EServiceEndpointEnum.Prime,
    });
    const client = await appApiClient.getBasicClient(endpointInfo);
    client.interceptors.request.use(async (config) => {
      const authToken = await this.backgroundApi.simpleDb.prime.getAuthToken();
      if (authToken) {
        // TODO use cookie instead of simpleDb
        config.headers['OneKey-Prime-Token'] = `${authToken}`;
      }
      return config;
    });
    client.interceptors.response.use(
      (response) => response,
      (error) => {
        // TODO check invalid token and logout
        // this.setPrimePersistAtomNotLoggedIn()
        throw error;
      },
    );
    this._primeAuthClient = client;
    return this._primeAuthClient;
  }

  @backgroundMethod()
  async apiFetchPrimeUserInfo(): Promise<IPrimeUserInfo> {
    const authToken = await this.backgroundApi.simpleDb.prime.getAuthToken();
    if (!authToken) {
      await this.setPrimePersistAtomNotLoggedIn();
      return primePersistAtom.get();
    }
    const client = await this.getPrimeClient();
    const result = await client.get<IApiClientResponse<IPrimeUserInfo>>(
      '/api/prime/user-info',
    );
    return result?.data?.data;
  }

  async setPrimePersistAtomNotLoggedIn() {
    await primePersistAtom.set(() => ({
      isLoggedIn: false,
      email: undefined,
      primeSubscription: undefined,
    }));
  }

  @backgroundMethod()
  async apiPreparePrimeLogin({ email }: { email: string }): Promise<{
    isRegistered: boolean;
    verifyUUID: string;
    captchaRequired: boolean;
    emailCodeRequired: boolean;
  }> {
    await timerUtils.wait(600);
    try {
      const client = await this.getClient(EServiceEndpointEnum.Prime);
      const result = await client.get<
        IApiClientResponse<{
          isRegistered: boolean;
          verifyUUID: string;
          captchaRequired: boolean;
          emailCodeRequired: boolean;
        }>
      >('/api/prime/check-email-registered', {
        params: {
          email,
        },
      });
      return result?.data?.data;
    } catch (error) {
      console.error(error);
    }

    if (email.startsWith('1')) {
      return {
        isRegistered: true,
        verifyUUID: stringUtils.generateUUID(),
        captchaRequired: false,
        emailCodeRequired: false,
      };
    }

    return {
      isRegistered: false,
      verifyUUID: stringUtils.generateUUID(),
      captchaRequired: true,
      emailCodeRequired: true,
    };
  }

  @backgroundMethod()
  async apiSendEmailVerificationCode({
    email,
    verifyUUID,
  }: {
    email: string;
    verifyUUID: string;
  }): Promise<{ success: boolean }> {
    await timerUtils.wait(600);
    try {
      const client = await this.getClient(EServiceEndpointEnum.Prime);
      const result = await client.get<IApiClientResponse<{ success: boolean }>>(
        '/api/prime/send-email-verification-code',
        {
          params: {
            email,
            verifyUUID,
          },
        },
      );
      return result?.data?.data;
    } catch (error) {
      console.error(error);
    }

    return { success: true };
  }

  @backgroundMethod()
  async apiPrimeLogin({
    email,
    password,
    emailCode,
    verifyUUID,
    isRegister,
  }: {
    email: string;
    password: string;
    emailCode: string;
    verifyUUID: string;
    isRegister: boolean;
  }) {
    await timerUtils.wait(600);
    try {
      const client = await this.getClient(EServiceEndpointEnum.Prime);
      const result = await client.post<
        IApiClientResponse<{ success: boolean }>
      >('/api/prime/login', {
        data: { email, password, emailCode, verifyUUID, isRegister },
      });
      return result?.data?.data;
    } catch (error) {
      console.error(error);
    }
    return { success: false };
  }

  @backgroundMethod()
  @toastIfError()
  async ensurePrimeLoginValidEmail(email: string) {
    if (!stringUtils.isValidEmail(email)) {
      // TODO i18n error
      throw new Error('Invalid email');
    }
  }

  @backgroundMethod()
  @toastIfError()
  async ensurePrimeLoginValidPassword(password: string) {
    ensureSensitiveTextEncoded(password);
    const rawPassword =
      await this.backgroundApi.servicePassword.decodeSensitiveText({
        encodedText: password,
      });
    if (!rawPassword) {
      throw new Error('Invalid password');
    }
  }

  @backgroundMethod()
  @toastIfError()
  async startPrimeLogin() {
    const { email } = await this.promptPrimeLoginEmailDialog();

    // TODO move to UI
    const { isRegistered, verifyUUID, captchaRequired, emailCodeRequired } =
      // TODO close loading dialog and reject promise
      await this.withDialogLoading(
        {
          title: 'Checking email',
        },
        async () =>
          this.apiPreparePrimeLogin({
            email,
          }),
      );
    const isRegister = !isRegistered;

    const { password } = await this.promptPrimeLoginPasswordDialog({
      email,
      isRegister,
    });
    ensureSensitiveTextEncoded(password);

    if (captchaRequired) {
      // TODO captcha verify (register, or login retry 5 times)
    }

    let code = '';
    if (emailCodeRequired) {
      ({ code } = await this.promptPrimeLoginEmailCodeDialog({
        email,
        verifyUUID,
      }));
    }

    // TODO move to UI
    const { success } = await this.withDialogLoading(
      { title: 'Logging in' },
      async () =>
        this.apiPrimeLogin({
          email,
          password,
          emailCode: code,
          verifyUUID,
          isRegister,
        }),
    );

    return {
      success,
      email,
      password,
      isRegister,
      code,
      captcha: 'mock-captcha',
      verifyUUID,
    };
  }

  @backgroundMethod()
  async startForgetPassword({
    email,
    passwordDialogPromiseId,
  }: {
    email: string;
    passwordDialogPromiseId: number;
  }) {
    console.log('startForgetPassword', passwordDialogPromiseId);
    if (passwordDialogPromiseId) {
      await this.cancelPrimeLogin({
        promiseId: passwordDialogPromiseId,
        dialogType: 'promptPrimeLoginPasswordDialog',
      });
    }

    // TODO show forget password dialog

    return { success: true };
  }

  @backgroundMethod()
  async startChangePassword() {
    // TODO show change password dialog
  }

  @backgroundMethod()
  async promptPrimeLoginEmailDialog() {
    // eslint-disable-next-line no-async-promise-executor
    const email = await new Promise<string>(async (resolve, reject) => {
      const promiseId = this.backgroundApi.servicePromise.createCallback({
        resolve,
        reject,
      });
      await primeLoginDialogAtom.set((v) => ({
        ...v,
        promptPrimeLoginEmailDialog: promiseId,
      }));
    });
    await this.ensurePrimeLoginValidEmail(email);
    return { email };
  }

  @backgroundMethod()
  @toastIfError()
  async resolvePrimeLoginEmailDialog({
    promiseId,
    email,
  }: {
    promiseId: number;
    email: string;
  }) {
    if (isString(email)) {
      // eslint-disable-next-line no-param-reassign
      email = email.trim();
    }
    await this.ensurePrimeLoginValidEmail(email);
    await primeLoginDialogAtom.set((v) => ({
      ...v,
      promptPrimeLoginEmailDialog: undefined,
    }));
    await this.backgroundApi.servicePromise.resolveCallback({
      id: promiseId,
      data: email,
    });
  }

  @backgroundMethod()
  async promptPrimeLoginPasswordDialog({
    email,
    isRegister,
  }: {
    email: string;
    isRegister?: boolean;
  }) {
    // eslint-disable-next-line no-async-promise-executor
    const password = await new Promise<string>(async (resolve, reject) => {
      const promiseId = this.backgroundApi.servicePromise.createCallback({
        resolve,
        reject,
      });
      await primeLoginDialogAtom.set((v) => ({
        ...v,
        promptPrimeLoginPasswordDialog: {
          email,
          isRegister,
          promiseId,
        },
      }));
    });
    ensureSensitiveTextEncoded(password);
    return { password };
  }

  @backgroundMethod()
  @toastIfError()
  async resolvePrimeLoginPasswordDialog({
    promiseId,
    password,
  }: {
    promiseId: number;
    password: string;
  }) {
    ensureSensitiveTextEncoded(password);
    await timerUtils.wait(300);
    await primeLoginDialogAtom.set((v) => ({
      ...v,
      promptPrimeLoginPasswordDialog: undefined,
    }));
    await this.backgroundApi.servicePromise.resolveCallback({
      id: promiseId,
      data: password,
    });
  }

  @backgroundMethod()
  async promptPrimeLoginEmailCodeDialog({
    email,
    verifyUUID,
  }: {
    email: string;
    verifyUUID: string;
  }) {
    // eslint-disable-next-line no-async-promise-executor
    const code = await new Promise<string>(async (resolve, reject) => {
      const promiseId = this.backgroundApi.servicePromise.createCallback({
        resolve,
        reject,
      });
      await primeLoginDialogAtom.set((v) => ({
        ...v,
        promptPrimeLoginEmailCodeDialog: {
          email,
          verifyUUID,
          promiseId,
        },
      }));
    });
    return { code };
  }

  @backgroundMethod()
  @toastIfError()
  async resolvePrimeLoginEmailCodeDialog({
    promiseId,
    code,
  }: {
    promiseId: number;
    code: string;
  }) {
    if (!code || code.length !== 6) {
      throw new Error('Invalid code');
    }
    await primeLoginDialogAtom.set((v) => ({
      ...v,
      promptPrimeLoginEmailCodeDialog: undefined,
    }));
    await this.backgroundApi.servicePromise.resolveCallback({
      id: promiseId,
      data: code,
    });
  }

  @backgroundMethod()
  async cancelPrimeLogin({
    promiseId,
    dialogType,
  }: {
    promiseId: number;
    dialogType: IPrimeLoginDialogKeys;
  }) {
    const error = new PrimeLoginDialogCancelError();
    await primeLoginDialogAtom.set((v) => ({
      ...v,
      [dialogType]: undefined,
    }));
    return this.backgroundApi.servicePromise.rejectCallback({
      id: promiseId,
      error,
    });
  }
}

export default ServicePrime;
