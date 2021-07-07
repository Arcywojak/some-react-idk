import React, {useState} from 'react'
import SearchInput from '../../components/home-page-components/search-input';
import Typography from '@material-ui/core/Typography';
import WeatherBlock from '../../components/home-page-components/weather-block';
import WeatherService from '../../services/weather.service/weather.service';
import Button from '@material-ui/core/Button';
const HomePage = () => {

    const [inputValue, setInputValue] = useState('');
    const [weather, setWeather] = useState(null);

    const weatherService = new WeatherService();

    const getWeather = () => {
      weatherService.getWeatherByCityName(inputValue).then(res => {
        setWeather(res.data);
        console.log(res.data)
      })
    }

    const weatherBlock = weather != null ? <WeatherBlock weather = {weather} /> : null;

    return (
        <>
        <Typography variant="h3">
             Check, what the weather is like
        </Typography>

        <SearchInput inputValue={inputValue} setInputValue={setInputValue} placeholder="e.g. Warsaw" />

        <Button disabled={inputValue.length === 0} variant="contained" color="primary" onClick={getWeather}>
          Search
        </Button>

        {weatherBlock}
          
        </>
    )
}

export default HomePage
