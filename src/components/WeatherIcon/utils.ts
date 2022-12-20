import { WeatherDescription } from '../../types';
import { IconType } from '../UI/Icon/Icon.types';

type IconTypeByWeatherDescription = {
  [key in WeatherDescription]: IconType;
};

export const ICON_TYPE_BY_WEATHER_DESCRIPTION: IconTypeByWeatherDescription = {
  Thunderstorm: IconType.Thunderstorm,
  Drizzle: IconType.Rain,
  Rain: IconType.Rain,
  Snow: IconType.Snow,
  Atmosphere: IconType.Atmosphere,
  Clear: IconType.Clear,
  Clouds: IconType.Clouds,
};
