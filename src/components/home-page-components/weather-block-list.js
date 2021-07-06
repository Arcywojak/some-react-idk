import React from 'react';
import WeatherBlock from './weather-block';

const WeatherBlockList = ({WeatherArray}) => {
    const listedWeather = WeatherArray != null ? WeatherArray.map(singleWeather => {
        return (
            <WeatherBlock weather = {singleWeather}/>
        )
    }) : null

    return (
        <div>
            {listedWeather}
        </div>
    )
}

export default WeatherBlockList
