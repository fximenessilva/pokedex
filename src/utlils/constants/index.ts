const BASE_URL = 'https://pokeapi.co/api/v2';

const API_ENDPOINTS = {
  pokemons_list: BASE_URL + '/pokemon?limit=151',
  pokemon_detail: (name: string) => `${BASE_URL}/pokemon/${name}`,
} as const;

export { API_ENDPOINTS, BASE_URL };
