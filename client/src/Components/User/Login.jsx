import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css';
import Button from '../Buttons/Button'
import { useLoginMutation } from '../../ReactSlice/authApi';

export default function Login() {

  const [login, { isLoading, error }] = useLoginMutation();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(credentials).unwrap();
      console.log('Login successful:', response);
      localStorage.setItem('authToken', response.authToken);
      navigate("/")
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className='login_container'>
      <div className="login_form">
    {/* Login form container */}
    <form action="#" onSubmit={handleSubmit}>
      <h3>Log in with</h3>
      <div className="login_option justify-content-center">
        {/* Google button  */}
        <div className="option">
          <Link to="#">
            <img src="logos/google.png" alt="Google" />
            <span>Google</span>
          </Link>
        </div>
      </div>
       {/* Login option separator */}
      <p className="separator">
        <span>OR</span>
      </p>
       {/* Email input box  */}
      <div className="input_box">
        
        <input type="email" id="email" placeholder="Enter email address" value={credentials.email} onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} required  />
      </div>
       {/* Paswwrod input box  */}
      <div className="input_box">
        <input type="password" id="password" placeholder="Enter your password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} required />
      </div>

      <div className="pass_title">
          <Link to="#">Forgot Password?</Link>
        </div>

       {/* Login button  */}
      {/* <button type="submit">Log In</button> */}
      <Button type="submit" >Log In</Button>
      <p className="sign_up">Don't have an account? <Link to="/signup">Sign up</Link></p>
    </form>
  </div>
    </div>
  )
}
