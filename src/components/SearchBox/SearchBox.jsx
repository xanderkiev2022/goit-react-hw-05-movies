import { useState } from 'react';
import PropTypes from 'prop-types';

export default function SearchBox({ onChange }) {
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
    onChange(searchQuery.trim());
    console.log('searchQuery :>> ', searchQuery);
    setSearchQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchQuery} onChange={handleChange} />
      <button> Search</button>
    </form>
  );
}

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
