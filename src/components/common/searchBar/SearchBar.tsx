import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (searchText: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, ...props }) => {
  return (
    <div className='searchbar-wrapper'>
      <input
        type='text'
        placeholder='Search...'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...props}
        className='searchbar'
      />
    </div>
  );
};

export default SearchBar;
