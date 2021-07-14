import React from 'react'
import Typography from '@material-ui/core/Typography';
import ImageWithText from './image-with-text';
import { makeStyles } from '@material-ui/core/styles';
import temperatureImageSrc from '../../images/temperature.png';
import waterDropImageSrc from '../../images/waterDrop.svg';
import windImageSrc from '../../images/wind.svg';
import pressureImageSrc from '../../images/pressure.png';
import descriptionImageSrc from '../../images/description.jpg';
import { ICON_BASE_URL_PREFIX, ICON_BASE_URL_POSTFIX } from '../../constants/icons-base-url';

const useStyles = makeStyles({
    gridBlock: {
        width: "100%",
        display: "grid",
        gridTemplateColumns:"1fr 2fr",
        alignItems: "center",
        "@media (max-width:800px)": {
        gridTemplateColumns:"1fr 1fr"
        },
        "@media (max-width:600px)": {
            gridTemplateColumns:"100%"
            }
    },
    weatherIconWithDescription: {
        textAlign: "center",
        maxWidth: "300px",
        "& img": {
            width:"50vw",
            height: "50vw",
            maxWidth:"150px",
            maxHeight: "150px",
            marginTop: "12px",
            "@media (max-width:800px)": {
                maxWidth:"100px",
                maxHeight: "100px",
                }
        }
    },
    imageWithTextWrapper: {
        margin: "12px 0"
    },
    hideOnSmaller: {
        "@media (max-width:600px)": {
            display: "none"
        }
    },
    showOnSmaller: {
        display:"none",
        "@media (max-width:600px)": {
            display: "block",
            margin: "6px 0"
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
                <div className={classes.showOnSmaller}>
                    <ImageWithText imageSrc={descriptionImageSrc} text={description} />
                </div>
                <div className={classes.imageWithTextWrapper}>
                    <ImageWithText imageSrc={temperatureImageSrc} text={`${temp}°C, feels like ${feels_like}°C`} />
                </div>
                <div className={classes.imageWithTextWrapper}>
                    <ImageWithText imageSrc={waterDropImageSrc} text={`${humidity}%`} />
                </div>
                <div className={classes.imageWithTextWrapper}>
                    <ImageWithText imageSrc={windImageSrc} text={`${speed} m/s`} />
                </div>
                <div className={classes.imageWithTextWrapper}>
                    <ImageWithText imageSrc={pressureImageSrc} text={`${pressure} hPa`} />
                </div>
             </div>
             <div className={`${classes.weatherIconWithDescription} ${classes.hideOnSmaller}`}>
                <Typography variant="h6" component="h4">
                    {description}
                </Typography>
                <img src={`${ICON_BASE_URL_PREFIX}${icon}${ICON_BASE_URL_POSTFIX}`} alt="icon"/>
             </div>
        </div>
    )
}

export default InnerAccordionWithWeather
