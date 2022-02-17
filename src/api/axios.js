import axios from 'axios';
import {API_ENDPOINT} from '@env';

const client = axios.create();

client.interceptors.request.use(config => {
  const token = '';
  const headers = {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
  config.headers = headers;
  config.baseURL = API_ENDPOINT;
  return config;
});

export default client;
