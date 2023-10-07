import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { Pokemons } from '../../../utils/types';
import { COLORS } from '../../../utils/constants';

interface FavoriteProps {
  pokemon: Pokemons;
  isFavorite?: boolean;
  onClick: () => void;
}

interface StarIconProps {
  $selected: boolean;
}

export const renderColor = (props: { $selected: boolean }) =>
  props.$selected ? COLORS.yellow : COLORS.gray;

const StarIcon = styled.div<StarIconProps>`
  font-size: 24px;
  color: ${renderColor};
  cursor: pointer;
  position: relative;
  top: 30px;
  left: 35%;
`;

const Favorite: FC<FavoriteProps> = ({ pokemon, isFavorite, onClick }) => {
  const [isFavoriteState, setFavoriteState] = useState(isFavorite || false);

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    onClick();
    setFavoriteState(!isFavoriteState);
  };

  return (
    <StarIcon
      data-testid='star-icon'
      onClick={onClickHandler}
      $selected={isFavoriteState}
    >
      &#9733;
    </StarIcon>
  );
};

export default Favorite;
