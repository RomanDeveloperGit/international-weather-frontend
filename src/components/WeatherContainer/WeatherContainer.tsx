import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import useActions from '../../hooks/useActions';
import useModal from '../../hooks/useModal';
import useTypedTranslation from '../../hooks/useTypedTranslation';
import { useLocationSelector } from '../../store/selectors/location';
import { useLocationListSelector } from '../../store/selectors/locationList';

import ControlBox from '../ControlBox/ControlBox';
import LocationDetails from '../LocationDetails/LocationDetails';
import LocationModal from '../LocationModal/LocationModal';
import Loader from '../UI/Loader/Loader';

import styles from './WeatherContainer.module.css';

const WeatherContainer: FC = () => {
  const { getLocationListRequest, getLocationRequest } = useActions();

  const locationList = useLocationListSelector();
  const currentLocation = useLocationSelector();

  const { currentLanguage } = useTypedTranslation();
  const { isOpen, open, close } = useModal();

  const handleModalOpen = useCallback(() => open(), [open]);
  const handleModalClose = () => close();

  const error = useMemo(
    () => locationList.error || currentLocation.error,
    [locationList.error, currentLocation.error],
  );

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isListSuccessUpdated = useRef<boolean>(false);
  const lastLocationId = useRef<number | null>(null);

  useEffect(() => {
    isListSuccessUpdated.current = false;

    getLocationListRequest(currentLanguage);
    setIsLoading(true);
  }, [getLocationListRequest, currentLanguage]);

  useEffect(() => {
    if (!locationList.data.length) return;

    isListSuccessUpdated.current = true;
  }, [locationList.data]);

  useEffect(() => {
    if (!isListSuccessUpdated.current) return;

    getLocationRequest(lastLocationId.current || locationList.data[0].id, currentLanguage);
  }, [locationList, currentLanguage, getLocationRequest]);

  useEffect(() => {
    if (!currentLocation.data) return;

    lastLocationId.current = currentLocation.data.id;
    setIsLoading(false);
  }, [currentLocation.data]);

  if (error) return <h2 className={styles.error}>{error}</h2>;

  if (isLoading)
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );

  return (
    <div className={styles.weatherContainer}>
      <LocationDetails />
      <ControlBox handleModalOpen={handleModalOpen} />
      {isOpen && <LocationModal handleClose={handleModalClose} />}
    </div>
  );
};

export default WeatherContainer;
