import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useStore } from 'react-redux';

const UserLoginPage = () => {
  
  const store = useStore();
  const navigate = useNavigate();
  

  return(
    <div className='user-input-container' >
      <div classname="user-login-title">
        <label>User Sign-in/Sign-up</label>
      </div>
      <div className='user-login-input'>
        <label>Username: </label>
        <input className='username-input'></input>
        <label>Password: </label>
        <input className='user-password-input' type='password'></input>
      </div>
      <button className='user-login-submit-btn'>Submit</button>
      
    </div>
  )
}

export default UserLoginPage;