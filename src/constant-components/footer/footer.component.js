import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        padding:"1em"
    }
}));

const FooterComponent = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="h6" className={classes.title}>
                Footer
            </Typography>
        </footer>
    )
}

export default FooterComponent
