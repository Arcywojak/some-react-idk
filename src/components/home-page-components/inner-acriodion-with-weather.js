import React from 'react'
import Typography from '@material-ui/core/Typography';
import ImageWithText from './image-with-text';
import { makeStyles } from '@material-ui/core/styles';
import temperature from '../../images/temperature.png';
import waterDrop from '../../images/waterDrop.svg';
import wind from '../../images/wind.svg';
import pressure from '../../images/pressure.png';
import description from '../../images/description.jpg';

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
            maxWidth:"120px",
            maxHeight: "120px",
            marginTop: "12px"
        }
    }
  });

const InnerAcordionWithWeather = () => {

    const classes = useStyles();

    return (
        <div className={classes.gridBlock}>
             <div className={classes.imageWithTextList}>
                <ImageWithText imageSrc={temperature} text="25°C" />
                <ImageWithText imageSrc={waterDrop} text="55%" />
                <ImageWithText imageSrc={wind} text="1.55 m/s" />
                <ImageWithText imageSrc={pressure} text="1002 hPa" />
             </div>
             <div className={classes.weatherIconWithDescription}>
                <Typography variant="h4" component="h4" className={classes.headingMargin}>
                    Clear sky
                </Typography>
                <img src={pressure} />
             </div>
        </div>
    )
}

export default InnerAcordionWithWeather
