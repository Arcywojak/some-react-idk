import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import WeatherSingleDayDetails from './weather-single-day-details';

const WeatherDetails = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <>
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Item One"  />
                <Tab label="Item Two"  />
                <Tab label="Item Three"  />
            </Tabs>
        </AppBar>

        <WeatherSingleDayDetails value={value} index={0} />

        <WeatherSingleDayDetails value={value} index={1} />

        <WeatherSingleDayDetails value={value} index={2} />
      </>
    )
}

export default WeatherDetails
