import axios from 'axios';

const API_PROTOCOL = 'http:';
const API_HOST = '192.168.0.2';
const API_PORT = process.env.API_PORT ?? 8000;
const MAX_REQUEST_TIMEOUT = 30 * 1000;

const $host = axios.create({
  baseURL: `${API_PROTOCOL}//${API_HOST}:${API_PORT}/api`,
  timeout: MAX_REQUEST_TIMEOUT,
});

export default $host;
