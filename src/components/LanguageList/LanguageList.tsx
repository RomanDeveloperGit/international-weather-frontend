import { FC, useCallback } from 'react';

import useTypedTranslation from '../../hooks/useTypedTranslation';

import { Language } from '../../i18n/config';
import LanguageItem from '../LanguageItem/LanguageItem';

import styles from './LanguageList.module.css';

const languageList = Object.values(Language || {});

const LanguageList: FC = () => {
  const { currentLanguage, changeLanguage } = useTypedTranslation();

  const handleClick = useCallback(
    (language: string) => {
      changeLanguage(language);
    },
    [changeLanguage],
  );

  return (
    <div className={styles.languageList}>
      {languageList.map((language) => (
        <LanguageItem
          language={language}
          isActive={currentLanguage === language}
          handleClick={handleClick}
          key={language}
        />
      ))}
    </div>
  );
};

export default LanguageList;
