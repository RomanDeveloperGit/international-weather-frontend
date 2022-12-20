export enum IconType {
  Thunderstorm,
  Rain,
  Snow,
  Atmosphere,
  Clouds,
  Clear,
  Location,
  CloseButton,
}

export type IconProps = {
  className?: string;
};

export type IconCreatorProps = {
  type: IconType;
} & IconProps;
