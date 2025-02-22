import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useStore } from 'react-redux';

const CreateAccountPage = () => {
  
  const store = useStore();
  const navigate = useNavigate();
  
  return(
    <div>
      <label>Create New Account</label>
      <div>
        <label>Username: </label>
        <input></input>
        <label>Password: </label>
        <input></input>
      </div>
    </div>
  )

}

export default CreateAccountPage;