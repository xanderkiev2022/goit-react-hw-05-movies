import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from './SearchBox.styled';

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
    <Form onSubmit={handleSubmit}>
      <Input type="text" value={searchQuery} onChange={handleChange} />
      <Button> Search</Button>
    </Form>
  );
}

SearchBox.propTypes = {
  onSubmit: PropTypes.func,
};
