import React from 'react'
import  Button  from '@mui/material/Button'; 
import { Link } from 'react-router-dom';

export default function LoginButton() {
  return (
    <div>
        <Button color="inherit" component={Link} to="/login" sx={{ fontWeight: '700', color: 'black', fontSize: '13px', fontFamily: "'Josefin Sans', sans-serif"}}>
      Login
    </Button>
    </div>
  )
}
