import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./nav.css";
import logo from "../../images/logo.png";
import {Links, List} from '../NavItems/NavItems';


export default function Nav(props) {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () =>{
    setDropdownOpen(!dropdownOpen)
  }

  const menuItems = [
    { label: 'Activities', path: '#' },
    { label: 'Resources', path: '#' },
    { label: 'Contact', path: '#' },
    { label: 'Terms & Conditions', path: '#' },
  ];
  const navLinks = [
    { label: 'About', path: '#' },
    { label: 'Message', path: '#' },
    { label: 'News & Events', path: '#' },
    { label: 'Gallery', path: '#' },
    { label: 'Career', path: '#' },

  ];

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className='logo_box'>
            <Link className="navbar-brand name" to="/">
              {props.title}
            </Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse p" id="navbarSupportedContent">

              {/* Nav items  */}
              <Links item={navLinks} className="nav-link" />

              {/* More button with drop down */}
              <li className="nav-item dropdown">
              <button className='nav-link dropdown-toggle' onClick={toggleDropdown} data-bs-toggle="dropdown" aria-expanded="false">
                More
              </button>
              <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                <List items={menuItems} className="dropdown-item" />
              </ul>
              </li>

              {/* Profile section  */}
                <div className='d-flex'>
                  {localStorage.getItem('authToken') ? (<button className="btn btn-danger  mx-1" to='@'>Logout</button>)
                    : (<Link className="btn btn-danger  mx-1" to='/login' role='button'>Login</Link>)}
                </div>


          </div>
        </div>
      </nav>
    </div>
  )
}
