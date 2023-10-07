import React from 'react';
import { render, act } from '@testing-library/react';
import {
  PokemonProvider,
  usePokemonContext,
  pokemonReducer,
  PokemonContextProps,
  Action,
  initialState,
} from './PokemonContext';
import { FilterProvider } from './FilterProvider';
import '@testing-library/jest-dom/extend-expect';
import { renderHook } from '@testing-library/react-hooks';
import { Pokemons, Pokemon } from '../utils/types';
import * as api from '../services/api';
import { fetchPokemons, fetchPokemonDetail } from '../services/api';

jest.mock('../services/api', () => ({
  ...jest.requireActual('../services/api'),
  fetchPokemons: jest.fn(),
  fetchPokemonDetail: jest.fn(),
}));

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
    expect(result.current.error).toBeNull();
  });
  it('handles error when fetching the list of pokemons', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => usePokemonContext(),
      {
        wrapper: ({ children }) => (
          <FilterProvider>
            <PokemonProvider>{children}</PokemonProvider>
          </FilterProvider>
        ),
      }
    );

    jest
      .spyOn(api, 'fetchPokemons')
      .mockRejectedValue(new Error('Failed to fetch'));

    act(() => {
      result.current.getPokemons();
    });

    await waitForNextUpdate();

    expect(result.current.error).toEqual(new Error('Failed to fetch'));
  });

  it('handles error when fetching the details of a specific pokemon', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => usePokemonContext(),
      {
        wrapper: ({ children }) => (
          <FilterProvider>
            <PokemonProvider>{children}</PokemonProvider>
          </FilterProvider>
        ),
      }
    );

    jest
      .spyOn(api, 'fetchPokemonDetail')
      .mockRejectedValue(new Error('Failed to fetch'));

    act(() => {
      result.current.getPokemon('pikachu');
    });

    await waitForNextUpdate();

    expect(result.current.error).toEqual(new Error('Failed to fetch'));
  });
  it('throws an error when used outside of PokemonProvider', () => {
    const { result } = renderHook(() => usePokemonContext());

    expect(result.error).toEqual(
      new Error('usePokemonContext must be used within a PokemonProvider')
    );
  });
});

describe('usePokemonContext', () => {
  it('should throw an error when used outside of PokemonProvider', () => {
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

    expect(error).toEqual(
      new Error('usePokemonContext must be used within a PokemonProvider')
    );
  });

  it('should not throw an error when used inside PokemonProvider', () => {
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

    expect(error).toBeNull();
  });
});

describe('pokemonReducer', () => {
  it('should handle SET_POKEMONS action correctly', () => {
    const initialState = {
      pokemons: [],
      pokemon: null,
      error: null,
    };

    const action = {
      type: 'SET_POKEMONS',
      payload: [{ name: 'Pikachu' }, { name: 'Charizard' }],
    };

    const newState = pokemonReducer(
      initialState as PokemonContextProps,
      action as Action
    );

    expect(newState).toEqual({
      pokemons: action.payload,
      pokemon: null,
      error: null,
    });
  });

  it('should handle SET_POKEMON action correctly', () => {
    const initialState = {
      pokemons: [],
      pokemon: null,
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
      error: null,
    });
  });

  it('should handle SET_ERROR action correctly', () => {
    const initialState = {
      pokemons: [],
      pokemon: null,
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
      error: action.payload,
    });
  });

  it('should return the current state for an unknown action', () => {
    const initialState = {
      pokemons: [],
      pokemon: null,
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

describe('initialState', () => {
  it('should have the correct initial values', () => {
    expect(initialState.pokemons).toEqual([]);
    expect(initialState.pokemon).toBeNull();
    expect(initialState.error).toBeNull();
    expect(typeof initialState.dispatch).toBe('function');
    expect(typeof initialState.getPokemons).toBe('function');
    expect(typeof initialState.getPokemon).toBe('function');
  });
});
