import { FC, ReactNode, useMemo } from 'react';
import { createPortal } from 'react-dom';

import { PortalRootId } from './utils';

import styles from './Portal.module.css';

type PortalProps = {
  children: ReactNode;
  type: PortalRootId;
};

const Portal: FC<PortalProps> = ({ children, type }) => {
  const portalContainer = useMemo(() => document.querySelector(`#${type}`) as HTMLElement, [type]);

  return createPortal(<div className={styles.childrenContainer}>{children}</div>, portalContainer);
};

export default Portal;
