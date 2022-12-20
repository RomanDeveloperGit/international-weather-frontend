import { FC, memo } from 'react';

import { ICON_TYPE_BY_WEATHER_DESCRIPTION } from './utils';

import { useLocationDaySelector } from '../../store/selectors/location';

import Icon from '../UI/Icon/Icon';

type WeatherIconProps = {
  className: string;
  dayId: number;
};

const WeatherIcon: FC<WeatherIconProps> = ({ className, dayId }) => {
  const day = useLocationDaySelector(dayId);
  const iconType = ICON_TYPE_BY_WEATHER_DESCRIPTION[day?.weather.description || 'Clear'];

  return <Icon className={className} type={iconType} />;
};

export default memo(WeatherIcon);
