export type WeatherDescription =
  | 'Thunderstorm'
  | 'Drizzle'
  | 'Rain'
  | 'Snow'
  | 'Atmosphere'
  | 'Clear'
  | 'Clouds';

export interface Weather {
  description: WeatherDescription;
  temperature: number;
  cloudiness: number;
  humidity: number;
  wind: number;
}

export interface Day {
  id: number;
  date: string;
  weather: Weather;
}

export interface LocationShortData {
  id: number;
  name: string;
  country: string;
}

export interface LocationFullData extends LocationShortData {
  days: Day[];
}

export type ErrorMessage = string | null;
