import React, { useEffect, FC } from 'react';
import { RouteComponentProps, useLocation } from 'react-router-dom';

import {
  DetailLayout,
  StyledSpec,
  StyledTitle,
  StyledList,
  StyledListItem,
  StyledImage,
} from '../../components/utils/layout';
import { usePokemonContext } from '../../contexts/PokemonContext';
import { Loading } from '../../components/common/loading';
import { IMAGES_URL } from '../../utlils/constants';

export type DetailProps = RouteComponentProps<{ pokemonId: string }>;

export const Detail: FC<DetailProps> = (props) => {
  const { pokemon, loading, getPokemon } = usePokemonContext();
  const { pokemonId } = props.match.params;
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    getPokemon(pokemonId);
  }, []);

  if (loading) return <Loading />;

  return (
    <DetailLayout>
      <StyledImage src={IMAGES_URL(pokemon?.name)} />
      <StyledTitle>{pokemon?.name}</StyledTitle>
      <StyledSpec>id: {pokemon?.id}</StyledSpec>
      <StyledList>
        <StyledSpec>type: </StyledSpec>
        {pokemon?.types.map((el) => (
          <StyledListItem key={el.type.name}>* {el.type.name}</StyledListItem>
        ))}
      </StyledList>
      <StyledSpec>height: {pokemon?.height}</StyledSpec>
      <StyledList>
        <StyledSpec>habilities: </StyledSpec>
        {pokemon?.abilities
          .filter((el) => !el.is_hidden)
          .map((el) => (
            <StyledListItem key={el.ability.name}>
              * {el.ability.name}
            </StyledListItem>
          ))}
      </StyledList>
    </DetailLayout>
  );
};
