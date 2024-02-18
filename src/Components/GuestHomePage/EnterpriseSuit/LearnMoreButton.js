import React from 'react'; 
import  Button  from '@mui/material/Button'; 
import { Link } from 'react-router-dom';


export default function LearnMoreButton() {
  return (
    <div>
        <Button component={Link} to="/checkpoint"  sx={{fontWeight: '700', color: 'black', fontSize: '13px', fontFamily: "'Josefin Sans', sans-serif", backgroundColor: 'white', borderRadius: '20px',marginTop:'2%', marginLeft: '10%'}}>
      Learn More
    </Button>
    </div>
  )
}
