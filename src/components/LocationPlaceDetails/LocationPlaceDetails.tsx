import moment from 'moment';
import { FC } from 'react';

import useTypedTranslation from '../../hooks/useTypedTranslation';
import {
  useLocationCurrentDaySelector,
  useLocationDataSelector,
} from '../../store/selectors/location';

import { TranslationKeys } from '../../i18n/i18n.types';

import Icon from '../UI/Icon/Icon';
import { IconType } from '../UI/Icon/Icon.types';

import styles from './LocationPlaceDetails.module.css';

const LocationPlaceDetails: FC = () => {
  const currentLocation = useLocationDataSelector();
  const currentDay = useLocationCurrentDaySelector();

  const { t } = useTypedTranslation();

  const momentDate = moment(currentDay?.date);

  const locationName = currentLocation?.name;
  const locationCountry = currentLocation?.country;

  return (
    <div className={styles.locationPlaceDetails}>
      <span className={styles.day}>{momentDate.format('dddd')}</span>
      <span className={styles.date}>{momentDate.format('DD MMM YYYY')}</span>
      <div className={styles.locationBox}>
        <Icon className={styles.icon} type={IconType.Location} />
        <span className={styles.locationName}>
          {locationName}, {t(locationCountry?.toLowerCase() as TranslationKeys)}
        </span>
      </div>
    </div>
  );
};

export default LocationPlaceDetails;
