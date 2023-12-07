import axios from 'axios';
import {ParamsNetwork} from './type';
import {TIMEOUT} from './ApiConstant';

const BASE_URL = 'https://search.ofac-api.com/v3';
const KEY = 'c604aea8-72a4-41bc-aca3-f6988677e209';
const http = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});
// User enters full name and date of birth into the front-end,
//  and then the second screen will return a list of matches.
//  For the matches, pull their full name, date of birth and UID
// {
// 	"apiKey": "c604aea8-72a4-41bc-aca3-f6988677e209",
// 	"minScore": 95,
// 	"source": ["SDN"],
// 	"cases": [{
// 		"name": "Abu Abbas"
// 	}]
// }

const caches = new Map<string, any>();

function request<T>(config: ParamsNetwork) {
  config.data = Object.assign(config.data, {
    apiKey: KEY,
  });

  const hashed = JSON.stringify(config.data);
  if (caches.has(hashed)) {
    return Promise.resolve(caches.get(hashed));
  }

  return new Promise<T>((res, rej) => {
    http
      .request(config)
      .then(({data}) => {
        // caches.set(hashed, data);
        res(data);
      })
      .catch(error => rej(error));
  });
}

export function GET(params: ParamsNetwork) {
  return request({...params, method: 'GET'});
}
export function POST(params: ParamsNetwork) {
  return request({...params, method: 'POST'});
}
