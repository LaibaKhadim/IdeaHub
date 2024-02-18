import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
const Example2 = () => {
    const [isHovered1, setIsHovered1] = useState(false);

    const handleMouseEnter1 = () => {
        setIsHovered1(true);
      };
    
      const handleMouseLeave1 = () => {
        setIsHovered1(false);
      };
  return (
   <Box sx={{
    position: 'relative',
    height: '48vh',
    // backgroundColor: 'white',
    marginTop:'8%'
   }}> 
    <Grid container spacing={3}>
      <Grid  item xs={12} sm={9.7} xl={3} style={{
         backgroundColor: 'white',
         marginTop: '3%',
        //  marginLeft: '7%',
         height: '30vh',
         marginLeft:'13%',
         borderRadius:'20px',
         boxShadow: isHovered1 ? '0px 0px 10px 5px rgba(0, 0, 0, 0.8)' : '0px 0px 5px 0px rgba(0, 0, 0, 0.5)',
         transition: 'box-shadow 0.3s ease-in-out',
      }}
      onMouseEnter={handleMouseEnter1}
      onMouseLeave={handleMouseLeave1}
      >
      
      <Typography style={{
       color:'black', fontSize:'1.6vw', fontFamily:'inherit'
      }}>
        Get Started
        </Typography> 
        <Typography style={{color:'black', fontSize:'2vw', fontWeight:'500', fontFamily:'inherit' }}>
            Get started and connect with talent to get work done
        </Typography>
        <Button variant="outlined" style={{color:'green', border:'1px solid green',
        borderRadius:'20px', marginTop:'2%',
        fontSize:'1.3vw'
    }}>
          Go to article
        </Button>

      </Grid>
    </Grid>
    </Box>
  );
};

export default Example2;