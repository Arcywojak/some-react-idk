import React from 'react'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    noWeatherFound: {
        margin: "4vw 0"
    },
    marginBottom: {
        marginBottom: "calc(0.5em + 0.3vw)"
    }
})

const NoWeatherFound = () => {

    const classes = useStyles();

    return (
        <Card className={classes.noWeatherFound}>
            <CardContent>
                <Typography variant="h3" align="center" className={classes.marginBottom}>
                    Ups!
                </Typography>
                <Typography variant="h4" >
                    We do not have such a city in our database.
                </Typography>
            </CardContent>
        </Card>
        
    )
}

export default NoWeatherFound;
