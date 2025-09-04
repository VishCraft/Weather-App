import React, { useState } from 'react';
import { useDebounce } from '../../../hooks/useDebounce';
import { Button } from '../../common/Button';
import styles from './SearchBar.module.css';

export const SearchBar = ({ onSearch, onUseLocation }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const debouncedQuery = useDebounce(query, 300);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery('');
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    onSearch(suggestion);
    setQuery('');
    setSuggestions([]);
  };

  return (
    <div className={styles['search-bar']}>
      <form onSubmit={handleSubmit} className={styles['search-form']}>
        <div className={styles['search-input-container']}>
          <input
            type="text"
            placeholder="Enter city name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles['search-input']}
          />
          <Button type="submit" size="sm">
            Search
          </Button>
        </div>
      </form>

      <div className={styles['search-actions']}>
        <Button variant="outline" size="sm" onClick={onUseLocation}>
          📍 Use My Location
        </Button>
      </div>

      {suggestions.length > 0 && (
        <ul className={styles['suggestions']}>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
