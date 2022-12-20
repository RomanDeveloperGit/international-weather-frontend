import { FC } from 'react';

import { IconProps } from '../Icon.types';

const CloseButton: FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.743 1.363a1.07 1.07 0 0 1 1.505 0c.415.412.415 1.08 0 1.491l-16.55 16.4a1.07 1.07 0 0 1-1.505 0 1.047 1.047 0 0 1 0-1.49l16.55-16.4z"
      fill="#fff"
    />
    <path
      d="M.752 2.236a1.048 1.048 0 0 1 0-1.49 1.07 1.07 0 0 1 1.505 0l16.55 16.4c.415.412.415 1.08 0 1.49a1.07 1.07 0 0 1-1.505 0L.752 2.237z"
      fill="#fff"
    />
  </svg>
);

export default CloseButton;
