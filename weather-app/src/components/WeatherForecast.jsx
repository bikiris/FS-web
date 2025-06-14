import weatherData from "../data/weatherCode";

function WeatherForecast({ forecastMin, forecastMax, forecastDate, forecastWeatherCode }) {
  return (
    <div className="flex flex-col p-4 bg-white text-black rounded-lg">
      <h1 className="font-bold text-3xl pb-4">7 Day Forecast</h1>
      {forecastDate.map((date, index) => {
        const formattedDate = new Date(date).toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "2-digit",
        });
        return (
          <div key={index} className="grid grid-cols-4 items-center">
            <h1>{formattedDate}</h1>
            <div className="flex items-center">
              <p className="text-xl">{forecastMax[index].toFixed(0)}°/</p>
              <p>{forecastMin[index].toFixed(0)}°</p>
            </div>
            <img src={weatherData[forecastWeatherCode[index]].iconLink} alt='icon'/>
            <p>{weatherData[forecastWeatherCode[index]].description}</p>            
          </div>
        )

      })}
    </div>
  )
}

export default WeatherForecast;

