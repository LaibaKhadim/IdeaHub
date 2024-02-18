import { Box, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SearchBar from '../Navbar/SearchBar';
import axios from 'axios';
import {jsonToPlainText} from 'json-to-plain-text';

import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

export default function Page(props) {
  const { fileName } = props;
  // const imageUrl = `http://localhost:3001/upload/${fileName}`; // replace with the actual URL of your back end server

  const [record, setRecord] = useState(null);
  const { id} = useParams();// replace with the actual record ID
  const [name, setName] = useState(null);
  const [recordId, setRecordId] = useState(null);
  useEffect(() => {
    async function fetchRecord() {
      try {
        const response = await axios.get(`http://localhost:3001/users/record2/${id}`);
        // const comingfile = `http://localhost:3001/users/record/${id}`;
        setRecord(response.data);
      //  setFileUrl(comingfile)
        setName( response.data.name);
        setRecordId( response.data.id);
        // alert('Data found')
       
      } catch (error) {
        console.error('An error occurred while fetching the record:', error);
      }
    }

    fetchRecord();
  }, [id]);

  if (!record) {
    return <div>Loading...</div>;
  }
  
  return (
    <Box
      sx={{
        position: 'relative',
        width: '88%',
        height: '65vh',
        backgroundColor: 'inherit',
        marginLeft: '6%',
        // marginTop: '1%',
      }}
    >
      <Grid container spacing={4} sx={{ marginTop: '1%', direction: 'rtl' }}>
        <Grid item xs={3} sm={3} xl={3} sx={{ direction: 'ltr' }}>
          <Box
            sx={{
              paddingTop: '13%',
              height: '18vh',
              borderRadius: '30px',
              textAlign: 'center',
              fontFamily: "'Josefin Sans', sans-serif",
              fontSize: '1.6vw',
              fontWeight: '500',
              backgroundColor: 'lightgrey',
            }}
          >
            <div sx={{display:'flex' }}>
              <IconButton sx={{ p: 0 }}>
                <Avatar src={fileName}
        alt={fileName}
        style={{ width: '50px', height: '50px' }}/>
              </IconButton>
              &nbsp;
              {jsonToPlainText(name)}
              </div>
          </Box>
        </Grid>
        <Grid item xs={9} sm={9} xl={9} sx={{ direction: 'ltr' }}>
      <h1 style={{fontFamily:"'Caveat', cursive", letterSpacing: '2px', color:'black'}}>
        Hi {jsonToPlainText(name)}!
        <img src={process.env.PUBLIC_URL + '/hi-icon.png'}  alt='Hi Icon' height='40px' width='40px' style={{verticalAlign: 'middle', marginLeft:'2%'}}/>
        </h1>
  
          <SearchBar />
        </Grid>
      </Grid>
    </Box>
  );
}
