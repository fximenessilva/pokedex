import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppProvider } from '../../../contexts/AppContext';
import { FilterProvider } from '../../../contexts/FilterProvider';
import { PokemonProvider } from '../../../contexts/PokemonContext';
import Header from './Header';
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
});
