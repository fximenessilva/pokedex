import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { usePokemonContext } from '../../contexts/PokemonContext';
import { Loading } from '../../components/common/loading';
import { IMAGES_URL } from '../../utlils/constants';

type DetailProps = RouteComponentProps<{ pokemonId: string }>;

export const Detail: React.FC<DetailProps> = (props) => {
  const { pokemon, loading, getPokemon } = usePokemonContext();
  const { pokemonId } = props.match.params;

  useEffect(() => {
    getPokemon(pokemonId);
  }, []);

  if (loading) return <Loading />;

  return <div>{pokemon?.name}</div>;
};