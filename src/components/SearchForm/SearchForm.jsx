import { useState } from 'react';

export const Searchbar = ({ updateQueryString }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    const normalizedValue = value.toLowerCase();
    setSearchQuery(normalizedValue);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!searchQuery) {
      return;
    }
    updateQueryString(searchQuery.trim());
    setSearchQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchQuery} onChange={handleChange} />
      <button> Search</button>
    </form>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
