import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar/Navbar';
import Createpost from './pages/Createpost';
import Notification from './pages/Notification';
import Myaccount from './pages/Myaccount';
import Worldnews from './pages/WorldNews';
import Sports from './pages/Sports';
import Technology from './pages/Technology';
// import Politics from './pages/Politics';
import Education from './pages/Education';
import Politics from './pages/Homepage';
import Signup from './Signup';
import store from './Store';
import { Provider } from 'react-redux';
import FeedForm from './Feedback';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path='/homepage' element={<Politics />}></Route>
          <Route path="/navbar" element={<Navbar />}></Route>
          <Route path='/Createpost' element={<Createpost />}></Route>
          <Route path='/Notification' element={<Notification />}></Route>
          <Route  path='/Myaccount' element={<Myaccount />}></Route>
          <Route path='/Worldnews' element={<Worldnews />}></Route>
          <Route path='/Sports' element={<Sports />}></Route>
          <Route path='/Technology' element={<Technology />}></Route>
          <Route path='/Politics' element={<Politics />}></Route>
          <Route path='/Education' element={<Education />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/feedback' element={<FeedForm />}></Route>
                
        </Routes>
      </Router>
      </Provider>
      
    
    </div>
  );
}

export default App;
