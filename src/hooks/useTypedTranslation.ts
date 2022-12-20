import { useTranslation } from 'react-i18next';

import { TranslationKeys } from '../i18n/i18n.types';

type Translator = (key: TranslationKeys) => string;

const useTypedTranslation = () => {
  const {
    t,
    i18n: { language, changeLanguage },
  } = useTranslation();

  return {
    t: t as Translator,
    currentLanguage: language,
    changeLanguage,
  };
};

export default useTypedTranslation;
