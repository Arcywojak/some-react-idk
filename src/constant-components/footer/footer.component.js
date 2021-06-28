import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
    footer: {

    }
})

const FooterComponent = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            footer
        </footer>
    )
}

export default FooterComponent
