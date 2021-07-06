import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InnerAcordionWithWeather from './inner-acriodion-with-weather';

const WeatherSingleDayDetails = ({value, index, data}) => {
    return (
        <div hidden={value !== index}>
            <Accordion expanded={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography >Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <InnerAcordionWithWeather />
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography >Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <InnerAcordionWithWeather />
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography >Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <InnerAcordionWithWeather />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default WeatherSingleDayDetails
