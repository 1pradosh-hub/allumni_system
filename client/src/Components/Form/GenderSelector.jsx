import React from 'react';
import './input.css'

export default function GenderSelector({ options, name, value, onChange }) {
  return (
    <div className="form-group box">
      {/* <label htmlFor={name}>Gender</label> */}
      <select id={name} name={name}
        value={value} // Bind the state value
        onChange={onChange} // Handle state updates
        className="form-control" required >
        <option value="" disabled>
          Select Your Gender
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

