import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import {
  FilterProvider,
  useFilterState,
  filterReducer,
  filterInitialState,
  FilterAction,
} from './FilterProvider'; // Replace with the actual path
import '@testing-library/jest-dom/extend-expect';
import { renderHook } from '@testing-library/react-hooks';

describe('FilterProvider', () => {
  it('renders children and initializes state', () => {
    const { getByText } = render(
      <FilterProvider>
        <div>Test Child</div>
      </FilterProvider>
    );

    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('provides the correct initial filter state', () => {
    const { result } = renderHook(() => useFilterState(), {
      wrapper: FilterProvider,
    });

    expect(result.current.filterState.searchTerm).toBe('');
  });

  it('updates the search term correctly when setSearchTerm is called', () => {
    const { result } = renderHook(() => useFilterState(), {
      wrapper: FilterProvider,
    });

    act(() => {
      result.current.setSearchTerm({
        target: { value: 'test' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.filterState.searchTerm).toBe('test');
  });
});

describe('filterReducer', () => {
  it('should handle SET_SEARCHTERM action correctly', () => {
    const initialState = {
      searchTerm: '',
    };

    const action = {
      type: 'SET_SEARCHTERM',
      payload: 'test',
    };

    const newState = filterReducer(initialState, action as FilterAction);

    expect(newState).toEqual({
      searchTerm: 'test',
    });
  });

  it('should handle SET_FILTERS_TO_INITIAL action correctly', () => {
    const initialState = {
      searchTerm: 'test',
    };

    const action = {
      type: 'SET_FILTERS_TO_INITIAL',
    };

    const newState = filterReducer(initialState, action as FilterAction);

    expect(newState).toEqual(filterInitialState);
  });

  it('should return the current state for an unknown action', () => {
    const initialState = {
      searchTerm: 'test',
    };

    const action = {
      type: 'UNKNOWN_ACTION',
      payload: 'something',
    };

    const newState = filterReducer(initialState, action as FilterAction);

    expect(newState).toEqual(initialState);
  });
});

describe('useFilterState', () => {
  it('should throw an error when used outside of FilterProvider', () => {
    // Render a component that uses useFilterState outside of FilterProvider
    let error = null;
    const ComponentUsingHook = () => {
      try {
        useFilterState();
      } catch (e) {
        error = e;
      }
      return null;
    };

    render(<ComponentUsingHook />);

    // Expect an error to be thrown
    expect(error).toEqual(
      new Error('useFilterState must be used within a FilterProvider')
    );
  });

  it('should not throw an error when used inside FilterProvider', () => {
    // Render a component that uses useFilterState inside FilterProvider
    let error = null;
    const ComponentUsingHook = () => {
      try {
        useFilterState();
      } catch (e) {
        error = e;
      }
      return null;
    };

    render(
      <FilterProvider>
        <ComponentUsingHook />
      </FilterProvider>
    );

    // Expect no error to be thrown
    expect(error).toBeNull();
  });
});
