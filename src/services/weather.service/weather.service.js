import {BASE_URL} from '../../constants/weather-api-base-url';
import axios from 'axios';
import API_KEY from '../../api_keys/weather-api-key';

class WeatherService {
    constructor() {
        this.base_url = BASE_URL;
    }

    getWeatherByCityName(cityName) {
        const url = `${this.base_url}q=${cityName}&appid=${API_KEY}`
        return axios.get(url)
    }

    getWeatherByCityId() {}

    getWeatherByGeographicCoordinates() {}
}

export default WeatherService;