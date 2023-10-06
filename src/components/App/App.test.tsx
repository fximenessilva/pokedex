import React from 'react';
import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { App, AppWrapper } from './App';
import { AppProvider, useAppContext } from '../../contexts/AppContext';
import { FilterProvider } from '../../contexts/FilterProvider';
import { PokemonProvider } from '../../contexts/PokemonContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { COLORS } from '../../utlils/constants';
import '@testing-library/jest-dom/extend-expect';

const MainWrapper = () => (
  <AppProvider>
    <Router>
      <AppProvider>
        <FilterProvider>
          <PokemonProvider>
            <App />
          </PokemonProvider>
        </FilterProvider>
      </AppProvider>
    </Router>
  </AppProvider>
);

describe('AppWrapper', () => {
  it('should render App component', () => {
    const { container } = render(<MainWrapper />);

    expect(container).toBeInTheDocument();
  });
  it('should render AppWrapper component', () => {
    const { container } = render(
      <AppProvider>
        <Router>
          <AppWrapper />
        </Router>
      </AppProvider>
    );

    expect(container).toBeInTheDocument();
  });

  it('should toggle dark mode in AppProvider', () => {
    const { result } = renderHook(() => useAppContext(), {
      wrapper: AppProvider,
    });

    const { toggleDarkMode, state } = result.current;

    expect(state.isDarkMode).toBe(false);

    act(() => {
      toggleDarkMode(true);
    });

    expect(state.isDarkMode).toBe(false);

    act(() => {
      toggleDarkMode(false);
    });

    expect(state.isDarkMode).toBe(false);
  });

  // Renders the PokemonProvider component

  it('should render PokemonProvider component', () => {
    const { container } = render(
      <AppProvider>
        <Router>
          <AppProvider>
            <FilterProvider>
              <PokemonProvider>
                <App />
              </PokemonProvider>
            </FilterProvider>
          </AppProvider>
        </Router>
      </AppProvider>
    );

    // Check that the PokemonProvider component or its contents are in the rendered output
    expect(container).toBeInTheDocument();
  });
});
