import logo from './logo.svg';
import './App.css';
// import Frontpage from './pages/Frontpage'/;
import ULogin from './pages/ULogin';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Registrationpage from './pages/Registrationpage';
// import Nav from './pages/Homepage';
import Navbar from './pages/Navbar';
import Createpost from './pages/Createpost';
import Worldnews from './pages/Worldnews';
import Myaccount from './pages/Myaccount';
import Tech from './pages/Technology';
import Education from './pages/Education';
import Politics from './pages/Politics';
import Notification from './pages/Notification';
import Sports from './pages/Sports';

function App() {
  return (

      <Router> 
            <Routes>
              {<Route path="/" element={<ULogin/>}> </Route>}
              {<Route path="/signup" element={<Registrationpage />}/>}
              {<Route path="/nav" element={<Navbar />}/>}
              {<Route path="/Createpost" element={<Createpost />}/>}
              {<Route path="/Worldnews" element={<Worldnews />}/>}
              {<Route path='/Myaccount' element={<Myaccount />}/>}
              {<Route path='/Technology' element={<Tech />}/>}
              {<Route path='/Education' element={<Education />}/>}
              {<Route path='/notification' element={<Notification />}/>}
              {<Route path='/Politics' element={<Politics />}/>}
              {<Route path='/Entertainment' element={<Worldnews />}/>}
              {<Route path='/Sports' element={<Sports />}/>}

              
         
              
            </Routes>
            
      </Router>
  );
}

export default App;
