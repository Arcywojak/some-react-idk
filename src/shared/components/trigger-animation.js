import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    animationWrapper: {
        width:"100%",
       display:"flex",
       justifyContent:"center"
    },
    "@keyframes hidingAnimation": {
      "0%": {
        opacity: 1
      },
      "50%": {
        opacity: 0,
        maxHeight: "2000px"
       // transform: "scale(1)"
      },
      "100%": {
       // transform: "scale(0)",
        maxHeight: "0",
        opacity: 0
      }
    },
    hidingAnimation: {
        animation: `$hidingAnimation 2000ms  ${theme.transitions.easing.easeInOut} `,
        animationFillMode: "forwards"
    },
    "@keyframes showingAnimation": {
        "0%": {
            maxHeight: 0,
            opacity: 0
        },
        "50%": {
            maxHeight: "1500px",
            opacity: 0,
            transform: "translate(-100px, -100px)"
        },
        "100%": {
            opacity : 1,
            transform: "translate(0, 0)",
            maxHeight: "1500px"
        }
    },
    showingAnimation: {
        maxHeight: 0,
        opacity: 0,
        animation: `$showingAnimation 2000ms  ${theme.transitions.easing.easeInOut} `,
        animationFillMode: "forwards"
    }

  }));


const TriggerAnimation = ({children, animationType}) => {
    const classes = useStyles();
    return (
        <div className={`${animationType ? classes[animationType] : ""} ${classes.animationWrapper}`}>
            {children}
        </div>
    )
}

export default TriggerAnimation;
