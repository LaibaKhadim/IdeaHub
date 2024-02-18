import React from 'react';
import { Paper} from '@mui/material';
import GetStartedButton from './Banner/GetStartedButton';

const Banner = () => {
 
  return (
    <div style={{display: 'flex', marginTop:'5vh'}}>
       <Paper
      component="div"
      sx={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/greydiv.png)`,
        width: '30%',
        height: '700px', 
        color: 'black',
       marginLeft: '0%',
        boxShadow:'none',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',
      
        position: 'relative',
       
      }}
    >
       <span
        style={{
          position: 'absolute',
          marginLeft: '10%',
          fontFamily: "'Josefin Sans', sans-serif",
        }}
      >
        <div style={{fontSize: '4vw'}}>Where Ideas Unite: </div>
        <div style={{fontSize: '1.5vw'}}>Redefining Creative Collaboration <br/>at IdeaHub.</div>
        <div style={{marginLeft: '30%', marginTop: '10px'}}>
        <GetStartedButton></GetStartedButton>
        </div>
      </span>
     
    </Paper>
    <Paper
      component="div"
      sx={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/cropped.png)`,
        width: '70%',
        height: '700px', 
        marginLeft: '0%',
        boxShadow:'none',
        border: 'none'
      }}
    >
     
    </Paper>
    </div>
  );
};

export default Banner;
