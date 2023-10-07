import React from 'react';
import { render } from '@testing-library/react';
import Label from './Label';
import '@testing-library/jest-dom/extend-expect';

describe('Label Component', () => {
  it('renders with the correct text', () => {
    const { getByText } = render(<Label length={10} searchTerm='Pikachu' />);

    expect(getByText(/10 pokemons matching/i)).toBeInTheDocument();
    expect(getByText(/“Pikachu”/i)).toBeInTheDocument();
  });

  it('renders with different text for a different length and searchTerm', () => {
    const { getByText } = render(<Label length={5} searchTerm='Charizard' />);

    expect(getByText(/5 pokemons matching/i)).toBeInTheDocument();
    expect(getByText(/“Charizard”/i)).toBeInTheDocument();
  });
});
