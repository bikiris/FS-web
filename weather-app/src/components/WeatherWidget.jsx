import weatherCodeDescription from '../data/weatherCode.js'

function WeatherWidget( { locationName, currentTemperature, todayMax, todayMin, weatherCode} ) {
  const date = new Date();

  return (
    <>
      <div className='rounded-lg bg-sky-800 text-white'>
        <div className='flex justify-between p-4 bg-[#0006] rounded-t-lg'>
          <h1 className='text-2xl font-bold'>{locationName}</h1>
          <h2 className='text-lg'>As of {date.getHours()}:{date.getMinutes()}</h2>
        </div>

        <div className="p-4 flex flex-col font-bold">
          <div className='flex'>
            <p className='text-5xl'>{currentTemperature.toFixed(0)}°</p>
            <img src={weatherCodeDescription[weatherCode].iconLink} alt='weather icon' />
          </div>

          <p className="text-xl">{weatherCodeDescription[weatherCode].description}</p>

          <p className="text-xl">High {todayMax.toFixed(0)}° Low {todayMin.toFixed(0)}°</p>
        </div>
      </div>
    </>
  );
}

export default WeatherWidget;
