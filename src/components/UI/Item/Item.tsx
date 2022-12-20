import clsx from 'clsx';
import { FC, HTMLAttributes, ReactNode } from 'react';

import styles from './Item.module.css';

type ItemProps = {
  children: ReactNode;
  className?: string;
  isActive?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const Item: FC<ItemProps> = ({ children, className, isActive = false, ...other }) => (
  <div className={clsx(styles.item, isActive && styles.itemActived, className)} {...other}>
    {children}
  </div>
);

export default Item;
