import React from 'react';
import { render } from '@testing-library/react';
import Label from './Label';
import '@testing-library/jest-dom/extend-expect';

describe('Label Component', () => {
  it('renders with the correct text', () => {
    const { getByText } = render(<Label length={10} searchTerm='Pikachu' />);

    // Verify that the component renders with the expected text using a regular expression
    expect(getByText(/10 pokemons matching/i)).toBeInTheDocument();
    expect(getByText(/“Pikachu”/i)).toBeInTheDocument();
  });

  it('renders with different text for a different length and searchTerm', () => {
    const { getByText } = render(<Label length={5} searchTerm='Charizard' />);

    // Verify that the component renders with the expected text for different props
    expect(getByText(/5 pokemons matching/i)).toBeInTheDocument();
    expect(getByText(/“Charizard”/i)).toBeInTheDocument();
  });

  // Add more test cases as needed to cover different scenarios
});
