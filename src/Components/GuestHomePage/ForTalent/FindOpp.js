import React from 'react'
import { Button} from '@mui/material'
import { Link } from 'react-router-dom';
export default function FindOpp() {
  return (
    <div>
        <Button component={Link} to="/checkpoint"  sx={{fontWeight: '700', color: 'black', fontSize: '13px', fontFamily: "'Josefin Sans', sans-serif", backgroundColor: 'white', borderRadius: '20px',marginTop:'4%', marginLeft: '8%'}}>
      Find Opportunities
    </Button>
    </div>
  )
}
