import React from 'react'
import { Box, Typography , Grid} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
export default function Footer() {
  const textStyle = {
    fontSize: '13px',
    fontFamily:"'Quicksand', sans-serif",
     color: 'white',
     textDecoration: 'none'
  };
  return(
  <Box
  component="footer"
  sx={{
    position: 'relative',
  backgroundColor: 'rgba(15, 28, 28, 1)',
    color: 'white',
    paddingTop: '4%',
    paddingLeft: '5%',
   marginTop: '45px',
    // fontWeight: '200',
    height: '70%',
    width: '92%',
    marginLeft:'1.5%',
    borderRadius:'20px',
  }}
>

<Grid container spacing={3}>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="/forclient" >For Clients</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="/fortalent" >For Talent</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Resources</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Company</Typography>
      </Grid>
  </Grid><br/><br/>
 
  <Grid container spacing={3}>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >How to Hire</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >How to Find Work</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Help & Support</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#"  >About Us</Typography>
      </Grid>
  </Grid>
  <Grid container spacing={3}>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Talent Marketplace</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Direct Contracts</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Success Stories</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Leadership</Typography>
      </Grid>
  </Grid>
  <Grid container spacing={3}>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Project Catalog</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Find Freelance Jobs Worldwide</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Upwork Reviews</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Investor Relations</Typography>
      </Grid>
  </Grid>
  <Grid container spacing={3}>
  <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Hire an Agency</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Find Freelance Jobs in the USA</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Resources</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Careers</Typography>
      </Grid>
  </Grid>
  <Grid container spacing={3}>
  <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Enterprise</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" ></Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Blog</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Our Impact</Typography>
      </Grid>
  </Grid>
  <Grid container spacing={3}>
  <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Any Hire</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" ></Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Community</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Press</Typography>
      </Grid>
  </Grid>
  <Grid container spacing={3}>
  <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Contract-to-Hire</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" ></Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Affiliate Program</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Contact Us</Typography>
      </Grid>
  </Grid>
  <Grid container spacing={3}>
  <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" > Direct Contracts</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" ></Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Free Business tools</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Trust, Safety & Security</Typography>
      </Grid>
  </Grid>
  <Grid container spacing={3}>
  <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" > Hire Worldwide</Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" ></Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" ></Typography>
      </Grid>
      <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" >Modern Slavery Statement</Typography>
      </Grid>
  </Grid>
  <Grid container spacing={3}>
  <Grid item xs={12} sm={3} xl={3}>
        <Typography variant="body1" style={textStyle} component={Link} to="#" > Hire in the USA</Typography>
      </Grid>
     
  </Grid>
 <div style={{
  width: '95%',
  borderBottom: '1px white solid' ,
  marginTop: '8%',
  height: '55px',
  fontFamily:"'Quicksand', sans-serif",
  fontWeight: '600',
  fontSize: '16px'
 }}>
Follow Us
 <InstagramIcon style={{
  marginLeft: '4rem',
  fontSize: 'larger',
  padding: '10px',
  border: '1px white solid',
  borderRadius: '20px'
}}/>
<TwitterIcon style={{
  marginLeft: '1rem',
  fontSize: 'larger',
  padding: '10px',
  border: '1px white solid',
  borderRadius: '20px'
}}/>
<FacebookIcon style={{
  marginLeft: '1rem',
  fontSize: 'larger',
  padding: '10px',
  border: '1px white solid',
  borderRadius: '20px'
}}/>
<YouTubeIcon style={{
  marginLeft: '1rem',
  fontSize: 'larger',
  padding: '10px',
  border: '1px white solid',
  borderRadius: '20px'
}}/>
<LinkedInIcon style={{
  marginLeft: '1rem',
  fontSize: 'larger',
  padding: '10px',
  border: '1px white solid',
  borderRadius: '20px'
}}/>
 </div>
 <div style={{
  width: '95%',
  height: '65px',
  fontFamily:"'Quicksand', sans-serif",
  fontWeight: '600',
  fontSize: '11px',
  marginTop: '6px'
 }}>
© 2024- IdeaHub® Global Inc. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Terms of Service  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Privacy Policy  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
CA Notice at Collection  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Cookie Settings  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Accessibility  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 </div>
</Box>

  );
}

