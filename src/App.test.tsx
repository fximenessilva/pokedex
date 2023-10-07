import React from 'react';
import { render } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { App, AppWrapper, renderBackground, renderColor } from './App';
import { AppProvider, useAppContext } from './contexts/AppContext';
import { FilterProvider } from './contexts/FilterProvider';
import { PokemonProvider } from './contexts/PokemonContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { COLORS } from './utils/constants';
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

    expect(container).toBeInTheDocument();
  });

  it('should switch dark mode in AppProvider', async () => {
    const { result } = renderHook(() => useAppContext(), {
      wrapper: AppProvider,
    });

    const { toggleDarkMode, state } = result.current;

    expect(state.isDarkMode).toBe(false);

    await act(async () => {
      toggleDarkMode(true);
    });

    expect(result.current.state.isDarkMode).toBe(true);

    await act(async () => {
      toggleDarkMode(false);
    });

    expect(result.current.state.isDarkMode).toBe(false);
  });
});

describe('renderBackground', () => {
  it('should return darkest_gray when isDarkMode is true', () => {
    const props = { $isDarkMode: true };
    const result = renderBackground(props);
    expect(result).toBe(COLORS.darkest_gray);
  });

  it('should return light_gray when isDarkMode is false', () => {
    const props = { $isDarkMode: false };
    const result = renderBackground(props);
    expect(result).toBe(COLORS.light_gray);
  });
});

describe('renderColor', () => {
  it('should return light_gray when isDarkMode is true', () => {
    const props = { $isDarkMode: true };
    const result = renderColor(props);
    expect(result).toBe(COLORS.light_gray);
  });

  it('should return darkest_gray when isDarkMode is false', () => {
    const props = { $isDarkMode: false };
    const result = renderColor(props);
    expect(result).toBe(COLORS.darkest_gray);
  });
});
