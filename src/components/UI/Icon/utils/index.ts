import { FC } from 'react';

import { IconProps, IconType } from '../Icon.types';

import Atmosphere from '../elements/Atmposphere';
import Clear from '../elements/Clear';
import CloseButton from '../elements/CloseButton';
import Clouds from '../elements/Clouds';
import Location from '../elements/Location';
import Rain from '../elements/Rain';
import Snow from '../elements/Snow';
import Thunderstorm from '../elements/Thunderstorm';

export const ICON_ELEMENT_BY_TYPE: Record<IconType, FC<IconProps>> = {
  [IconType.Thunderstorm]: Thunderstorm,
  [IconType.Rain]: Rain,
  [IconType.Snow]: Snow,
  [IconType.Atmosphere]: Atmosphere,
  [IconType.Clouds]: Clouds,
  [IconType.Clear]: Clear,
  [IconType.Location]: Location,
  [IconType.CloseButton]: CloseButton,
};
