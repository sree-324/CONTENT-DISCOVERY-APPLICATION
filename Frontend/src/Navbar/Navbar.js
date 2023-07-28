import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import {BsPlusCircleFill} from 'react-icons/bs';
import { MdCircleNotifications } from 'react-icons/md';
import {RiAccountCircleFill} from 'react-icons/ri';
import {GoSignOut} from 'react-icons/go';
import { Link } from "react-router-dom";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
    <div className="nav_top">
		<header>
			<div>
		<div className='addon'>
          <Link to="/Createpost" ><BsPlusCircleFill size={30} style={{ color: 'white' }}/></Link>
        </div>
        <div className='notify'>
          <Link to="/notification"><MdCircleNotifications size={30} style={{ color: 'white' }} /></Link>
        </div>
        <div className='account'>
              <Link to='/Myaccount'><RiAccountCircleFill size={30} style={{ color: 'white' }}/></Link>
           
        </div>
        <div className='signout'>
          <Link to='/'><GoSignOut size={30} style={{ color: 'white' }}/></Link>
        </div>
		
		<div className="topbarCenter">
        <div className="searchbar">
          
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>

		</div>
			<nav ref={navRef} className="topend">
				<a href="/Worldnews">WorldNews</a>
				<a href="/Education">Education</a>
				<a href="/Politics">Politics</a>
				<a href="/Sports">Sports</a>
				<a href="/feedback">Feedback</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
    </div>
	);
}

export default Navbar;