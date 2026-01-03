import "./SearchBar.css";
import search from "../../assets/search.png";
import { useState } from "react";
import { type SearchBarProps } from "../../../data";
import { useEffect } from "react";

const SearchBar = ({ checkLocation, setCheckLocation }: SearchBarProps) => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    const getInfoAboutLocation = async (location: string) => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=323447a29a6341d2f7b750b15aef2342`
        );
        const data = await res.json();
        if (data.cod === "404") {
          alert("Wrong Location");
          setLocation("");
        }
        return data;
      } catch (err) {
        console.log(err);
      }
    };
    if (checkLocation) getInfoAboutLocation(checkLocation);
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
