const getAdditionalZero = number => number.toString().length === 1 ? `0${number}` : `${number}`;

export const secondsToTimeString = timeInSeconds => {
    const minutes = Math.ceil( timeInSeconds/60 ) % 60;
    //we must add 2 hours to get our local time
    const hours = (Math.floor( timeInSeconds/3600 ) + 2) % 24;

    return `${getAdditionalZero(hours)}:${getAdditionalZero(minutes)}`
}