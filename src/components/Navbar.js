import React from 'react';
import logo from '../images/logo.svg';
import { pageLinks, socialLinks } from '../data';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div class='nav-header'>
          <img src={logo} class='nav-logo' alt='backroads' />
          <button type='button' class='nav-toggle' id='nav-toggle'>
            <i class='fas fa-bars'></i>
          </button>
        </div>

        {/* dynamic links using data from data.js  */}
        <ul class='nav-links' id='nav-links'>
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} class='nav-link'>
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul class='nav-icons'>
          {socialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  target='_blank'
                  rel='noreferrer'
                  className='nav-icon'
                >
                  <i className={link.class}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
