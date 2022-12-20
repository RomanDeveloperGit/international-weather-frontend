import { FC } from 'react';

import useActions from '../../hooks/useActions';
import {
  useLocationCurrentDaySelector,
  useLocationDataSelector,
} from '../../store/selectors/location';

import DayItem from '../DayItem/DayItem';

import styles from './DayList.module.css';

const DayList: FC = () => {
  const currentLocation = useLocationDataSelector();
  const currentDay = useLocationCurrentDaySelector();

  const { setCurrentDayId } = useActions();

  // Из-за этого тепеерь memo item теряет смысл. Пересмотреть все мемо!
  const handleClick = (id: number) => {
    if (currentDay?.id === id) return;

    setCurrentDayId(id);
  };

  return (
    <div className={styles.dayList}>
      {currentLocation?.days.map((day) => (
        <DayItem
          id={day.id}
          date={day.date}
          temperature={day.weather.temperature}
          isActive={day.id === currentDay?.id}
          handleClick={handleClick}
          key={day.id}
        />
      ))}
    </div>
  );
};

export default DayList;
