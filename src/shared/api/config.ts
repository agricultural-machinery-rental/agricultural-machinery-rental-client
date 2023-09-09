import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { sessionAPI } from './session';

export const BASE_URL = 'https://agropark.acceleratorpracticum.ru';

const API_MAIN_ENDPOINT = '/api/v1';

export const API_ENDPOINTS = {
  users: `${API_MAIN_ENDPOINT}/users`,
  machineries: `${API_MAIN_ENDPOINT}/machineries`,
  machinery: `${API_MAIN_ENDPOINT}/machineries/machinery`,
  orders: `${API_MAIN_ENDPOINT}/orders`,
};

export const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
);

instance.interceptors.response.use(
  (config: AxiosResponse) => {
    return config;
  },
  async error => {
    const originalRequest = error.config;

    if (error.response.status == 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await sessionAPI.refreshToken();
        localStorage.setItem('token', response.data.access);

        return instance.request(originalRequest);
      } catch (err) {
        console.error(err);
      }
    }
    throw error;
  },
);
