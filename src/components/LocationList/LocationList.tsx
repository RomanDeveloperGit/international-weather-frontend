import { FC } from 'react';

import { useLocationListSelector } from '../../store/selectors/locationList';

import LocationItem from '../LocationItem/LocationItem';

import styles from './LocationList.module.css';

type LocationListProps = {
  selectedLocationId: number;
  handleItemClick: (id: number) => void;
};

const LocationList: FC<LocationListProps> = ({ selectedLocationId, handleItemClick }) => {
  const { data: locationList } = useLocationListSelector();

  return (
    <div className={styles.locationList}>
      {locationList.map((location) => (
        <LocationItem
          id={location.id}
          name={location.name}
          country={location.country}
          isActive={selectedLocationId === location.id}
          handleClick={handleItemClick}
          key={location.id}
        />
      ))}
    </div>
  );
};

export default LocationList;
