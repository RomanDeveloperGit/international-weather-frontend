import { ErrorMessage, LocationFullData } from '.';

export interface LocationState {
  data: LocationFullData | null;
  currentDayId: number;
  isLoading: boolean;
  error: ErrorMessage;
}

export enum LocationActionType {
  GetLocationRequest = 'GET_LOCATION_REQUEST',
  GetLocationSuccess = 'GET_LOCATION_SUCCESS',
  GetLocationError = 'GET_LOCATION_ERROR',
  SetCurrentDayId = 'SET_CURRENT_DAY_ID',
}

export interface GetLocationRequestAction {
  type: LocationActionType.GetLocationRequest;
  payload: {
    id: number;
    language: string;
  };
}

export interface GetLocationSuccessAction {
  type: LocationActionType.GetLocationSuccess;
  payload: LocationFullData;
}

export interface GetLocationErrorAction {
  type: LocationActionType.GetLocationError;
  payload: string;
}

export interface SetCurrentDayIdAction {
  type: LocationActionType.SetCurrentDayId;
  payload: number;
}

export type LocationAction =
  | GetLocationRequestAction
  | GetLocationSuccessAction
  | GetLocationErrorAction
  | SetCurrentDayIdAction;
