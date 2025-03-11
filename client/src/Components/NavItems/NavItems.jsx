import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";

export const List= ({items, className}) =>{
  return (
    <div>
        {items.map((items, index) => (
        <li key={index}>
          <Link className={className} to={items.path}>
            {items.label}
          </Link>
        </li>
      ))}
    </div>
  );
};


export const Links= ({item, className}) =>{
  return (
    <ul className="navbar-nav ms-auto ">
        {item.map((item, index) => (
        <li key={index} className="nav-item">
          <Link className={className} to={item.path}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};


