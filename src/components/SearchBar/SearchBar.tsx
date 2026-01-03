import "./SearchBar.css";
import search from "../../assets/search.png";
import { useState } from "react";
import { type SearchBarProps } from "../../../data";

const SearchBar = ({ setCheckLocation }: SearchBarProps) => {
  const [location, setLocation] = useState("");

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
