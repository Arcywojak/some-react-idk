import React from 'react'
import TextField from '@material-ui/core/TextField';

const SearchInput = ({inputValue, setInputValue, placeholder}) => {

    const changeValue = e => {
        setInputValue(e.target.value);
    }

    return (
        <TextField
        id="city-input"
        label="Type a city"
        value={inputValue}
        placeholder={placeholder}
        onChange={(e) => {changeValue(e)}}
         />
    )
}

export default SearchInput
