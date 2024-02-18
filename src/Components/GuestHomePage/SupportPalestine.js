import React from 'react'
import { Box, Typography } from '@mui/material'
import LearnMoreButton from './SupportPalestine/LearnMoreButton'

export default function SupportPalestine() {
  return (
    <div style={{display: 'flex', width: '90%', height: '27vh', margin: '5%' , marginBottom:'10s%'}}>

    <Box sx={{
        height: '24vh',
        width: '80%',
        backgroundColor: 'rgba(220, 205, 185, 1)',
        borderTopRightRadius: 'none',
        borderBottomRightRadius: 'none',
        borderTopLeftRadius: '15px',
        borderBottomLeftRadius: '15px'
       
    }}
      >
        <Typography style={{marginTop:'2%',  fontSize: '2vw',
      fontFamily:  "'Libre Baskerville', serif", color: 'black', marginLeft: '3%'}}>We Support Palestine.</Typography>
      <Typography style={{ marginLeft: '3%',marginTop:'1%',}}>We are taking action to help our freelancers, our clients, and the people of Palestine—and so can you.</Typography>
      <LearnMoreButton></LearnMoreButton>
      </Box>
      <Box sx={{
        position: 'relative',
          width: '20%',
          height: '24vh',
          backgroundColor: 'rgba(220, 205, 185, 1)',
        //   marginLeft: '60%',
        //   marginTop: '5%',
          borderTopRightRadius: '5%',
          borderBottomRightRadius: '5%',
    }}>
        <img src='donationicon.png' alt='Donations Icon' style={{ marginTop:'1%', border:'none', boxShadow:'none', height:'22vh', width: '75%'}}/>
        </Box>
</div>
  )
}
