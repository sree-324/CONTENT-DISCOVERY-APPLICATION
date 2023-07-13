import logo from './logo.svg';
import './App.css';
// import Frontpage from './pages/Frontpage'/;
import ULogin from './pages/ULogin';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Registrationpage from './pages/Registrationpage';
// import Nav from './pages/Homepage';
import Navbar from './pages/Navbar';
import Createpost from './pages/Createpost';

function App() {
  return (

      <Router> 
            <Routes>
              {<Route path="/" element={<ULogin/>}> </Route>}
              {<Route path="/signup" element={<Registrationpage />}/>}
              {<Route path="/nav" element={<Navbar />}/>}
              {<Route path="/Createpost" element={<Createpost />}/>}
              
         
              
            </Routes>
            
      </Router>
  );
}

export default App;
