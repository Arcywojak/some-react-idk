import React from 'react'
import temperature from '../../images/temperature.svg';
import waterDrop from '../../images/waterDrop.svg';


const WeatherSingleDayDetails = ({value, index, data}) => {
    return (
        <div hidden={value !== index}>
            item {index}
        </div>
    )
}

export default WeatherSingleDayDetails
