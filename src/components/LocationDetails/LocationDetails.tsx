import { FC, memo } from 'react';

import LocationPlaceDetails from '../LocationPlaceDetails/LocationPlaceDetails';
import LocationWeatherDetails from '../LocationWeatherDetails/LocationWeatherDetails';

import styles from './LocationDetails.module.css';

const LocationDetails: FC = () => (
  <div className={styles.locationDetails}>
    <LocationPlaceDetails />
    <LocationWeatherDetails />
  </div>
);

export default memo(LocationDetails);
