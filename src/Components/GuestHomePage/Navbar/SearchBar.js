import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search text:', searchText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
       
        variant="outlined"
        value={searchText}
        onChange={handleChange}
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <SearchIcon style={{ fontSize: 20, marginRight: '8px' }} />
          ),
        }}
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'grey', // Set the outline color
              borderRadius: '40px',
              border: '2px solid grey'
            },
            '&:hover fieldset': {
              borderColor: 'darkslategrey', // Set the hover outline color
            },
            '&.Mui-focused fieldset': {
              borderColor: 'darkslategrey', // Set the focused outline color
            },
            // padding: '8px 14px', // Adjust the padding
            height: '40px', // Adjust the height
          },
          // marginLeft: 'auto', // Push to the right corner
        }}
      />
    </form>
  );
}

export default SearchBar;
