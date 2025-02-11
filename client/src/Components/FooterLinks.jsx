import React from 'react';
import './footer.css';

export default function FooterLinks({ title, links }) {
  return (
    <div className="footer-links flp">
      <h3>{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
          <i className="fa-solid fa-angle-right "></i> <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
