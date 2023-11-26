// SearchBar.jsx

import React, { useState } from 'react';
import './SearchBar.css'; // Import your CSS file

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar">
      <form onSubmit={onFormSubmitHandler} className="ui form">
        <div className="field">
          <label>Search below</label>
          <div className="input-container">
            <input
              className='input-field'
              type="text"
              value={term}
              onChange={onInputChange}
            />
            <div className="search-icon" onClick={() => onFormSubmit(term)}>
              {/* You can use an SVG or an icon library for the search icon */}
              <span role="img" aria-label="Search">&#128269;</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
