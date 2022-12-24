import { Dispatch } from 'react';

import api from '../../http';

import { LocationShortData } from '../../types';
import { LocationListAction, LocationListActionType } from '../../types/locationList';

export const getLocationListSuccess = (data: LocationShortData[]): LocationListAction => ({
  type: LocationListActionType.GetLocationListSuccess,
  payload: data,
});

export const getLocationListError = (error: string): LocationListAction => ({
  type: LocationListActionType.GetLocationListError,
  payload: error,
});

export const getLocationListRequest =
  (language: string) => async (dispatch: Dispatch<LocationListAction>) => {
    try {
      dispatch({
        type: LocationListActionType.GetLocationListRequest,
        payload: language,
      });

      const {
        data: { data, error },
      } = await api.location.list(language);

      if (!Array.isArray(data) || !data.length)
        throw Error(error || 'The expected data has not been received!');

      dispatch(getLocationListSuccess(data));
    } catch (error) {
      dispatch(getLocationListError('Couldn`t get a collection of all locations.'));

      console.error(error);
    }
  };
