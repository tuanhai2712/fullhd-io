import { AxiosRequestConfig } from 'axios';
import HttpClient from './HttpClient'
import * as utils from '@utils/utils';

export default class Api extends HttpClient {
  public constructor(url: string | undefined) {
    super(url);
    this._initializeRequestInterceptor();
  }

  private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleError,
    );
  };

  protected _handleRequest = (config: AxiosRequestConfig) => {
    config.headers['Content-Type'] = 'application/json';
    config.headers['Accept'] = 'application/json';
    const authToken = utils.getStorage('authToken');
    if (authToken !== null && authToken !== '')
      config.headers['Authorization'] = 'Bearer ' + authToken;

    return config;
  };
}
