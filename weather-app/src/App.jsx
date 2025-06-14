import WeatherWidget from "./components/WeatherWidget";
import WeatherForecast from "./components/WeatherForecast";

import { useState, useEffect } from "react";

function App() {
  const API_URL =
    "https://api.open-meteo.com/v1/forecast?temperature_unit=fahrenheit&timezone=auto&";

  const [latitude, setLatitude] = useState("40.72");
  const [longitude, setLongitude] = useState("-74.0");
  const [locationName, setLocationName] = useState("New York");

  const [weatherData, setWeatherData] = useState(null);

  // navigator.geolocation.getCurrentPosition( (position)=> {
  //     setLatitude(position.coords.latitude);
  //     setLongitude(position.coords.longitude);
  // })

  useEffect(() => {
    fetch(
      `${API_URL}latitude=${latitude}&longitude=${longitude}&current=temperature_2m&daily=temperature_2m_min,temperature_2m_max,weather_code`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [latitude, longitude]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const geolocationInput = e.target.geolocation.value;
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${geolocationInput}&count=1&language=en&format=json&countryCode=US`
    );
    const jsonData = await response.json();
    setLatitude(jsonData.results[0].latitude);
    setLongitude(jsonData.results[0].longitude);
    setLocationName(jsonData.results[0].name);
  };

  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  // const handleInputChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // useEffect(() => {
  //   const handleSearchTerm = async () => {
  //     const response = await fetch(
  //       `https://geocoding-api.open-meteo.com/v1/search?name=${searchTerm}&count=5&language=en&format=json&countryCode=US`
  //     );
  //     const jsonData = await response.json();
  //     if (jsonData.results === undefined) {
  //       setSearchResults([]);
  //       return;
  //     }
  //     setSearchResults(jsonData.results);
  //   };

  //   if (searchTerm) {
  //     handleSearchTerm();
  //   } else {
  //     setSearchResults([]);
  //   }
  // }, [searchTerm]);

  return (
    <>
      {/* navbar */}
      <nav className='bg-white text-black text-center p-4 flex items-center justify-between'>
        <h1 className='text-4xl'>Weather App</h1>

        <div className='flex items-center justify-center m-2 flex-col'>
          <form
            className='flex gap-2'
            onSubmit={handleSearch}
            // onChange={handleInputChange}
          >
            <input
              id='geolocation'
              placeholder='Find a city'
              autoComplete='off'
              className='p-2 w-full border rounded-md'
            />
            <button className='!bg-white !border-black'>Search</button>
          </form>
          {/* <div className='relative bg-white text-black rounded-md shadow-lg mt-50 overflow-hidden z-1'>
            {searchResults &&
              searchResults.map((result) => <p key={result}> {result.name}</p>)}
          </div> */}
        </div>
      </nav>
      <section className="flex flex-col gap-2 p-4 md:grid md:grid-cols-2">
      {weatherData && (
        <>
          <WeatherWidget
            locationName={locationName}
            currentTemperature={weatherData.current.temperature_2m}
            todayMax={weatherData.daily.temperature_2m_max[0]}
            todayMin={weatherData.daily.temperature_2m_min[0]}
            weatherCode={weatherData.daily.weather_code[0]}
          />

          <WeatherForecast
            forecastMin={weatherData.daily.temperature_2m_min}
            forecastMax={weatherData.daily.temperature_2m_max}
            forecastDate={weatherData.daily.time}
            forecastWeatherCode={weatherData.daily.weather_code}
          />
        </>
      )}
      </section>
    </>
  );
}

export default App;
