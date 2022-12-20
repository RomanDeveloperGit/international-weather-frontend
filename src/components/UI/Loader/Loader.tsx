import { memo } from 'react';

import styles from './Loader.module.css';

const Loader = () => <div className={styles.loader} />;

export default memo(Loader);
