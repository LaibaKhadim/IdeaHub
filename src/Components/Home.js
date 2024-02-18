import React from 'react';
import Navbar from './GuestHomePage/Navbar';
import Banner from './GuestHomePage/Banner';
import Footer from './Footer';
import Browsebytalent from './GuestHomePage/Browsebytalent';
import EnterpriseSuit from './GuestHomePage/EnterpriseSuit';
import ForClients from './GuestHomePage/ForClients';
import ForTalent from './GuestHomePage/ForTalent';
import SupportPalestine from './GuestHomePage/SupportPalestine';




const Home = () => {
  return (
    <div>
    <Navbar></Navbar>
    <Banner></Banner>
   <Browsebytalent></Browsebytalent>
   <EnterpriseSuit></EnterpriseSuit>
   
  

   <ForTalent></ForTalent>
   <SupportPalestine></SupportPalestine>
   <ForClients></ForClients>
    <Footer></Footer>
   
    </div>
  );
}

export default Home;
