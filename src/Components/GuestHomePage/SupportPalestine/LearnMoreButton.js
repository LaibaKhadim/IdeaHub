import React from 'react'; 
import  Button  from '@mui/material/Button'; 
import { Link } from 'react-router-dom';


export default function LearnMoreButton() {
  return (
    <div>
        <Button component={Link} to="/checkpoint"  sx={{fontWeight: '700', color: 'indianred', fontSize: '13px', fontFamily: "'Josefin Sans', sans-serif", backgroundColor: 'white', borderRadius: '20px',marginTop:'2%', marginLeft: '10%', border: '2px indianred solid'}}>
      Learn More
    </Button>
    </div>
  )
}
