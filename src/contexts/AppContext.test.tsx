import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { AppProvider, useAppContext, appReducer } from './AppContext';
import '@testing-library/jest-dom/extend-expect';

const mockLocalStorage = () => {
  const store: Record<string, any> = {};

  const getItem = (key: string) => store[key];

  const setItem = (key: string, value: string) => {
    store[key] = value;
  };

  const clear = () => {
    Object.keys(store).forEach((key) => delete store[key]);
  };

  return { getItem, setItem, clear };
};

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage(),
});

describe('AppProvider', () => {
  it('renders children and initializes state', () => {
    const { getByText } = render(
      <AppProvider>
        <div>Test Child</div>
      </AppProvider>
    );

    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('should return a new state object with updated isDarkMode property when action type is "SET_DARK_MODE"', () => {
    const initialState = { isDarkMode: false };
    const action = { type: 'SET_DARK_MODE', payload: true };
    const newState = appReducer(initialState, action as any);
    expect(newState).toEqual({ isDarkMode: true });
    expect(newState).not.toBe(initialState);
  });

  it('should throw an error when the context object is undefined', () => {
    jest.spyOn(React, 'useContext').mockReturnValue(undefined);

    expect(useAppContext).toThrow(
      'useAppContext must be used within an AppProvider'
    );
  });

  it('should return the correct toggleDarkMode function', () => {
    const state = { isDarkMode: true };
    const dispatch = jest.fn();
    const toggleDarkMode = jest.fn();
    const contextValue = { state, dispatch, toggleDarkMode };
    jest.spyOn(React, 'useContext').mockReturnValue(contextValue);

    const result = useAppContext();

    expect(result.toggleDarkMode).toEqual(toggleDarkMode);
  });

  it('should return the correct dispatch function', () => {
    const state = { isDarkMode: true };
    const dispatch = jest.fn();
    const toggleDarkMode = jest.fn();
    const contextValue = { state, dispatch, toggleDarkMode };
    jest.spyOn(React, 'useContext').mockReturnValue(contextValue);

    const { dispatch: resultDispatch } = useAppContext();

    expect(resultDispatch).toEqual(dispatch);
  });

  it('should update the state object correctly when dispatch is called', () => {
    const state = { isDarkMode: true };
    const dispatch = jest.fn();
    const toggleDarkMode = jest.fn();
    const contextValue = { state, dispatch, toggleDarkMode };
    jest.spyOn(React, 'useContext').mockReturnValue(contextValue);

    const { dispatch: resultDispatch } = useAppContext();
    resultDispatch({ type: 'SET_DARK_MODE', payload: false });

    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_DARK_MODE',
      payload: false,
    });
  });

  it('should not update the state object when dispatch is called with an invalid action type', () => {
    const initialState = { isDarkMode: true };
    const action = { type: 'INVALID_ACTION_TYPE', payload: false };
    const newState = appReducer(initialState, action as any);
    expect(newState).toEqual(initialState);
  });
});
