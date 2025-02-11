import React from 'react';
import './ProfileHeader.css';

const ProfileHeader = ({ name, currentPosition, profilePicture }) => {
  return (
    <div className="profile-header">
      <img src={profilePicture} alt="Profile" className="profile-picture" />
      <h1>{name}</h1>
      <p>{currentPosition}</p>
    </div>
  );
};

export default ProfileHeader;
