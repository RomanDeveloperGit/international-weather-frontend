import { FC } from 'react';

import useTypedTranslation from '../../hooks/useTypedTranslation';
import { useLocationCurrentDaySelector } from '../../store/selectors/location';

import styles from './DayWeatherDetails.module.css';

const DayWeatherDetails: FC = () => {
  const currentDay = useLocationCurrentDaySelector();

  const { t } = useTypedTranslation();

  return (
    <div className={styles.dayWeatherDetails}>
      <p className={styles.row}>
        <span className={styles.rowName}>{t('cloudiness')}</span>
        <span className={styles.rowValue}>{currentDay?.weather.cloudiness}%</span>
      </p>
      <p className={styles.row}>
        <span className={styles.rowName}>{t('humidity')}</span>
        <span className={styles.rowValue}>{currentDay?.weather.humidity}%</span>
      </p>
      <p className={styles.row}>
        <span className={styles.rowName}>{t('wind')}</span>
        <span className={styles.rowValue}>
          {currentDay?.weather.wind && Math.floor(currentDay?.weather.wind)} m/s
        </span>
      </p>
    </div>
  );
};

export default DayWeatherDetails;
