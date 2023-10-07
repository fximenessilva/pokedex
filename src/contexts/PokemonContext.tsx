import React, {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useEffect,
} from 'react';

import { fetchPokemons, fetchPokemonDetail } from '../services/api';
import { Pokemons, Pokemon } from '../utils/types';

import { NAMESPACES } from '../utils/constants';
import { setter, getter } from '../utils/localStorageHelpers';

export type Action =
  | { type: 'SET_POKEMONS'; payload: Pokemons[] }
  | { type: 'SET_POKEMON'; payload: Pokemon }
  | { type: 'SET_ERROR'; payload: any }
  | { type: 'ADD_TO_FAVORITES'; payload: Pokemons }
  | { type: 'REMOVE_FROM_FAVORITES'; payload: Pokemons }
  | { type: 'SET_FAVORITES'; payload: Pokemons[] };

export interface PokemonContextProps {
  pokemons: Pokemons[] | [];
  pokemon: Pokemon | null;
  favorites: Pokemons[] | [];
  error: string | null;
  dispatch: React.Dispatch<Action>;
  getPokemons: () => Promise<void>;
  getPokemon: (name: string) => Promise<void>;
  setPokemonFavorite: (pokemon: Pokemons) => void;
  removePokemonFavorite: (pokemon: Pokemons) => void;
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
      };
    case 'SET_POKEMON':
      return {
        ...state,
        pokemon: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };

    case 'SET_FAVORITES':
      return {
        ...state,
        favorites: action.payload,
      };

    case 'ADD_TO_FAVORITES':
      const newFavorites = [...state.favorites, action.payload];
      setter(NAMESPACES.favorites, newFavorites);
      return { ...state, favorites: newFavorites };
    case 'REMOVE_FROM_FAVORITES':
      const filteredFavorites = state.favorites.filter(
        (item) => item.name !== action.payload.name
      );
      setter(NAMESPACES.favorites, filteredFavorites);
      return { ...state, favorites: filteredFavorites };

    default:
      return state;
  }
};

interface PokemonProviderProps {
  children: React.ReactNode;
  value?: any;
}

export const initialState: PokemonContextProps = {
  pokemons: [],
  favorites: [],
  pokemon: null,
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
  setPokemonFavorite: () => {
    // Placeholder comment
  },
  removePokemonFavorite: () => {
    // Placeholder comment
  },
};

export const PokemonProvider: React.FC<PokemonProviderProps> = ({
  children,
  value = initialState,
}) => {
  const [state, dispatch] = useReducer(pokemonReducer, value);

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

  const setPokemonFavorite = (pokemon: Pokemons) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: pokemon });
  };

  const removePokemonFavorite = (pokemon: Pokemons) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: pokemon });
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons: state.pokemons,
        favorites: state.favorites,
        pokemon: state.pokemon,
        error: state.error,
        dispatch,
        getPokemons,
        getPokemon,
        setPokemonFavorite,
        removePokemonFavorite,
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
