import $host from './config';

import { LocationFullData, LocationShortData } from '../types';

interface Response<T> {
  data: T;
  error?: string;
}

const api = {
  location: {
    list: (language: string) =>
      $host.get<Response<LocationShortData[]>>('/location/list', {
        params: {
          language,
        },
      }),
    get: (id: number, language: string) =>
      $host.get<Response<LocationFullData>>(`/location/${id}`, {
        params: {
          language,
        },
      }),
  },
};

export default api;
