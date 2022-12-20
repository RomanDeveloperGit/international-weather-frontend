import { FC, memo } from 'react';

import useTypedTranslation from '../../hooks/useTypedTranslation';

import DayList from '../DayList/DayList';
import DayWeatherDetails from '../DayWeatherDetails/DayWeatherDetails';
import LocationButtonMemo from '../LocationButton/LocationButton.memo';

import styles from './ControlBox.module.css';

type ControlBoxProps = {
  handleModalOpen: () => void;
};

const ControlBox: FC<ControlBoxProps> = ({ handleModalOpen }) => {
  const { t } = useTypedTranslation();

  return (
    <div className={styles.controlBox}>
      <DayWeatherDetails />
      <DayList />
      <LocationButtonMemo className={styles.button} onClick={handleModalOpen}>
        {t('changeLocation')}
      </LocationButtonMemo>
    </div>
  );
};

export default memo(ControlBox);
