import React from 'react'
import Typography from '@material-ui/core/Typography';
import ImageWithText from './image-with-text';
import { makeStyles } from '@material-ui/core/styles';
import temperatureImageSrc from '../../images/temperature.png';
import waterDropImageSrc from '../../images/waterDrop.svg';
import windImageSrc from '../../images/wind.svg';
import pressureImageSrc from '../../images/pressure.png';
import { ICON_BASE_URL_PREFIX, ICON_BASE_URL_POSTFIX } from '../../constants/icons-base-url';

const useStyles = makeStyles({
    gridBlock: {
        width: "100%",
        display: "grid",
        gridTemplateColumns:"1fr 2fr",
        alignItems: "center"
    },
    weatherIconWithDescription: {
        textAlign: "center",
        maxWidth: "300px",
        "& img": {
            width:"50vw",
            height: "50vw",
            maxWidth:"150px",
            maxHeight: "150px",
            marginTop: "12px"
        }
    }
  });

const InnerAccordionWithWeather = ({data}) => {

    const classes = useStyles();
    const {main, weather, wind} = data;
    const {temp, feels_like, pressure, humidity} = main;
    const {speed} = wind;
    const {description, icon} = weather[0];

    return (
        <div className={classes.gridBlock}>
             <div className={classes.imageWithTextList}>
                <ImageWithText imageSrc={temperatureImageSrc} text={`${temp}°C, feels like ${feels_like}°C`} />
                <ImageWithText imageSrc={waterDropImageSrc} text={`${humidity}%`} />
                <ImageWithText imageSrc={windImageSrc} text={`${speed} m/s`} />
                <ImageWithText imageSrc={pressureImageSrc} text={`${pressure} hPa`} />
             </div>
             <div className={classes.weatherIconWithDescription}>
                <Typography variant="h6" component="h4" className={classes.headingMargin}>
                    {description}
                </Typography>
                <img src={`${ICON_BASE_URL_PREFIX}${icon}${ICON_BASE_URL_POSTFIX}`} />
             </div>
        </div>
    )
}

export default InnerAccordionWithWeather
