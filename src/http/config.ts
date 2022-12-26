import axios from 'axios';

const API_PROTOCOL = process.env.API_PROTOCOL || 'http:';
const API_HOST = process.env.API_HOST || 'localhost';
const API_PORT = process.env.API_PORT || 8000;
const API_MAX_REQUEST_TIMEOUT = Number(process.env.API_MAX_REQUEST_TIMEOUT) || 30 * 1000;

const $host = axios.create({
  baseURL: `${API_PROTOCOL}//${API_HOST}:${API_PORT}/api`,
  timeout: API_MAX_REQUEST_TIMEOUT,
});

export default $host;
