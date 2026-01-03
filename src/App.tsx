import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import Weather from "./components/Weather/Weather";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import { useQuery } from "@tanstack/react-query";

const App = () => {
  const [checkLocation, setCheckLocation] = useState("");
  const { isLoading, error, data } = useQuery({
    queryKey: [checkLocation],
    queryFn: async () => {
      const res = await fetch();
      // `https://api.openweathermap.org/data/2.5/weather?q=${checkLocation}&appid=323447a29a6341d2f7b750b15aef2342`
      if (!res.ok) throw new Error("Error");
      return res.json();
    },
  });

  if (isLoading) return "Is Loading...";
  if (error) return "Error, try again";

  const {
    main: { temp, humidity },
    name: locationName,
    weather,
    wind: { speed },
  } = data;
  return (
    <div className="container">
      <SearchBar setCheckLocation={setCheckLocation} />
      <Weather weather={weather} temp={temp} locationName={locationName} />
      <WeatherInfo windSpeed={speed} humidityPercent={humidity + "%"} />
    </div>
  );
};

export default App;
// "https://api.openweathermap.org/data/2.5/weather?q=London&appid=323447a29a6341d2f7b750b15aef2342"
// const {weather: { id, description },main: { temp, humidity },wind: { speed }} = data
