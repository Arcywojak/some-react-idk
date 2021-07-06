import React, {useState} from 'react'
import SearchInput from '../../components/home-page-components/search-input';
import Typography from '@material-ui/core/Typography';
import WeatherBlockList from '../../components/home-page-components/weather-block-list';
import WeatherService from '../../services/weather.service/weather.service';
import Button from '@material-ui/core/Button';
const HomePage = () => {

    const [inputValue, setInputValue] = useState('');
    const [weatherArray, setWeatherArray] = useState([]);

    const weatherService = new WeatherService();

    const getWeather = () => {
      weatherService.getWeatherByCityName(inputValue).then(res => {
        if (res instanceof Array) {
          setWeatherArray(res);
        } else {
          setWeatherArray([res]);
        }
      })
    }

    return (
        <>
        <Typography variant="h3">
             Check, what the weather is like
        </Typography>

        <SearchInput inputValue={inputValue} setInputValue={setInputValue} placeholder="e.g. Warsaw" />

        <Button variant="contained" color="primary">
          Search
        </Button>

        <WeatherBlockList weatherArray={weatherArray} />
          
        </>
    )
}

export default HomePage
