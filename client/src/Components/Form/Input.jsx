import React from 'react';
// import { useState } from 'react';


const Input = ({ name, placeholder, label, type,  value, onChange, ...props }) => {


  return (
    <>
      
        <div className="input-box">
          <label>{label}</label>
          <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} className="form-control"  {...props} />
        </div>

    </>
  );
};

export default Input;