import "./SearchBar.css";
import search from "../../assets/search.png";
import { useState } from "react";
import { type SearchBarProps } from "../../../data";
import { useEffect } from "react";
import axios from "axios";

const SearchBar = ({ checkLocation, setCheckLocation, setApiData }: SearchBarProps) => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    const getInfoAboutLocation = async (location: string) => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${import.meta.env.VITE_APP_ID}`
        );

        const {
          main: { temp, humidity },
          name,
          wind: { speed },
          weather: [{ main }],
        } = res.data;
        setApiData({ temp, humidity, name, speed, main });
      } catch (err) {
        console.log(err);
        alert("Wrong Location");
        setLocation("");
      }
    };
    getInfoAboutLocation(checkLocation);
  }, [checkLocation]);

  const handleCheckLocation = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCheckLocation(location);
  };

  return (
    <form className="search-bar" onSubmit={handleCheckLocation}>
      <input
        type="text"
        placeholder="Search"
        value={location}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
      />
      <button>
        <img src={search} alt="search icon" />
      </button>
    </form>
  );
};

export default SearchBar;
