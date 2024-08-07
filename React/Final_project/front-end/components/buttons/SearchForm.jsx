import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

export default function SearchForm ()  {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);

  const fetchSuggestions = async (query) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      if (data.meals) {
        setSuggestions(data.meals);
      } else {
        setSuggestions([]);
      }
    } catch (err) {
      setError('Error fetching suggestions');
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 2) {
      fetchSuggestions(query);
    } else {
      setSuggestions([]);
    }
  };

  const handleReset = () => {
    setSearchQuery('');
    setSuggestions([]);
    setError(null);
  };

  return (
    <div>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <button type="submit">
          <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
            <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
        <input
          className="input"
          placeholder="Search"
          required
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className="reset" type="reset" onClick={handleReset}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </form>

      {error && <p>{error}</p>}

      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((meal) => (
            <li key={meal.idMeal}>
              <Link to={`/meal/${meal.idMeal}`} onClick={() => setSuggestions([])}>{meal.strMeal}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


