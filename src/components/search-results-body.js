import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useStore } from 'react-redux';
import { Dropdown } from 'bootstrap';

const SearchResultsBody = (props) => {

  const store = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    
  })

  return (
    <div>
      <div className='column'>
        <p className='food-name-dropdown'>${props.food}</p>
        <div className='row'>
          <p>${props.calories}</p>
          <p>${props.portion}</p>
        </div>
      </div>
    </div>  
  )
}

export default SearchResultsBody;
