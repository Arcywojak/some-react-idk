import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ImageWithText from './image-with-text';
import sunrise from '../../images/sunrise.svg';
import sunset from '../../images/sunset.svg';
import WeatherDetails from './weather-details';


const useStyles = makeStyles({
    weatherBlock: {
        width: "100%",
        maxWidth: "800px",
        textAlign: "left"
    },
    headingMargin: {
        margin: "1em 0 .3em",
        textAlign: "left"
    }
  });

const WeatherBlock = ({weather}) => {
  //  const {city, list} = weather;
  //  const {name, country, sunrise, sunset} = city;

    const classes = useStyles();

    return (
        <div className={classes.weatherBlock}>
            <Typography variant="h2" component="h2" className={classes.headingMargin}>
                London, GB
            </Typography>
            <div >
                <ImageWithText imageSrc={sunrise} text={"sunrise: 22:22:12"} />
                <ImageWithText imageSrc={sunset} text={"sunset: 22:22:12"} />
            </div>

            <WeatherDetails />
        </div>
    )
}

export default WeatherBlock;
