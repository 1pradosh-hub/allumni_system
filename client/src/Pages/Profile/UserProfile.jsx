import React from 'react';
import ProfileHeader from '../../Components/Profile/Header/ProfileHeader';
import ProfileSection from '../../Components/Profile/Section/ProfileSection';
import ProfileList from '../../Components/Profile/List/ProfileList';
import './UserProfile.css';
import profile from './profile.png'
import {useState} from 'react';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "",
    // profilePicture: profile,
    currentPosition: "",
    email: "",
    phone: "",
    linkedIn: "",
    github: "",
    degree: "",
    graduationYear: "",
    skills: [],
    interests: [],
  })


  return (
    <div className="profile-container">
      <ProfileHeader
        name={user.name}
        currentPosition={user.currentPosition}
        profilePicture={user.profilePicture}
      />
      <div className="profile-body">
        <ProfileSection title="Contact Information">
          <p>Email: <a href={`mailto:${user.email}`}>{user.email}</a></p>
          <p>Phone: {user.phone}</p>
          <p>LinkedIn: <a href={user.linkedIn} target="_blank" rel="noopener noreferrer">{user.linkedIn}</a></p>
          <p>GitHub: <a href={user.github} target="_blank" rel="noopener noreferrer">{user.github}</a></p>
        </ProfileSection>

        <ProfileSection title="Education">
          <p>{user.degree}</p>
          <p>Graduation Year: {user.graduationYear}</p>
        </ProfileSection>

        <ProfileSection title="Skills">
          <ProfileList items={user.skills} />
        </ProfileSection>

        <ProfileSection title="Interests">
          <ProfileList items={user.interests} />
        </ProfileSection>
      </div>
    </div>
  );
};

export default UserProfile;
