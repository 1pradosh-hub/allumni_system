import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './signup.css';
import Button from '../Buttons/Button'
import Input from '../Form/Input';
import GenderSelector from '../Form/GenderSelector';
import ReusableForm from '../Form/ReusableForm';
import { useSignupMutation } from '../../ReactSlice/authApi';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Signup() {

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    birth_date: '',
    gender: '',
  });

  const navigate = useNavigate();

  const [signup, { isLoading, error, isSuccess }] = useSignupMutation();

  const genderOptions = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Prefer not to say", value: "other" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "top-right",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signup(userData).unwrap(); // Call the signup mutation
      console.log('Signup successful:', result);
      handleSuccess("User registered succesfully", "We have sent you an OTP on your email");
      
      setTimeout(() => {
        // navigate to otp page
        navigate("/otp");
      }, 5000);

      // clear the form 
      setUserData({
        username: '',
        email: '',
        password: '',
        birth_date: '',
        gender: ''
      });

      

      // Handle navigation or display success message here
    } catch (err) {
      handleError('Signup failed:', err);
    }
  };

  return (
    
    <div className="container pos">
    <ToastContainer />
      <div className="login_form">
        <ReusableForm onSubmit={handleSubmit} className="form">
          <div className="login_option justify-content-center">
            <div className="option">
              <Link to="#">
                <img src="logos/google.png" alt="Google" />
                <span>Google</span>
              </Link>
            </div>
          </div>
          <div className="helper">
            <div className="text2">
              <p>OR</p>
            </div>
            <div className="border"></div>
          </div>
           
          <Input  type="text" name="username" placeholder="Enter full name" value={userData.username}
            onChange={handleChange} required />

          <Input  type="email" name="email" placeholder="Enter email address" value={userData.email}
            onChange={handleChange} required />

          <div className="column">
            <Input  type="password" name="password" placeholder="Enter Password" value={userData.password}
              onChange={handleChange} required />
            <Input  type="date" name='birth_date' value={userData.birth_date}
              onChange={handleChange} required />
          </div>

          <GenderSelector  options={genderOptions} name="gender" value={userData.gender}
            onChange={handleChange} />

          <Button type="submit">Sign up</Button>
          <p className="sign_up">
            Already registered? <Link to="/login">Log In</Link>
          </p>
        </ReusableForm>
      </div>
    </div>
  );
}
