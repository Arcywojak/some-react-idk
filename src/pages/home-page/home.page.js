import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SearchInput from '../../components/home-page-components/search-input';
import Typography from '@material-ui/core/Typography';
import WeatherBlock from '../../components/home-page-components/weather-block';
import WeatherService from '../../services/weather.service/weather.service';
import TriggerAnimation from '../../shared/components/trigger-animation';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { NO_ANIMATION, HIDING_ANIMATION, SHOW_ANIMATION } from '../../constants/animations';

const useStyles = makeStyles({
  loaderWrapper: {
      marginTop: "calc(12px + 1vw)"
  },
});


const HomePage = () => {

    const classes = useStyles();

    const [inputValue, setInputValue] = useState('');
    const [weather, setWeather] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [animationTypeForTitle, setAnimationTypeForTitle] = useState(NO_ANIMATION);
    const [animationTypeForWeatherBlock, setAnimationTypeForWeatherBlock] = useState(NO_ANIMATION);
    const weatherService = new WeatherService();

    const getWeather = () => {
      setIsLoading(true);

      weatherService.getWeatherByCityName(inputValue).then(res => {
        if(!weather) {

          setTimeout(() => {
            setWeather(res.data);
            setAnimationTypeForWeatherBlock(SHOW_ANIMATION);
          }, 2500)

          setTimeout(() => {
            setAnimationTypeForTitle(HIDING_ANIMATION);
            setIsLoading(false);
          }, 1500)
        } else {
          setTimeout(() => {
            setIsLoading(false);
            setWeather(res.data);
          }, 1500)
        }
        
      })
    }

    const weatherBlock = weather != null ? <WeatherBlock hidden={true} weather = {weather} /> : null;

    const loader = isLoading ?  <div className={classes.loaderWrapper}><CircularProgress /></div> : null;

    return (
        <>
        <TriggerAnimation animationType={animationTypeForTitle}>
          <Typography variant="h3" >
              Check, what the weather is like
          </Typography>
        </TriggerAnimation>
        <SearchInput inputValue={inputValue} setInputValue={setInputValue} placeholder="e.g. Warsaw" />

        <Button disabled={inputValue.length === 0} variant="contained" color="primary" onClick={getWeather}>
          Search
        </Button>

        {loader}
        <TriggerAnimation animationType={animationTypeForWeatherBlock}>
          {weatherBlock}
        </TriggerAnimation>
          
        </>
    )
}

export default HomePage
