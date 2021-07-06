import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    imageWithText: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center"
    },
    child: {
        
    },
    imageStyles: {
        width: "40px",
        paddingRight: "10px"
    }
  });

const ImageWithText = ({imageSrc, text}) => {
    const classes = useStyles();

    return (
        <div className={classes.imageWithText}>
            <div className={classes.child}>
                <img src={imageSrc} className={classes.imageStyles}/>
            </div>
            <div className={classes.child}>
            <Typography variant="h6" gutterBottom>
                {text}
            </Typography>
            </div>
        </div>
    )
}

export default ImageWithText
