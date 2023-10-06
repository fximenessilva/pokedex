import { fetchPokemons, fetchPokemonDetail } from './index';
import { API_ENDPOINTS } from '../../utlils/constants';

// Create a mock implementation for the fetch function
const mockFetch = jest.fn();

// Mock the global fetch function to use the mock implementation
global.fetch = mockFetch;

describe('fetchPokemons', () => {
  it('fetches a list of pokemons', async () => {
    const mockResponse = [{ name: 'Pikachu' }, { name: 'Charmander' }];
    const jsonResponse = Promise.resolve({ json: () => mockResponse });

    // Set up the mock implementation to return the expected response
    mockFetch.mockResolvedValue(jsonResponse);

    const result = await fetchPokemons();

    // Ensure that the API was called with the correct endpoint
    expect(mockFetch).toHaveBeenCalledWith(API_ENDPOINTS.pokemons_list);

    // Ensure that the function returns the expected data
    expect(result).toEqual(mockResponse);
  });

  it('handles errors gracefully', async () => {
    const mockError = new Error('API Error');

    // Set up the mock implementation to throw an error
    mockFetch.mockRejectedValue(mockError);

    const result = await fetchPokemons();

    // Ensure that the API was called with the correct endpoint
    expect(mockFetch).toHaveBeenCalledWith(API_ENDPOINTS.pokemons_list);

    // Ensure that the function returns the error object
    expect(result).toEqual(mockError);
  });
});

describe('fetchPokemonDetail', () => {
  it('fetches details for a specific pokemon', async () => {
    const pokemonName = 'Pikachu';
    const mockResponse = { name: 'Pikachu', type: 'Electric' };
    const jsonResponse = Promise.resolve({ json: () => mockResponse });

    // Set up the mock implementation to return the expected response
    mockFetch.mockResolvedValue(jsonResponse);

    const result = await fetchPokemonDetail(pokemonName);

    // Ensure that the API was called with the correct endpoint
    expect(mockFetch).toHaveBeenCalledWith(
      API_ENDPOINTS.pokemon_detail(pokemonName)
    );

    // Ensure that the function returns the expected data
    expect(result).toEqual(mockResponse);
  });

  it('handles errors gracefully', async () => {
    const pokemonName = 'Pikachu';
    const mockError = new Error('API Error');

    // Set up the mock implementation to throw an error
    mockFetch.mockRejectedValue(mockError);

    const result = await fetchPokemonDetail(pokemonName);

    // Ensure that the API was called with the correct endpoint
    expect(mockFetch).toHaveBeenCalledWith(
      API_ENDPOINTS.pokemon_detail(pokemonName)
    );

    // Ensure that the function returns the error object
    expect(result).toEqual(mockError);
  });
});
