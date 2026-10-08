
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SearchBox({ updateInfo }) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "adc5b89fcd92c254dfd220ac2560e8e7";

  let [city, setCity] = useState("");

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    let jsonResponse = await response.json();

    console.log(jsonResponse);

    let weather = {
      city: jsonResponse.name,
      temp: jsonResponse.main.temp,
      temp_min: jsonResponse.main.temp_min,
      temp_max: jsonResponse.main.temp_max,
      feels_like: jsonResponse.main.feels_like,
      description: jsonResponse.weather[0].description,
      humidity: jsonResponse.main.humidity,
    };

    console.log(weather);

    return weather;
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();

    console.log(city);

    let info = await getWeatherInfo();

    updateInfo(info);

    setCity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="City Name"
        variant="outlined"
        required
        value={city}
        onChange={handleChange}
      />

      <br />
      <br />

      <Button variant="contained" type="submit">
        Search
      </Button>
    </form>
  );
}

export default SearchBox;

