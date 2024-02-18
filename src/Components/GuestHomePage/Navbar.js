import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Hidden from '@mui/material/Hidden';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import { useMediaQuery, useTheme, Box } from '@mui/material';

import Dropdown1 from './Navbar/FindTalentDropdown';
import Dropdown2 from './Navbar/FindWork';
import Dropdown3 from './Navbar/WhyIdeahub';
import Dropdown from './Navbar/SearchBar';
import SignupButton from './Navbar/SignupButton';
import LoginButton from './Navbar/LoginButton';
import MoreDropdown from './Navbar/MoreDropdown';
import { Link } from 'react-router-dom';




function Navbarex() {
 const LinkStyle = {
textDecoration: 'none',
color: 'black'
 }
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    
    <AppBar position="fixed" sx={{ background: 'darkgrey', zIndex: '1000'}} >
      <Container maxWidth="xl" sx={{borderBottom: '1px silver solid'}}>
        <Toolbar disableGutters>
          <Hidden mdUp>
            {isMobile ? (
              <>
                <DehazeIcon
                  onClick={handleToggleDrawer}
                  sx={{ cursor: 'pointer', color: 'black' }}
                />
               
              </>
            ) : null}
          </Hidden>
          <img
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            src="lightbulb.png"
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
              color: 'black',
              textDecoration: 'none',
            }}
          >
            IdeaHub
          </Typography>

          {/* Display dropdowns for medium and large screens */}
          <Hidden mdDown>
            {isMobile && isDrawerOpen ? null : (
              <>
                <Dropdown1 />
                <Dropdown2 />
                <Dropdown3 />
              </>
            )}
          </Hidden>

          {/* Display search bar for small screens */}
          <Hidden mdDown>
          <Box sx={{ flexGrow: 1 }} /> 
          <Box sx={{ flexGrow: 0 , marginLeft: 'auto',width:'42%'}}>
            
              <Dropdown />
            
            </Box>
          </Hidden>


          {/* Drawer for small screens */}
          <Hidden mdUp>
            <Drawer
              anchor="left"
              open={isDrawerOpen}
              onClose={handleCloseDrawer}
            >
              <div
                role="presentation"
                onClick={handleCloseDrawer}
                onKeyDown={handleCloseDrawer}
              >
                <Dropdown1 />
                <Dropdown2 />
                <Dropdown3 />
                <LoginButton/>
              </div>
            </Drawer>
          </Hidden>
          <Hidden mdUp>
            {isMobile ? (
              <>
               <Box sx={{ flexGrow: 1 }} /> 
          <Box sx={{ flexGrow: 0 , marginLeft: 'auto'}}>
            
                <SearchIcon sx={{ color: 'black' }} />
                </Box>
              </>
            ) : null}
          </Hidden>
          <Hidden mdDown>
            {isMobile && isDrawerOpen ? null : (
             <>
        <Box sx={{ flexGrow: 1 }} /> 
          <Box sx={{ flexGrow: 0 , marginLeft: 'auto'}}>
        <LoginButton/></Box>
        </>
            )}
          </Hidden>
           <SignupButton/>
        </Toolbar>
      </Container>
      {!isMediumScreen && (
      <Container  style={{
        color: 'black',
        fontFamily: "'Josefin Sans', sans-serif",
      //  fontWeight: '500',
        fontSize: '14px',
      }}>
        <Toolbar>
          
       <Link to='#' style={LinkStyle}> Technology & Innovation </Link>&nbsp; &nbsp; &nbsp;
       <Link to='#' style={LinkStyle}> Business & Entrepreneurship </Link> &nbsp; &nbsp; &nbsp;
       <Link to='#' style={LinkStyle}> Creative Arts and Design </Link> &nbsp; &nbsp; &nbsp;
       <Link to='#' style={LinkStyle}> Featured Ideas </Link>&nbsp; &nbsp; &nbsp;
       <Link to='#' style={LinkStyle}> Finance and Investment</Link> &nbsp; &nbsp;<MoreDropdown></MoreDropdown>
        </Toolbar>
      </Container>
      )}
    </AppBar>
    
  );
}

export default Navbarex;
