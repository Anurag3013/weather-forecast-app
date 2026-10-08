
import SearchBox from "./searchbox";
import InfoBox from "./Infobox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    feels_like: 24.84,
    temp: 25.05,
    temp_min: 25.05,
    temp_max: 25.05,
    humidity: 47,
    description: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <>
      <SearchBox updateInfo={updateInfo} />

      <br />
      <br />

      <InfoBox weather={weatherInfo} />
    </>
  );
}

