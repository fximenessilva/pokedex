import React, { useEffect, FC } from 'react';
import { RouteComponentProps, useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import {
  DetailLayout,
  StyledSpec,
  StyledTitle,
  StyledList,
  StyledListItem,
  StyledImage,
  Container,
  StyledLink,
} from '../../components/utils/layout';
import { usePokemonContext } from '../../contexts/PokemonContext';
import { IMAGES_URL, ROUTES } from '../../utils/constants';

export type DetailProps = RouteComponentProps<{ pokemonId: string }>;

export const Detail: FC<DetailProps> = (props) => {
  const { pokemon, getPokemon } = usePokemonContext();
  const { pokemonId } = props.match.params;
  const { pathname } = useLocation();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    getPokemon(pokemonId);
  }, []);

  return (
    <Container>
      <StyledLink onClick={goBack}>{'<- go back'}</StyledLink>
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
    </Container>
  );
};
