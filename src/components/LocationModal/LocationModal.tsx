import { FC, useCallback, useState } from 'react';

import useActions from '../../hooks/useActions';
import useTypedTranslation from '../../hooks/useTypedTranslation';
import { useLocationSelector } from '../../store/selectors/location';

import LocationButton from '../LocationButton/LocationButton';
import LocationList from '../LocationList/LocationList';
import Modal from '../UI/Modal/Modal';

import styles from './LocationModal.module.css';

type LocationModalProps = {
  handleClose: () => void;
};

const LocationModal: FC<LocationModalProps> = ({ handleClose }) => {
  const { getLocationRequest } = useActions();
  const { data: currentLocation, isLoading } = useLocationSelector();

  const { t, currentLanguage } = useTypedTranslation();

  const [selectedLocationId, setSelectedLocationId] = useState<number>(currentLocation?.id || 0);

  const handleModalClose = useCallback(() => {
    if (!isLoading) handleClose();
  }, [isLoading, handleClose]);

  const handleLocationSelect = useCallback((id: number) => {
    setSelectedLocationId(id);
  }, []);

  const handleLocationChange = () => {
    if (currentLocation?.id === selectedLocationId) return;

    getLocationRequest(selectedLocationId, currentLanguage, handleModalClose);
  };

  return (
    <Modal className={styles.modal} title={t('chooseNewLocation')} handleClose={handleModalClose}>
      <LocationList
        selectedLocationId={selectedLocationId}
        handleItemClick={handleLocationSelect}
      />
      <LocationButton className={styles.button} onClick={handleLocationChange} disabled={isLoading}>
        {t('selectLocation')}
      </LocationButton>
    </Modal>
  );
};

export default LocationModal;
