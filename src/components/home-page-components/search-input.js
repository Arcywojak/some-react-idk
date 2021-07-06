import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    SearchInput: {
        width: "90%",
        maxWidth: "300px",
        margin: "1em"
    }
}));

const SearchInput = ({inputValue, setInputValue, placeholder}) => {
    const classes = useStyles();

    const changeValue = e => {
        setInputValue(e.target.value);
    }

    return (
        <div className= {classes.SearchInput}>
            <TextField
            fullWidth={true}
            id="city-input"
            label="Type a city"
            value={inputValue}
            placeholder={placeholder}
            onChange={(e) => {changeValue(e)}}
            />
         </div>
    )
}

export default SearchInput
