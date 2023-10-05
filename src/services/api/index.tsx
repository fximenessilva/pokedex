import axios from 'axios';

import { API_ENDPOINTS } from '../../utlils/constants';
import { Pokemon, Pokemons } from '../../utlils/types';

interface PokemonListResponse {
  status: number;
  data: {
    results: Pokemons[];
  };
}

interface PokemonDetailResponse {
  status: number;
  data: Pokemon;
}

export const fetchPokemons = async (): Promise<PokemonListResponse> => {
  try {
    const response = await axios.get(API_ENDPOINTS.pokemons_list);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchPokemonDetail = async (
  name: string
): Promise<PokemonDetailResponse> => {
  try {
    const response = await axios.get(API_ENDPOINTS.pokemon_detail(name));
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
