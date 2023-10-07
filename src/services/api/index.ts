import { API_ENDPOINTS } from '../../utils/constants';

export const fetchPokemons = async () => {
  try {
    const response = await fetch(API_ENDPOINTS.pokemons_list);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const fetchPokemonDetail = async (name: string) => {
  try {
    const response = await fetch(API_ENDPOINTS.pokemon_detail(name));
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return error;
  }
};
