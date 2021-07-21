// MODULES
import React from 'react';
import { FiSearch } from 'react-icons/fi';

function Search({ active }) {
  return active ? (
    <FiSearch style={{ fontWeight: 'bold' }} />
  ) : (
    <FiSearch />
  );
}

export default Search;
