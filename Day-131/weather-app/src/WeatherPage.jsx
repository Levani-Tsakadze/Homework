import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function WeatherPage() {
  const [weather, setWeather] = useState(null);
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city");

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dc6defea41b6d93106ae131e35e4a1c9&units=metric`
      );
      const data = await response.json();
      setWeather(data);
    };
    fetchWeather();
  }, [city]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-100">
      {weather ? (
        <>
          <h1 className="text-4xl font-bold">Weather in {weather.name}</h1>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherPage;
