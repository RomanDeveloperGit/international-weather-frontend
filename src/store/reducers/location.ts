import { LocationAction, LocationActionType, LocationState } from '../../types/location';

const INITIAL_STATE: LocationState = {
  data: null,
  currentDayId: 0,
  isLoading: false,
  error: null,
};

const locationReducer = (state = INITIAL_STATE, action: LocationAction): LocationState => {
  switch (action.type) {
    case LocationActionType.GetLocationRequest:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LocationActionType.GetLocationSuccess:
      return {
        data: action.payload,
        currentDayId: state.currentDayId || action.payload.days[0].id,
        isLoading: false,
        error: null,
      };
    case LocationActionType.GetLocationError:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case LocationActionType.SetCurrentDayId:
      return {
        ...state,
        currentDayId: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
