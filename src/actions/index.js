import Axios from "axios";

const WEATHER_API_KEY = 'b7c8f6cd85f87340029c2768ef235141';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = Axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}