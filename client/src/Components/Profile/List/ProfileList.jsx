import React from 'react';

const ProfileList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
        
      ))}
    </ul>
  );
};

export default ProfileList;
