import React, { useContext } from "react";
import './css/styles.css'
import { ThemeContext } from "../themeProvider/theme";
import { Search } from "lucide-react";

const SearchBar = ({ city, setCity, liveSearch, filteredCities, setFilteredCities, fetchWeather }) => {
  const theme = useContext(ThemeContext);

  const selectedCity = (selected) => {
    setCity(selected);
    fetchWeather();
    setFilteredCities([]);
  };

  return (
    <div className={`container ${theme}`}>
      <input
        type="text"
        value={city}
        onChange={(e) => liveSearch(e.target.value)}
        placeholder="Enter city name..."
        className="search-input"
      />
      
      {/* showing suggestions  */}
      {filteredCities.length > 0 && (
        <ul className="suggestions-list">
          {filteredCities.map((suggestion, index) => (
            <li key={index} onClick={() => selectedCity(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;