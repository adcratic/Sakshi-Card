import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { NavbarData } from './NavbarData';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const backToTop = ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });

  }
  const refreshPage = ()=>{
    window.location.reload();
    console.log("Page refreshed")
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={()=>{closeMobileMenu(); backToTop(); refreshPage();}}>
            Sakshi Card
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {NavbarData.map((item)=>{
              const {link,cName,title} = item;
              return(
                <li className='nav-item'>
                  <Link to={link} className={cName} onClick={closeMobileMenu}>
                    {title}
                  </Link>
                </li>
              )
            })}
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
