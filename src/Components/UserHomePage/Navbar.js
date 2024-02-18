import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Hidden from '@mui/material/Hidden';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import { useMediaQuery, useTheme } from '@mui/material';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import TelegramIcon from '@mui/icons-material/Telegram'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import Dropdown2 from './Navbar/MyIdeas';
import Dropdown1 from './Navbar/BrowseIdeas';
import Dropdown3 from './Navbar/MyAccount';
import Dropdown from './Navbar/SearchBar';
import Jobs from './Navbar/Jobs';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



function Navbarex() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    
    <AppBar sx={{ background: 'lightgrey', zIndex: '1000', boxShadow:'none'}} position='relative' >
      <Container maxWidth="xl">
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
                <Dropdown/>
              </div>
            </Drawer>
          </Hidden>
          
          <Hidden mdUp>
            {isMobile ? (
              <>
               <div style={{ justifyContent: 'flex-end', display: 'flex', width: '55%' }}>
                <SearchIcon sx={{ color: 'black' }} />
                </div>
              </>
            ) : null}
          </Hidden>
          <Hidden mdDown>
          <Box sx={{ flexGrow: 1 }} /> 
          <Box sx={{ flexGrow: 1 }} /> 
          <Box sx={{ flexGrow: 1 }} /> 
          <Box sx={{ flexGrow: 1 }} /> 
          
          <Box sx={{ flexGrow: 0 , marginLeft: 'auto'}}>
              <Dropdown />
            </Box>
         
          <Jobs></Jobs>
          <QuestionMarkIcon style={{color: 'black', marginLeft: '1%'}}/>
          <TelegramIcon style={{color: 'black', marginLeft: '1%'}}/>
          <NotificationsActiveIcon style={{color: 'black', marginLeft: '1%'}}/>
          </Hidden>
          <Box sx={{ flexGrow: 1 }} /> 
          <Box sx={{ flexGrow: 0 , marginLeft: 'auto'}}>
         

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
    
  );
}

export default Navbarex;
