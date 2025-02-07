import React from "react";
import { Sun, CloudRain, Cloud } from "lucide-react"; // icons
import "./css/styles.css";

function WeatherInfo({ weather }) {
  const date = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }); // formatting date --> ex: February 5th, 2025

  // selecting weather icon based on the weather received
  const getWeatherIcon = (condition) => {
    if (condition.includes("rain")) 
    return <CloudRain className="weather-icon" />;

    if (condition.includes("cloud")) 
    return <Cloud className="weather-icon" />;

    return <Sun className="weather-icon" />;
  };

  return (
    <div className="weather-info">
      <div className="weather-header">
        {/* weather icon  */}
        {getWeatherIcon(weather.weather[0].description.toLowerCase())} 

        {/* displaying city name and current date */}
        <div className="city-date">
          <h2 className="city">{weather.name}</h2>
          <p className="date">{date}</p>
        </div>
      </div>

      {/* displaying temperature and description of temperature */}
      <div className="temperature">

        {/* rounding up numbers  */}
        <h1>{Math.round(weather.main.temp)}°C</h1> 

        {/* weather description */}
        <p className="description">{weather.weather[0].description}</p>
      </div>
    </div>
  );
}

export default WeatherInfo;