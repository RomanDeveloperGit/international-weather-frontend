import { FC, memo } from 'react';

import useTypedTranslation from '../../hooks/useTypedTranslation';

import { TranslationKeys } from '../../i18n/i18n.types';
import Item from '../UI/Item/Item';

import styles from './LocationItem.module.css';

type LocationItemProps = {
  id: number;
  name: string;
  country: string;
  isActive: boolean;
  handleClick: (id: number) => void;
};

const LocationItem: FC<LocationItemProps> = ({ id, name, country, isActive, handleClick }) => {
  const changeCurrentLocationId = () => handleClick(id);

  const { t } = useTypedTranslation();

  return (
    <Item className={styles.item} isActive={isActive} onClick={changeCurrentLocationId}>
      <span>
        {name}, {t(country.toLowerCase() as TranslationKeys)}
      </span>
    </Item>
  );
};

export default memo(LocationItem);
