import { FC, ReactNode } from 'react';

import clsx from 'clsx';

import Button, { ButtonProps } from '../UI/Button/Button';
import Icon from '../UI/Icon/Icon';
import { IconType } from '../UI/Icon/Icon.types';

import styles from './LocationButton.module.css';

type LocationButtonProps = {
  children: ReactNode;
  className?: string;
} & ButtonProps;

const LocationButton: FC<LocationButtonProps> = ({ children, className, ...other }) => (
  <Button className={clsx(styles.button, className)} {...other}>
    <Icon type={IconType.Location} />
    <span>{children}</span>
  </Button>
);

export default LocationButton;
