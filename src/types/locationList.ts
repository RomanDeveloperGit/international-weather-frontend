import { ErrorMessage, LocationShortData } from '.';

export interface LocationListState {
  data: LocationShortData[];
  isLoading: boolean;
  error: ErrorMessage;
}

export enum LocationListActionType {
  GetLocationListRequest = 'GET_LOCATION_LIST_REQUEST',
  GetLocationListSuccess = 'GET_LOCATION_LIST_SUCCESS',
  GetLocationListError = 'GET_LOCATION_LIST_ERROR',
}

export interface GetLocationListRequestAction {
  type: LocationListActionType.GetLocationListRequest;
  payload: string;
}

export interface GetLocationListSuccessAction {
  type: LocationListActionType.GetLocationListSuccess;
  payload: LocationShortData[];
}

export interface GetLocationListErrorAction {
  type: LocationListActionType.GetLocationListError;
  payload: string;
}

export type LocationListAction =
  | GetLocationListRequestAction
  | GetLocationListSuccessAction
  | GetLocationListErrorAction;
