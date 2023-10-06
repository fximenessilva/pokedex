import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '../contexts/AppContext';
import { FilterProvider } from '../contexts/FilterProvider';
import { PokemonProvider } from '../contexts/PokemonContext';
import { Routes } from './Routes';
import '@testing-library/jest-dom/extend-expect';

const MainWrapper = () => (
  <AppProvider>
    <Router>
      <AppProvider initialState={{ isDarkMode: false }}>
        <FilterProvider>
          <PokemonProvider>
            <Routes />
          </PokemonProvider>
        </FilterProvider>
      </AppProvider>
    </Router>
  </AppProvider>
);

describe('Routes', () => {
  it('renders the home page', () => {
    const { container } = render(<MainWrapper />);
    expect(container).toMatchSnapshot();
  });

  it('renders the Pokemon list page', () => {
    const { container } = render(<MainWrapper />);
    expect(container).toMatchSnapshot();
  });

  it('renders the Pokemon detail page', () => {
    const { container } = render(<MainWrapper />);
    expect(container).toMatchSnapshot();
  });

  it('renders the Not Found page for unknown routes', () => {
    const { container } = render(<MainWrapper />);
    expect(container).toMatchSnapshot();
  });
});
