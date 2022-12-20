import { FC } from 'react';

import LanguageBox from '../../components/LanguageBox/LanguageBox';
import WeatherContainer from '../../components/WeatherContainer/WeatherContainer';

import styles from './Main.module.css';

const Main: FC = () => (
  <main className={styles.main}>
    <LanguageBox />
    <WeatherContainer />
  </main>
);

export default Main;
