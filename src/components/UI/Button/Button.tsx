import clsx from 'clsx';
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import styles from './Button.module.css';

export type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, className, ...other }) => (
  <button className={clsx(styles.button, className)} {...other}>
    {children}
  </button>
);

export default Button;
