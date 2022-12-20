import useTypedSelector from '../../hooks/useTypedSelector';

export const useLocationListSelector = () => useTypedSelector((state) => state.locationList);
