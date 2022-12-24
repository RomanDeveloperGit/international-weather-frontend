import { Dispatch } from 'react';

import api from '../../http';

import { LocationFullData } from '../../types';
import { LocationAction, LocationActionType } from '../../types/location';

export const getLocationSuccess = (data: LocationFullData): LocationAction => ({
  type: LocationActionType.GetLocationSuccess,
  payload: data,
});

export const getLocationError = (error: string): LocationAction => ({
  type: LocationActionType.GetLocationError,
  payload: error,
});

export const setCurrentDayId = (id: number): LocationAction => ({
  type: LocationActionType.SetCurrentDayId,
  payload: id,
});

export const getLocationRequest =
  (id: number, language: string, callback?: () => void) =>
  async (dispatch: Dispatch<LocationAction>) => {
    try {
      dispatch({
        type: LocationActionType.GetLocationRequest,
        payload: {
          id,
          language,
        },
      });

      const {
        data: { data, error },
      } = await api.location.get(id, language);
      if (!data) throw Error(error || 'The expected data has not been received!');

      dispatch(getLocationSuccess(data));

      if (callback) callback();
    } catch (error) {
      dispatch(getLocationError('Couldn`t get data of location.'));

      console.error(error);
    }
  };
