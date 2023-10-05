import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (searchText: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, ...props }) => {
  return (
    <input
      type='text'
      placeholder='Search...'
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    />
  );
};

export default SearchBar;
