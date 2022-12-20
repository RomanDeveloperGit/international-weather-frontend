import { FC, memo } from 'react';

import { IconCreatorProps } from './Icon.types';
import { ICON_ELEMENT_BY_TYPE } from './utils';

const Icon: FC<IconCreatorProps> = ({ type, className }) => {
  const Element = ICON_ELEMENT_BY_TYPE[type];
  if (!Element) return null;

  return <Element className={className} />;
};

export default memo(Icon);
