import React, { useState } from 'react';
import './ProfileSection.css';
import Modal from '../../Modal/Modal';

const ProfileSection = ({ title, children, modalTitle, modalContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="profile-section">
      <h2>{title}</h2>
      <div className="fa-solid fa-plus icn" onClick={handleOpenModal} ></div>

      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          title={modalTitle}
          content={modalContent}
        />
      )}

      {children}
    </div>
  );
};

export default ProfileSection;
