import * as locationActionCreators from './location';
import * as locationListActionCreators from './locationList';

const allActionCreators = {
  ...locationListActionCreators,
  ...locationActionCreators,
};

export default allActionCreators;
