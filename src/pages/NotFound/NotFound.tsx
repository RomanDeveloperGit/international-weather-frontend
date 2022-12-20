import clsx from 'clsx';
import { FC } from 'react';

import styles from './NotFound.module.css';

const NotFound: FC = () => (
  <section className={styles.notFound}>
    <h2 className={clsx(styles.text)}>Page not found.</h2>
    <h2 className={clsx(styles.text, styles.errorText)}>Error 404</h2>
  </section>
);

export default NotFound;
