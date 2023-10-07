import { Pokemons } from './types';

export const filterByKeyCallback = (pokemon: Pokemons, searchTerm: string) => {
  if (searchTerm === '') {
    return pokemon;
  } else {
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
  }
};
