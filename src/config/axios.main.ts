import axios from "axios";


// const WEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const WEATHER_API_KEY = "1392b6f71df38aa3d82f032ca44b1c5f";


const weatherApi = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        appid: WEATHER_API_KEY,
    }
})

weatherApi.interceptors.response.use(
    response => response.data,
    error => Promise.reject(error)
);

export default weatherApi;