import clsx from 'clsx';
import { FC, ReactNode } from 'react';

import Portal from '../Portal/Portal';
import { PortalRootId } from '../Portal/utils';

import Icon from '../Icon/Icon';
import { IconType } from '../Icon/Icon.types';

import styles from './Modal.module.css';

type ModalProps = {
  children: ReactNode;
  className?: string;
  title: ReactNode;
  handleClose: () => void;
  handleOverlayClick?: () => void;
};

const Modal: FC<ModalProps> = ({ children, className, title, handleClose, handleOverlayClick }) => (
  <Portal type={PortalRootId.Modal}>
    <div className={styles.overlay} onClick={handleOverlayClick} />
    <div className={clsx(styles.modal, className)}>
      <div className={styles.top}>
        <span className={styles.title}>{title}</span>
        <button className={styles.closeButton} onClick={handleClose}>
          <Icon className={styles.closeIcon} type={IconType.CloseButton} />
        </button>
      </div>
      {children}
    </div>
  </Portal>
);

export default Modal;
