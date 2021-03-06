import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ImageWithText from './image-with-text';
import sunriseImageSrc from '../../images/sunrise.svg';
import sunsetImageSrc from '../../images/sunset.svg';
import WeatherDetails from './weather-details';
import {secondsToTimeString} from '../../utils/timeHelpers';


const useStyles = makeStyles({
    weatherBlock: {
        width: "100%",
        maxWidth: "800px",
        textAlign: "left",
    },
    headingStyles: {
        textAlign: "left"
    },
    titleAndImagesWrapper: {
        padding:"0 16px "
    }
  });

const WeatherBlock = ({weather}) => {
    const {city, list} = weather;
    const {name, country, sunrise, sunset} = city;

    const classes = useStyles();

    return (
        <div className={classes.weatherBlock}>
            <div className={classes.titleAndImagesWrapper}>
                <Typography variant="h2" component="h2" className={classes.headingStyles}>
                    {`${name}, ${country}`}
                </Typography>
                <div >
                    <ImageWithText imageSrc={sunriseImageSrc} text={`Sunrise: ${secondsToTimeString(sunrise)}`} />
                    <ImageWithText imageSrc={sunsetImageSrc} text={`Sunset: ${secondsToTimeString(sunset)}`} />
                </div>
            </div>

            <WeatherDetails weatherDetails={list}/>
        </div>
    )
}

export default WeatherBlock;
