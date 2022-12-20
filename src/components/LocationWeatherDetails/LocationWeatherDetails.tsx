import { FC } from 'react';

import useTypedTranslation from '../../hooks/useTypedTranslation';
import { useLocationCurrentDaySelector } from '../../store/selectors/location';

import { TranslationKeys } from '../../i18n/i18n.types';

import WeatherIcon from '../WeatherIcon/WeatherIcon';

import styles from './LocationWeatherDetails.module.css';

const LocationWeatherDetails: FC = () => {
  const currentDay = useLocationCurrentDaySelector();
  const { t } = useTypedTranslation();

  return (
    <div className={styles.locationWeatherDetails}>
      <WeatherIcon className={styles.icon} dayId={currentDay?.id || 0} />
      <span className={styles.temperature}>
        {currentDay?.weather.temperature && currentDay?.weather.temperature >= 1 && '+'}
        {currentDay?.weather.temperature && Math.floor(currentDay?.weather.temperature)} °C
      </span>
      <p className={styles.description}>
        {t(currentDay?.weather.description.toLowerCase() as TranslationKeys)}
      </p>
    </div>
  );
};

export default LocationWeatherDetails;
