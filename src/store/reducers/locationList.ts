import {
  LocationListAction,
  LocationListActionType,
  LocationListState,
} from '../../types/locationList';

const INITIAL_STATE: LocationListState = {
  data: [],
  isLoading: false,
  error: null,
};

const locationListReducer = (
  state = INITIAL_STATE,
  action: LocationListAction,
): LocationListState => {
  switch (action.type) {
    case LocationListActionType.GetLocationListRequest:
      return {
        data: [],
        isLoading: true,
        error: null,
      };
    case LocationListActionType.GetLocationListSuccess:
      return {
        data: action.payload,
        isLoading: false,
        error: null,
      };
    case LocationListActionType.GetLocationListError:
      return {
        data: [],
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default locationListReducer;
