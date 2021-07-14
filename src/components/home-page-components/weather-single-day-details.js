import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InnerAccordionWithWeather from './inner-accordion-with-weather';
import ImageWithText from './image-with-text';
import { ICON_BASE_URL_PREFIX, ICON_BASE_URL_POSTFIX } from '../../constants/icons-base-url';

const WeatherSingleDayDetails = ({value, index, data}) => {

    return ( 
        <div hidden={value !== index}>
            {data && data.map((certainHourWeather, index) => {
                const {dt_txt} = certainHourWeather;
                const {icon} = certainHourWeather?.weather[0]

                return (
                <Accordion key={index} defaultExpanded = {index === 0}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <ImageWithText 
                        text={dt_txt?.substring(dt_txt?.length - 9, dt_txt?.length)} 
                        imageSrc={`${ICON_BASE_URL_PREFIX}${icon}${ICON_BASE_URL_POSTFIX}`} 
                        reverseDirection={true}/>
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

export default WeatherSingleDayDetails;
