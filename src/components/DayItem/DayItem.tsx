import clsx from 'clsx';
import moment from 'moment';
import { FC, memo } from 'react';

import Item from '../UI/Item/Item';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

import styles from './DayItem.module.css';

type DayProps = {
  id: number;
  date: string;
  temperature: number;
  isActive: boolean;
  handleClick: (id: number) => void;
};

const DayItem: FC<DayProps> = ({ id, date, temperature, isActive = false, handleClick }) => {
  const dayShortName = moment(date).format('ddd');
  const changeCurrentDayId = () => handleClick(id);

  return (
    <Item className={styles.item} isActive={isActive} onClick={changeCurrentDayId}>
      <WeatherIcon className={styles.weatherIcon} dayId={id} />
      <span className={clsx(styles.text, styles.textCapitalize)}>{dayShortName}</span>
      <span className={clsx(styles.text, styles.textBold)}>
        {temperature >= 1 && '+'}
        {Math.floor(temperature)} °C
      </span>
    </Item>
  );
};

export default memo(DayItem);
