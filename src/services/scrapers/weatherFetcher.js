import axios from "axios";

export const fetchWeather = async (city = "Jakarta") => {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  if (!apiKey) return {};
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = response.data;
    return {
      description: data.weather[0].description,
      temp: data.main.temp,
    };
  } catch (err) {
    return {};
  }
};