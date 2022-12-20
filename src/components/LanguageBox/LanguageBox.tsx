import { FC } from 'react';

import useTypedTranslation from '../../hooks/useTypedTranslation';

import LanguageList from '../LanguageList/LanguageList';

import styles from './LanguageBox.module.css';

const LanguageBox: FC = () => {
  const { t } = useTypedTranslation();

  return (
    <div className={styles.languageBox}>
      <span className={styles.title}>{t('language')}:</span>
      <LanguageList />
    </div>
  );
};

export default LanguageBox;
