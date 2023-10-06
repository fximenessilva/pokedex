import React, { createContext, useContext, useMemo, useReducer } from 'react';

import { fetchPokemons, fetchPokemonDetail } from '../services/api';
import { Pokemons, Pokemon } from '../utlils/types';
import { useFilterState } from './FilterProvider';

export type Action =
  | { type: 'SET_POKEMONS'; payload: Pokemons[] }
  | { type: 'SET_POKEMON'; payload: Pokemon }
  | { type: 'SET_ERROR'; payload: any }
  | { type: 'SET_LOADING'; payload: boolean };

export interface PokemonContextProps {
  pokemons: Pokemons[] | [];
  pokemon: Pokemon | null;
  loading: boolean;
  error: string | null;
  dispatch: React.Dispatch<Action>;
  getPokemons: () => Promise<void>;
  getPokemon: (name: string) => Promise<void>;
}

const PokemonContext = createContext<PokemonContextProps | undefined>(
  undefined
);

export const pokemonReducer = (
  state: PokemonContextProps,
  action: Action
): PokemonContextProps => {
  switch (action.type) {
    case 'SET_POKEMONS':
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
      };
    case 'SET_POKEMON':
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};

export const filterByKeyCallback = (pokemon: Pokemons, searchTerm: string) => {
  if (searchTerm === '') {
    return pokemon;
  } else {
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
  }
};

interface PokemonProviderProps {
  children: React.ReactNode;
  value?: any;
}

export const initialState: PokemonContextProps = {
  pokemons: [],
  pokemon: null,
  loading: true,
  error: null,
  dispatch: () => {
    // Placeholder comment
  },
  getPokemons: async () => {
    // Placeholder comment
  },
  getPokemon: async (name) => {
    // Placeholder comment
  },
};

export const PokemonProvider: React.FC<PokemonProviderProps> = ({
  children,
  value = initialState,
}) => {
  const [state, dispatch] = useReducer(pokemonReducer, value);

  const {
    filterState: { searchTerm },
  } = useFilterState();

  const getPokemons = async () => {
    try {
      const response = await fetchPokemons();
      dispatch({ type: 'SET_POKEMONS', payload: response.results });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error });
    }
  };

  const getPokemon = async (name: string) => {
    try {
      const response = await fetchPokemonDetail(name);
      dispatch({ type: 'SET_POKEMON', payload: response });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error });
    }
  };
  const filteredPokemons = useMemo(
    () =>
      state.pokemons.filter((pokemon) =>
        filterByKeyCallback(pokemon, searchTerm)
      ),
    [state.pokemons, searchTerm]
  );

  return (
    <PokemonContext.Provider
      value={{
        pokemons: filteredPokemons,
        pokemon: state.pokemon,
        loading: state.loading,
        error: state.error,
        dispatch,
        getPokemons,
        getPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemonContext must be used within a PokemonProvider');
  }
  return context;
};
