import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    fullHeightContainer: {
      minHeight: "calc(100vh - 128px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "Center"
    },
}));


const ContentWrapperComponent = () => {
    const classes = useStyles();

    return (
        <Container className={classes.fullHeightContainer}>

       </Container>
    )
}

export default ContentWrapperComponent
