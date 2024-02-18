import './App.css';

import About from './Components/About';
import Home from './Components/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import Signup from './Components/GuestHomePage/SignupPages/Signup';
import Login from './Components/Login';
import CheckPoint from './Components/GuestHomePage/SignupPages/CheckPoint';
import Example from './Components/Example';
import UserHome from './Components/UserHome';
import ForClients from './Components/GuestHomePage/ForClients';
import ForTalent from './Components/GuestHomePage/ForTalent';
import ClientSignUp from './Components/GuestHomePage/SignupPages/ClientSignup';
import AddInformation from './Components/GuestHomePage/SignupPages/AddInformation';






function App() {
  return (
     <Router>
      <>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkpoint" element={<CheckPoint />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/clientsignup" element={<ClientSignUp />} />
          <Route path="/e2" element={<Example />} />
          {/* <Route path="/desk" element={<UserHome />} /> */}
          <Route path="/desk/:id" element={<UserHome />} />
          <Route path="/add-info/:id" element={<AddInformation />} />
          <Route path="/forclient" element={<ForClients />} />
          <Route path="/fortalent" element={<ForTalent />} />
        </Routes>

      
      </>
    </Router>
    
  );
}

export default App;
