import React from "react";
import { Sun, CloudRain, Cloud } from "lucide-react"; // Import Lucide Icons
import "./css/styles.css";

function WeatherInfo({ weather }) {
  const date = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Function to select the right icon based on weather conditions
  const getWeatherIcon = (condition) => {
    if (condition.includes("rain")) return <CloudRain className="weather-icon" />;
    if (condition.includes("cloud")) return <Cloud className="weather-icon" />;
    return <Sun className="weather-icon" />;
  };

  return (
    <div className="weather-info">
      {/* Weather Icon & Location */}
      <div className="weather-header">
        {getWeatherIcon(weather.weather[0].description.toLowerCase())} 

        <div className="city-date">
          <h2 className="city">{weather.name}</h2>
          <p className="date">{date}</p>
        </div>
      </div>

      {/* Temperature & Description */}
      <div className="temperature">
        <h1>{Math.round(weather.main.temp)}°C</h1>
        <p className="description">{weather.weather[0].description}</p>
      </div>
    </div>
  );
}

export default WeatherInfo;