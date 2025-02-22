import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useStore } from 'react-redux';

const SearchResultItemRow = (props) => {
  return(
    <div className='search-result row'
      style={{ }}>
        <label className="item-name">{}</label>
        <label className="calories">{}</label>
   </div>
  )
}

export default SearchResultItemRow;