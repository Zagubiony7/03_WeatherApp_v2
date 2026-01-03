import "./SearchBar.css";
import search from "../../assets/search.png";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" />
      <button>
        <img src={search} alt="search icon" />
      </button>
    </div>
  );
};

export default SearchBar;
