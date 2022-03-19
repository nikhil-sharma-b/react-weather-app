import axios from "axios";

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

export const fetchWeatherData = async function (location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`;

  // Fetching the data using the browser fetch() api
  // const response = await fetch(url);
  // const data = await response.json();
  // return data;

  // Data fetching using axios
  const response = await axios.get(url);
  return response.data;
};
