import React from 'react';
import { Link } from 'react-router-dom';
import "./nav.css"
import logo from "../../images/logo.png"


export default function Nav(props) {
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
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="#">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Message</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">News & Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/career'>Career</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Activities</Link></li>
                  <li><Link className="dropdown-item" to="#">Resources</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="#">Contact</Link></li>
                  <li><Link className="dropdown-item" to="#">Terms &  Conditions</Link></li>

                </ul>
              </li>
              <li>
              <div className='d-flex'>
                <Link className="btn btn-danger  mx-1" to='/login' role='button'>Login</Link>
               
              </div>
              </li>
            </ul>
            {/* <div className='d-flex'>
                <Link className="btn btn-danger  mx-1" to='/login' role='button'>Login</Link>
               
              </div> */}
          </div>
        </div>
      </nav>
    </div>
  )
}
