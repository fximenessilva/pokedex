import { filterByKeyCallback } from './filterHelper';

describe('filterHelper', () => {
  it('should return the pokemon object when searchTerm is an empty string', () => {
    const pokemon = {
      name: 'Pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon/25',
    };
    const searchTerm = '';
    const result = filterByKeyCallback(pokemon, searchTerm);
    expect(result).toEqual(pokemon);
  });
  it('should return true when pokemon name includes the searchTerm, case insensitive', () => {
    const pokemon = {
      name: 'Pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon/25',
    };
    const searchTerm = 'ika';
    const result = filterByKeyCallback(pokemon, searchTerm);
    expect(result).toBe(true);
  });
  it('should return false when pokemon name does not include the searchTerm, case insensitive', () => {
    const pokemon = {
      name: 'Pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon/25',
    };
    const searchTerm = 'char';
    const result = filterByKeyCallback(pokemon, searchTerm);
    expect(result).toBe(false);
  });
});
