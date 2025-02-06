import React, { useState } from 'react';
import './App.css';
import SearchBar from './assets/searchBar/script.jsx';
import WelcomeMessage from './assets/searchBar copy/script.jsx';
import WeatherInfo from './assets/WeatherInfo/script.jsx';
import axios from 'axios';

import { Search } from 'lucide-react';

function App() {
  const [city, setCity] = useState("Gorakhpur");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [isFetched, setIsFetched] = useState(false);

  const API_KEY = 'dadd2bc9c8c623d95d76de05edd135e0';

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeather(response.data); // Setting the weather data in state
      setError(null); // Reset error if fetch is successful
    } catch (err) {
      setError("City not found or error fetching data.");
      setWeather(null); // Reset weather if there is an error
    }
    setIsFetched(true); // Mark fetch as completed
  };

  return (
    <div className="weatherApp">
      <WelcomeMessage />

      <div className='search'>
        <SearchBar city={city} setCity={setCity} />
        <button onClick={fetchWeather}>
          <Search size={20} /> {/* Adjust size as needed */}
        </button>
      </div>


      {isFetched && error && <p className="error-message">{error}</p>}
      {isFetched && weather && <WeatherInfo weather={weather} />}
    </div>
  );
}

export default App;
