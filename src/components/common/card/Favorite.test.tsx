import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Favorite, { renderColor } from './Favorite';
import { COLORS } from '../../../utils/constants';
import '@testing-library/jest-dom/extend-expect';

const mockPokemon = {
  name: 'pikachu',
  url: 'hello',
};
const mockOnClick = jest.fn();

describe('Favorite Component', () => {
  it('should return yellow color when $selected is true', () => {
    const result = renderColor({ $selected: true });
    expect(result).toBe(COLORS.yellow);
  });
  it('should return gray color when $selected is false', () => {
    const result = renderColor({ $selected: false });
    expect(result).toBe(COLORS.gray);
  });

  it('should render a star icon', () => {
    render(
      <Favorite pokemon={mockPokemon} isFavorite={true} onClick={mockOnClick} />
    );
    const starIcon = screen.getByTestId('star-icon');
    expect(starIcon).toBeInTheDocument();
  });

  // isFavorite prop is not provided
  it('should not throw an error when isFavorite prop is not provided', () => {
    render(<Favorite pokemon={mockPokemon} onClick={mockOnClick} />);
    const starIcon = screen.getByTestId('star-icon');
    fireEvent.click(starIcon);
    // No error should be thrown
  });
});
