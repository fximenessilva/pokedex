import { fetchPokemons, fetchPokemonDetail } from './index';
import { API_ENDPOINTS } from '../../utils/constants';

const mockFetch = jest.fn();

global.fetch = mockFetch;

describe('fetchPokemons', () => {
  it('fetches a list of pokemons', async () => {
    const mockResponse = [{ name: 'Pikachu' }, { name: 'Charmander' }];
    const jsonResponse = Promise.resolve({ json: () => mockResponse });

    mockFetch.mockResolvedValue(jsonResponse);

    const result = await fetchPokemons();

    expect(mockFetch).toHaveBeenCalledWith(API_ENDPOINTS.pokemons_list);

    expect(result).toEqual(mockResponse);
  });

  it('handles errors gracefully', async () => {
    const mockError = new Error('API Error');

    mockFetch.mockRejectedValue(mockError);

    const result = await fetchPokemons();

    expect(mockFetch).toHaveBeenCalledWith(API_ENDPOINTS.pokemons_list);

    expect(result).toEqual(mockError);
  });
});

describe('fetchPokemonDetail', () => {
  it('fetches details for a specific pokemon', async () => {
    const pokemonName = 'Pikachu';
    const mockResponse = { name: 'Pikachu', type: 'Electric' };
    const jsonResponse = Promise.resolve({ json: () => mockResponse });

    mockFetch.mockResolvedValue(jsonResponse);

    const result = await fetchPokemonDetail(pokemonName);

    expect(mockFetch).toHaveBeenCalledWith(
      API_ENDPOINTS.pokemon_detail(pokemonName)
    );

    expect(result).toEqual(mockResponse);
  });

  it('handles errors gracefully', async () => {
    const pokemonName = 'Pikachu';
    const mockError = new Error('API Error');

    mockFetch.mockRejectedValue(mockError);

    const result = await fetchPokemonDetail(pokemonName);

    expect(mockFetch).toHaveBeenCalledWith(
      API_ENDPOINTS.pokemon_detail(pokemonName)
    );

    expect(result).toEqual(mockError);
  });
});
