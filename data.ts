export type SearchBarProps = {
  checkLocation: string;
  setCheckLocation: (arg: string) => void;
};

export type WeatherProps = {
  weather: { id: string; main: string; description: string; icon: string }[];
  temp: string;
  locationName: string;
};

export type WeatherInfoProps = {
  humidityPercent: string;
  windSpeed: string;
};

export type WeatherDetailsProps = {
  img: string;
  infoStat: string;
  children: string;
};
