import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    fullHeightContainer: {
      minHeight: "calc(100vh - 128px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "Center",
      flexDirection: "column",
      padding: "1.5rem 0 4rem"
    },
}));


const ContentWrapperComponent = ({children}) => {
    const classes = useStyles();

    return (
        <Container className={classes.fullHeightContainer}>
            {children}
       </Container>
    )
}

export default ContentWrapperComponent
