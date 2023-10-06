import {
  API_ENDPOINTS,
  BASE_URL,
  IMAGES_URL,
  LOGO_URL,
  BREAKPOINTS,
  NAMESPACES,
  COLORS,
  ROUTES,
} from './index';

describe('Constants', () => {
  it('should have the correct BASE_URL', () => {
    expect(BASE_URL).toBe('https://pokeapi.co/api/v2');
  });

  it('should have the correct API_ENDPOINTS', () => {
    expect(API_ENDPOINTS.pokemons_list).toBe(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );

    expect(API_ENDPOINTS.pokemon_detail('pikachu')).toBe(
      'https://pokeapi.co/api/v2/pokemon/pikachu'
    );
  });

  it('should have the correct IMAGES_URL', () => {
    expect(IMAGES_URL('pikachu')).toBe(
      'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif'
    );

    expect(IMAGES_URL(undefined)).toBeUndefined();
  });

  it('should have the correct LOGO_URL', () => {
    expect(LOGO_URL).toBe(
      'https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg'
    );
  });

  it('should have the correct BREAKPOINTS', () => {
    expect(BREAKPOINTS.xsmall).toBe('360px');
    expect(BREAKPOINTS.small).toBe('576px');
    expect(BREAKPOINTS.medium).toBe('768px');
    expect(BREAKPOINTS.large).toBe('992px');
    expect(BREAKPOINTS.xlarge).toBe('1200px');
  });

  it('should have the correct NAMESPACES', () => {
    expect(NAMESPACES.theme).toBe('pokedex-theme-dark');
  });

  it('should have the correct COLORS', () => {
    expect(COLORS.yellow).toBe('#FFD700');
    expect(COLORS.light_gray).toBe('#F5F5F5');
    expect(COLORS.lighter_gray).toBe('#E0E0E0');
    expect(COLORS.medium_gray).toBe('#CCCCCC');
    expect(COLORS.dark_gray).toBe('#888888');
    expect(COLORS.darker_gray).toBe('#666666');
    expect(COLORS.darkest_gray).toBe('#333333');
    expect(COLORS.black).toBe('#000000');
    expect(COLORS.green).toBe('#4CAF50');
    expect(COLORS.blue).toBe('#003A70');
  });

  it('should have the correct ROUTES', () => {
    expect(ROUTES.homepage).toBe('/');
    expect(ROUTES.pokemons_list).toBe('/pokemons');
    expect(ROUTES.pokemon_detail).toBe('/pokemon/:pokemonId');
  });
});
