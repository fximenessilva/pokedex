const BASE_URL = 'https://pokeapi.co/api/v2';

const API_ENDPOINTS = {
  pokemons_list: BASE_URL + '/pokemon?limit=151',
  pokemon_detail: (name: string) => `${BASE_URL}/pokemon/${name}`,
} as const;

const IMAGES_URL = (name: string) =>
  `https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`;

const LOGO_URL =
  'https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg';

const BREAKPOINTS = {
  small: '576px',
  medium: '768px',
  large: '992px',
  xlarge: '1200px',
} as const;

const NAMESPACES = {
  theme: 'pokedex-theme-dark',
} as const;

const COLORS = {
  yellow: '#FFD700',
  light_gray: '#F5F5F5',
  lighter_gray: '#E0E0E0',
  medium_gray: '#CCCCCC',
  dark_gray: '#888888',
  darker_gray: '#666666',
  darkest_gray: '#333333',
  black: '#000000',
  green: '#4CAF50',
} as const;

export {
  API_ENDPOINTS,
  BASE_URL,
  IMAGES_URL,
  LOGO_URL,
  BREAKPOINTS,
  NAMESPACES,
  COLORS,
};
