import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import post from './addon.PNG'
import {BsPlusCircleFill} from 'react-icons/bs';
import Query from './Query';
import { MdCircleNotifications } from 'react-icons/md';
import {RiAccountCircleFill} from 'react-icons/ri';
import {GoSignOut} from 'react-icons/go';


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }} className="homebar">
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      <div>
        <div className='addon'>
          <Link to="/Createpost" ><BsPlusCircleFill size={46}/></Link>
        </div>
        <div className='notify'>
          <Link to="/notification"><MdCircleNotifications size={50} /></Link>
        </div>
        <div className='account'>
              <Link to='/Myaccount'><RiAccountCircleFill size={50}/></Link>
           
        </div>
        <div className='signout'>
          <Link to='/'><GoSignOut size={45}/></Link>
        </div>
        
        <div className='search'>
          <input type='Search' placeholder='🔍 Search the content'></input>
        </div>
        <br></br>
    
     
    </div>
    <div>
      <Query />
    </div>
    </>
  );
}

export default Navbar;