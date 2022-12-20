import useTypedSelector from '../../hooks/useTypedSelector';

export const useLocationSelector = () => useTypedSelector((state) => state.location);

export const useLocationDataSelector = () => useTypedSelector((state) => state.location.data);

export const useLocationDaySelector = (id: number) =>
  useTypedSelector((state) => state.location.data?.days.find((day) => day.id === id));

export const useLocationCurrentDaySelector = () =>
  useTypedSelector((state) =>
    state.location.data?.days.find((day) => day.id === state.location.currentDayId),
  );
