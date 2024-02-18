import { AppBar, Toolbar , Typography, Box} from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import IconButton from '@mui/material/IconButton';


export default function Navbar() {
  return (
    <AppBar sx={{ background: 'inherit' ,
    //  boxShadow: 'none',
position:'relative'
     }}  >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            src={process.env.PUBLIC_URL + '/lightbulb.png'}
            alt="Logo"
            style={{ height: '35px' }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { md: 'flex' },
              fontFamily: 'Rubik Maps, sans-serif',
              color: 'rgba(15, 28, 28, 1)',
              textDecoration: 'none',
            }}
          >
            IdeaHub
          </Typography>
          <Box sx={{ flexGrow: 1 }} /> 
          <Box sx={{ flexGrow: 0 , marginLeft: 'auto'}}>
          <IconButton sx={{ p: 0 , backgroundColor: 'inherit', border: '2px solid black'}}>
                {/* <Avatar alt=  'Photo' src="/static/images/avatar/2.jpg"  sx={{ width: 50, height: 50 }}/> */}
                <PersonOutlineIcon style={{ color: 'black', fontSize: '30px'}}/>
              </IconButton>
              </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}
