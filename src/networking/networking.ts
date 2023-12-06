import axios from 'axios';
import {ParamsNetwork} from './type';
import {TIMEOUT} from './ApiConstant';

const BASE_URL = '';
const http = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

function request<T>(config: ParamsNetwork) {
  return new Promise<T>((res, rej) => {
    http
      .request(config)
      .then(({data}) => res(data))
      .catch(error => rej(error));
  });
}

export function GET(params: ParamsNetwork) {
  return request({...params, method: 'GET'});
}
export function POST(params: ParamsNetwork) {
  return request({...params, method: 'POST'});
}
