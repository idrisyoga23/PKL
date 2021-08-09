import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import { Link } from 'react-router-dom';
import { SideNavdata } from '../sidebar/SideNavdata';
import './Navbar.css';
import Logo from '../Login/Media/unknown.png'
import profile from '../Login/Media/nama.jpg'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <MenuIcon onClick={showSidebar} />
          </Link>
          <img id='logo' src={Logo}>
        </img>
        <h1 id='judul'> Pemerintah kota jakarta utara</h1>
          
          
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            
          <ul className='nav-menu-items' onClick={showSidebar}>
          
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                  <ClearIcon />
                  
              </Link>
            </li>
            {SideNavdata.map((item, index) => {
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
    </>
  );
}

export default Navbar;