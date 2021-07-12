import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    imageWithText: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      margin: "6px 0"
    },
    child: {
    display:"flex",
    alignItems:"center"
    },
    imageStyles: {
        width:"100%",
        maxWidth: "35px",
        maxHeight:"40px",
        paddingRight: "10px"
    },
    reversed: {
        flexDirection: "row-reverse"
    }
  });

const ImageWithText = ({imageSrc, text, reverseDirection}) => {
    const classes = useStyles();

    return (
        <div className={`${classes.imageWithText} ${reverseDirection ? classes. reversed : ""}`}>
            <div className={classes.child}>
                <img src={imageSrc} className={classes.imageStyles}/>
            </div>
            <div className={classes.child}>
            <Typography variant="subtitle1" >
                {text}
            </Typography>
            </div>
        </div>
    )
}

export default ImageWithText
