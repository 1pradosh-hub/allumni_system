import React, { useState } from 'react';
import '../../Components/User/signup.css';
import Button from '../../Components/Buttons/Button';
import Input from '../../Components/Form/Input';
import ReusableForm from '../../Components/Form/ReusableForm';

export default function Otp() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleOtpChange = (e) => {
    const value = e.target.value;
    // Allow only numeric values and restrict length to 6 digits
    if (/^\d*$/.test(value) && value.length <= 4) {
      setOtp(value);
      setError(''); // Clear error if input is valid
    } else {
      setError('OTP must be a numeric value and up to 4 digits long.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate OTP length before submitting
    if (otp.length === 4) {
      console.log('OTP Verified:', otp);
    } else {
      setError('Please enter a valid OTP.');
    }
  };

  return (
    <div className="container pos">
      <div className="login_form">
        <ReusableForm onSubmit={handleSubmit} className="form">
          <Input
            label="Submit the OTP"
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={handleOtpChange}
            required
          />
          {error && <p className="error-text">{error}</p>}
          <Button type="submit">Verify</Button>
        </ReusableForm>
      </div>
    </div>
  );
}
