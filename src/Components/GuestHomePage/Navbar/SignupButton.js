import React from 'react'; 
import  Button  from '@mui/material/Button'; 
import { Link } from 'react-router-dom';


export default function SignupButton() {
  return (
    <div>
        <Button component={Link} to="/checkpoint"  sx={{fontWeight: '700', color: 'black', fontSize: '13px', fontFamily: "'Josefin Sans', sans-serif", backgroundColor: 'goldenrod', borderRadius: '20px'}}>
      Sign Up
    </Button>
    </div>
  )
}
