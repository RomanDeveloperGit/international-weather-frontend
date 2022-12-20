import moment from 'moment';
import { FC, useEffect } from 'react';

import useTypedTranslation from './hooks/useTypedTranslation';

import Router from './router/Router';

const App: FC = () => {
  const { currentLanguage } = useTypedTranslation();

  useEffect(() => {
    moment.locale(currentLanguage);
  }, [currentLanguage]);

  return <Router />;
};

export default App;
