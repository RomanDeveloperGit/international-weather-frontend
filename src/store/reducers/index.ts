import { combineReducers } from 'redux';

import currentLocationReducer from './location';
import locationListReducer from './locationList';

export const rootReducer = combineReducers({
  locationList: locationListReducer,
  location: currentLocationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
