import React from "react";
import './css/styles.css'

function SearchBar({ city, setCity, fetchWeather }) {
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {/* <button onClick={fetchWeather}>Get Weather</button> */}
    </div>
  );
}

export default SearchBar;
