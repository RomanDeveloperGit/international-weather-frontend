import { FC } from 'react';

import { useLocationSelector } from '../../store/selectors/location';
import { useLocationListSelector } from '../../store/selectors/locationList';

import Item from '../UI/Item/Item';

import styles from './LanguageItem.module.css';

type LanguageItemProps = {
  language: string;
  isActive: boolean;
  handleClick: (language: string) => void;
};

const LanguageItem: FC<LanguageItemProps> = ({ language, isActive, handleClick }) => {
  const locationList = useLocationListSelector();
  const currentLocation = useLocationSelector();

  const changeLanguage = () => {
    if (locationList.isLoading || currentLocation.isLoading) return;

    handleClick(language);
  };

  return (
    <Item className={styles.item} isActive={isActive} onClick={changeLanguage}>
      {language}
    </Item>
  );
};

export default LanguageItem;
