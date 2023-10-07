import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppProvider } from '../../../contexts/AppContext';
import { FilterProvider } from '../../../contexts/FilterProvider';
import { PokemonProvider } from '../../../contexts/PokemonContext';
import Header, { toTop } from './Header';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(() => ({
    pathname: '/pokemons_list',
  })),
}));

const setSearchTerm = jest.fn();

describe('Header', () => {
  it('renders Header component', () => {
    render(
      <MemoryRouter>
        <AppProvider>
          <FilterProvider>
            <PokemonProvider>
              <Header />
            </PokemonProvider>
          </FilterProvider>
        </AppProvider>
      </MemoryRouter>
    );

    expect(screen.getByAltText('pokemon logo')).toBeInTheDocument();
    expect(screen.getByTestId('toggle-button')).toBeInTheDocument();
  });

  it('renders correctly for a different route', () => {
    jest.spyOn(require('react-router-dom'), 'useLocation').mockReturnValueOnce({
      pathname: '/other_route',
    });

    render(
      <MemoryRouter>
        <AppProvider>
          <FilterProvider>
            <PokemonProvider>
              <Header />
            </PokemonProvider>
          </FilterProvider>
        </AppProvider>
      </MemoryRouter>
    );
  });
  it('does not render Input.Root when the route is "/fake"', () => {
    render(
      <MemoryRouter>
        <AppProvider>
          <FilterProvider>
            <PokemonProvider>
              <Header />
            </PokemonProvider>
          </FilterProvider>
        </AppProvider>
      </MemoryRouter>
    );

    const inputRoot = screen.queryByTestId('input-root');

    expect(inputRoot).not.toBeInTheDocument();
  });
});

describe('toTop function', () => {
  it('should return "-180px" when scroll direction is "down"', () => {
    const result = toTop({ $scrollDir: 'down' });
    expect(result).toBe('-180px');
  });

  it('should return "0" when scroll direction is not "down"', () => {
    const result = toTop({ $scrollDir: 'up' });
    expect(result).toBe('0');
  });
});
