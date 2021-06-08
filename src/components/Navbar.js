import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link
            to='HeroSection'
            smooth={true}
            className='logo-nav-link'
            onClick={closeMobileMenu}
          >
            Gruppe 14
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='HeroSection'
                smooth={true}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Forside
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='Documents'
                smooth={true}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Dokumenter
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='Members'
                smooth={true}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Medlemmer
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
