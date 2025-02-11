import React from 'react';
import './ProfileSection.css';

const ProfileSection = ({ title, children }) => {
  return (
    <div className="profile-section">
      <h2>{title}</h2>
      <i class="fa-solid fa-plus" ></i>
      {children}
    </div>
  );
};

export default ProfileSection;
