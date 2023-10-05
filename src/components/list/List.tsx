import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { usePokemonContext } from '../../contexts/PokemonContext';
import { Loading } from '../../components/common/loading';
import { Card } from '../../components/common/card';
import { IMAGES_URL } from '../../utlils/constants';
import { Grid, GridItem } from '../../components/utils/layout';

export const List: FC = () => {
  const { getPokemons, pokemons, loading } = usePokemonContext();

  useEffect(() => {
    getPokemons();
  }, []);

  if (loading) return <Loading />;

  return (
    <Grid>
      {pokemons.map((el) => (
        <GridItem key={el.name} $columns={4}>
          <Link to={`/pokemon/${el.name}`}>
            <Card.Root>
              <Card.Image src={IMAGES_URL(el.name)} />
              <Card.Label name={el.name} />
            </Card.Root>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
