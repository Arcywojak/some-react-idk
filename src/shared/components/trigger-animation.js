import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { BASIC_ANIMATION_DELAY, BASIC_ANIMATION_DURATION } from '../../constants/animations';

const useStyles = makeStyles(theme => ({
    animationWrapper: {
        width:"100%",
       display:"flex",
       justifyContent:"center",
       animationFillMode: "forwards"
    },
    "@keyframes hidingAnimation": {
      "0%": {
        opacity: 1
      },
      "50%": {
        opacity: 0,
        maxHeight: "2000px"
      },
      "100%": {
        maxHeight: "0",
        opacity: 0
      }
    },
    hidingAnimation: {
        animationName: "$hidingAnimation",
        animationTimingFunction: `${theme.transitions.easing.easeInOut}`
    },
    "@keyframes showingAnimation": {
        "0%": {
            maxHeight: 0,
            opacity: 0
        },
        "50%": {
            maxHeight: "1500px",
            opacity: 0,
            transform: "translate(-80px, 80px)"
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
        overflow: "hidden",
        animationName: "$showingAnimation",
        animationTimingFunction: `${theme.transitions.easing.easeInOut}`
    }

  }));


const TriggerAnimation = ({children, animationType, animationDuration, animationDelay}) => {
    const classes = useStyles();
    const stylesFromProps = {
        animationDelay: `${animationDelay || BASIC_ANIMATION_DELAY}ms`,
        animationDuration: `${animationDuration || BASIC_ANIMATION_DURATION}ms`
    }
    return (
        <div 
        className={`${animationType ? classes[animationType] : ""} ${classes.animationWrapper}`}
        style = {stylesFromProps}
        >
            {children}
        </div>
    )
}

export default TriggerAnimation;
