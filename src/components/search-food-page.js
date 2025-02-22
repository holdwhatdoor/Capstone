import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useStore } from 'react-redux';
import SearchBar from './search-bar.js';
import SearchResultItemRow from './search-result-item-row.js';

const SearchFoodPage = () => {

  const searchResults = [];

  return (
    <div>
      <SearchBar />
      <SearchResultItemRow />
    </div>
  )
}

export default SearchFoodPage;