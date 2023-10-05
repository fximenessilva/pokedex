import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Grid, GridItem } from '../../components/utils/layout';
import { Card } from '../../components/common/card';
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

  console.log(pokemon);

  if (loading) return <Loading />;

  return (
    <Grid>
      <Card.Root>
        <Card.Image src={IMAGES_URL(pokemon?.name) || ''} />
        <Card.Label name={pokemon?.name || ''} />
      </Card.Root>
    </Grid>
  );
};
