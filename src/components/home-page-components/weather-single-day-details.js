import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InnerAccordionWithWeather from './inner-accordion-with-weather';

const WeatherSingleDayDetails = ({value, index, data}) => {

    return ( 
        <div hidden={value !== index}>
            {data && data.map((certainHourWeather, index) => {
                const {dt_txt} = certainHourWeather;

                return (
                <Accordion key={index} defaultExpanded = {index === 0}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography >{dt_txt?.substring(dt_txt?.length - 9, dt_txt?.length)}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <InnerAccordionWithWeather data={certainHourWeather}/>
                    </AccordionDetails>
                </Accordion>
                )
            })}
        </div>
    )
}

export default WeatherSingleDayDetails
