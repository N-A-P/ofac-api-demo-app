import {AxiosRequestConfig} from 'axios';

export interface ParamsNetwork extends AxiosRequestConfig {
  url: string;
  params?: Record<string, string | number>;
  path?: Record<string, string | number>;
  body?: Record<string, unknown>;
  controller?: AbortController;
}
