import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import WeatherSingleDayDetails from './weather-single-day-details';

const useStyles = makeStyles({
    tabsWrapper: {
        width: "100%",
        textAlign: "left",
        overflow: "auto"
    }
  });

const WeatherDetails = ({weatherDetails}) => {

    const classes = useStyles();

    const [value, setValue] = useState(0);
    const [groupedWeatherByDates, setGroupedWeatherByDates] = useState({})

    useEffect(() => {
        setGroupedWeatherByDates(
            weatherDetails.reduce((acc, curr) => {
                //we take date substring of dt_txt which is date and time
                //the goal is to group weatherDetails by dates occuring in weatherDetails
                const date = curr?.dt_txt?.substring(0, 10)
                if ( !(date in acc) ) {
                    acc[ date ] = [];
                }
                acc[ date ].push(curr);
                return acc;
            }, {})
        )
    } , [weatherDetails])

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const tabsToRender = Object.keys(groupedWeatherByDates).map((keyName, index) => {
        return <Tab key={keyName} label={index === 0 ? "Today" : keyName}/>
    })

    const singleDaysToRender = Object.keys(groupedWeatherByDates).map((keyName, index) => {
        return <WeatherSingleDayDetails key={keyName} value={value} index={index} data={groupedWeatherByDates[keyName]}/>
    })

    return (
        <>
        <div className={classes.tabsWrapper}>
        <AppBar position="static">
            <Tabs className={classes.tabsStyles} value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto">
                {tabsToRender}
            </Tabs>
        </AppBar>
        </div>
        {singleDaysToRender}
      </>
    )
}

export default WeatherDetails
