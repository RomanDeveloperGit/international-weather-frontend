import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import allActionCreators from '../store/actionCreators';

const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(allActionCreators, dispatch), [dispatch]);
};

export default useActions;
