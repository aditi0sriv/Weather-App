// Importing all the components, styles and api calls 
import React, { useState } from 'react';
import './App.css';
import SearchBar from './assets/searchBar/script.jsx';
import WelcomeMessage from './assets/searchBar copy/script.jsx';
import WeatherInfo from './assets/WeatherInfo/script.jsx';
import axios from 'axios';

import { Search } from 'lucide-react'; // importing 'search' icon

// fetching cities from country-state-city 
import { City } from 'country-state-city';

console.log("Cities: ", City.getAllCities())
const cities = City.getAllCities(); // extracting all cities
const cityNames = cities.map(city => city.name) // extracting all city's names

const citySorted = cityNames.sort();
console.log("All City names: ", cityNames)
console.log("Alphabetically city names: ", citySorted)

function App() {
  // state variables 

  // city = default use state, setCity = any city entered by the user, the state gets 
  // changed to whatever the user enters
  const [city, setCity] = useState("Gorakhpur");

  // filtering cities and storing them 
  const [filteredCities, setFilteredCities] = useState([]);

  // setWeather = whatever weather is fetched by the api, initially set as null as data is not fetched yet
  const [weather, setWeather] = useState(null);

  // error message pop up
  const [error, setError] = useState(null);

  // checking if data is fetched or not, initially set to 'false' as no data is fetched 
  const [isFetched, setIsFetched] = useState(false);

  // external api key from 'openweathermap' fetching all the current weather of a city
  const API_KEY = 'dadd2bc9c8c623d95d76de05edd135e0';


  // fetching weather using axios and openweathermap api
  const fetchWeather = async (cityName) => {
    if(!cityName) return;

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);

      console.log("Response: ", response.data)
      setWeather(response.data); // Setting the weather data in state
      setError(null);

    } catch (err) {
      setError("City not found.");
      setWeather(null);
    }
    setIsFetched(true); // doesn't matter if the request is successful or not
    // the request had been made through happened so, setIsfetched is set to true
  };

  // live search
  const liveSearch = (input) => {
    setCity(input); // updating input field
    if (!input) {
      setFilteredCities([]);
      return;
    }

    // filtering cities based on user input
    const matches = citySorted
      .filter(city =>
        city.toLowerCase().startsWith(input.toLowerCase())
      )
      .slice(0, 5); // showing only five city names

    setFilteredCities(matches);
  }

  return (
    <div className="weatherApp">
      <WelcomeMessage />

      <div className='search'>
        <SearchBar city={city}
          setCity={setCity}
          liveSearch={liveSearch}
          filteredCities={filteredCities}
          setFilteredCities={setFilteredCities}
          fetchWeather={fetchWeather}
          // onClick={() => {
          //   fetchWeather();
          //   setFilteredCities([]);
          // }}
        />
        <button onClick={() => {
          fetchWeather(city);
          setFilteredCities([]); // clearing suggestion's list after selecting a city
        }}>
          <Search size={20} /> {/* Adjust size as needed */}
        </button>
      </div>

      {isFetched && error && <p className="error-message">{error}</p>}
      {isFetched && weather && <WeatherInfo weather={weather} />}
    </div>
  );
}

export default App;
