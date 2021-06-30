import React, {useState} from 'react'
import SearchInput from '../../components/home-page-components/search-input';
import Typography from '@material-ui/core/Typography';

const HomePage = () => {

    const [inputValue, setInputValue] = useState('')

    return (
        <>
        <Typography variant="h3">
             Check, what the weather is like
        </Typography>

          <SearchInput inputValue={inputValue} setInputValue={setInputValue} placeholder="e.g. Warsaw" />  
        </>
    )
}

export default HomePage
