import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import '@testing-library/jest-dom/extend-expect';

describe('SearchBar', () => {
  it('renders with the correct placeholder and value', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(
      <SearchBar
        value='Pikachu'
        onChange={() => {
          //placeholder comment
        }}
      />
    );

    expect(getByPlaceholderText('Search pokemon...')).toBeInTheDocument();

    expect(getByDisplayValue('Pikachu')).toBeInTheDocument();
  });
});
