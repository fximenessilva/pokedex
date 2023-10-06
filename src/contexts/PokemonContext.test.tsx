import React from 'react';
import { render, act } from '@testing-library/react';
import {
  PokemonProvider,
  usePokemonContext,
  pokemonReducer,
  PokemonContextProps,
  Action,
  filterByKeyCallback,
} from './PokemonContext'; // Replace with the actual import path
import { FilterProvider } from './FilterProvider'; // Make sure to import FilterProvider as well
import '@testing-library/jest-dom/extend-expect';
import { renderHook } from '@testing-library/react-hooks';
import { Pokemons, Pokemon } from '../utlils/types';

describe('PokemonProvider', () => {
  it('renders children and initializes state', () => {
    const { getByText } = render(
      <FilterProvider>
        <PokemonProvider>
          <div>Test Child</div>
        </PokemonProvider>
      </FilterProvider>
    );

    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('provides the correct initial Pokemon state', () => {
    const { result } = renderHook(() => usePokemonContext(), {
      wrapper: ({ children }) => (
        <FilterProvider>
          <PokemonProvider>{children}</PokemonProvider>
        </FilterProvider>
      ),
    });

    expect(result.current.pokemons).toEqual([]);
    expect(result.current.pokemon).toBeNull();
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();
  });
});

describe('usePokemonContext', () => {
  it('should throw an error when used outside of PokemonProvider', () => {
    // Render a component that uses usePokemonContext outside of PokemonProvider
    let error = null;
    const ComponentUsingHook = () => {
      try {
        usePokemonContext();
      } catch (e) {
        error = e;
      }
      return null;
    };

    render(<ComponentUsingHook />);

    // Expect an error to be thrown
    expect(error).toEqual(
      new Error('usePokemonContext must be used within a PokemonProvider')
    );
  });

  it('should not throw an error when used inside PokemonProvider', () => {
    // Render a component that uses usePokemonContext inside PokemonProvider
    let error = null;
    const ComponentUsingHook = () => {
      try {
        usePokemonContext();
      } catch (e) {
        error = e;
      }
      return null;
    };

    render(
      <FilterProvider>
        <PokemonProvider>
          <ComponentUsingHook />
        </PokemonProvider>
      </FilterProvider>
    );

    // Expect no error to be thrown
    expect(error).toBeNull();
  });
});

describe('pokemonReducer', () => {
  it('should handle SET_POKEMONS action correctly', () => {
    const initialState = {
      pokemons: [],
      pokemon: null,
      loading: true,
      error: null,
    };

    const action = {
      type: 'SET_POKEMONS',
      payload: [
        { name: 'Pikachu' },
        { name: 'Charizard' },
        // Add more Pokemon objects as needed
      ],
    };

    const newState = pokemonReducer(
      initialState as PokemonContextProps,
      action as Action
    );

    expect(newState).toEqual({
      pokemons: action.payload,
      pokemon: null,
      loading: false,
      error: null,
    });
  });

  it('should handle SET_POKEMON action correctly', () => {
    const initialState = {
      pokemons: [],
      pokemon: null,
      loading: true,
      error: null,
    };

    const action = {
      type: 'SET_POKEMON',
      payload: { name: 'Pikachu' },
    };

    const newState = pokemonReducer(
      initialState as PokemonContextProps,
      action as Action
    );

    expect(newState).toEqual({
      pokemons: [],
      pokemon: action.payload,
      loading: false,
      error: null,
    });
  });

  it('should handle SET_ERROR action correctly', () => {
    const initialState = {
      pokemons: [],
      pokemon: null,
      loading: true,
      error: null,
    };

    const action = {
      type: 'SET_ERROR',
      payload: 'An error occurred',
    };

    const newState = pokemonReducer(
      initialState as PokemonContextProps,
      action as Action
    );

    expect(newState).toEqual({
      pokemons: [],
      pokemon: null,
      loading: false,
      error: action.payload,
    });
  });

  it('should handle SET_LOADING action correctly', () => {
    const initialState = {
      pokemons: [],
      pokemon: null,
      loading: true,
      error: null,
    };

    const action = {
      type: 'SET_LOADING',
      payload: false,
    };

    const newState = pokemonReducer(
      initialState as PokemonContextProps,
      action as Action
    );

    expect(newState).toEqual({
      pokemons: [],
      pokemon: null,
      loading: false,
      error: null,
    });
  });

  it('should return the current state for an unknown action', () => {
    const initialState = {
      pokemons: [],
      pokemon: null,
      loading: true,
      error: null,
    };

    const action = {
      type: 'UNKNOWN_ACTION',
      payload: 'Something',
    };

    const newState = pokemonReducer(
      initialState as PokemonContextProps,
      action as Action
    );

    expect(newState).toEqual(initialState);
  });
});

describe('filterByKeyCallback', () => {
  it('should return true when searchTerm matches the Pokemon name (case-insensitive)', () => {
    const pokemon = {
      name: 'Pikachu',
    };

    const searchTerm = 'piKaChU';

    const result = filterByKeyCallback(pokemon as Pokemons, searchTerm);

    expect(result).toBe(true);
  });

  it('should return false when searchTerm does not match the Pokemon name', () => {
    const pokemon = {
      name: 'Charizard',
    };

    const searchTerm = 'Pikachu';

    const result = filterByKeyCallback(pokemon as Pokemons, searchTerm);

    expect(result).toBe(false);
  });
});
