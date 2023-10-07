import React, { FC, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getter } from '../../utils/localStorageHelpers';
import { filterByKeyCallback } from '../../utils/filterHelper';
import { useFilterState } from '../../contexts/FilterProvider';
import { usePokemonContext } from '../../contexts/PokemonContext';
import { Card } from '../common/card';
import { IMAGES_URL, ROUTES, NAMESPACES } from '../../utils/constants';
import { Grid, GridItem } from '../utils/layout';

const List: FC = () => {
  const {
    getPokemons,
    pokemons,
    favorites,
    setPokemonFavorite,
    removePokemonFavorite,
    dispatch,
  } = usePokemonContext();

  const { pathname } = useLocation();

  const isPokemonsList = pathname === ROUTES.pokemons_list;

  const list = isPokemonsList ? pokemons : favorites;

  const {
    filterState: { searchTerm },
  } = useFilterState();

  useEffect(() => {
    if (isPokemonsList) getPokemons();
  }, []);

  useEffect(() => {
    dispatch({ type: 'SET_FAVORITES', payload: getter(NAMESPACES.favorites) });
  }, [pathname, isPokemonsList]);

  const filteredPokemons = useMemo(
    () => list.filter((pokemon) => filterByKeyCallback(pokemon, searchTerm)),
    [pokemons, searchTerm, favorites, pathname]
  );

  return (
    <Grid>
      {filteredPokemons.map((el) => {
        const isFavorite = favorites.some(
          (favorite) => favorite.name === el.name
        );
        return (
          <GridItem
            key={el.name}
            $xs={12}
            $sm={6}
            $md={6}
            $lg={4}
            $xl={3}
            $xxl={2}
          >
            <Link to={`/pokemon/${el.name}`}>
              <Card.Root>
                <Card.Image src={IMAGES_URL(el.name) || ''} />
                <Card.Label name={el.name} />
                <Card.Favorite
                  pokemon={el}
                  onClick={() => {
                    isFavorite
                      ? removePokemonFavorite(el)
                      : setPokemonFavorite(el);
                  }}
                  isFavorite={isFavorite}
                />
              </Card.Root>
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default List;
