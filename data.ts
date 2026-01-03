import type { Dispatch, SetStateAction } from "react";

export type SearchBarProps = {
  checkLocation: string;
  setCheckLocation: (arg: string) => void;
  setApiData: Dispatch<SetStateAction<WEATHERINFORMATIONS>>;
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

export type WEATHERINFORMATIONS = {
  main: string;
  temp: string;
  name: string;
  humidity: string;
  speed: string;
};
