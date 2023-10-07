import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { Pokemons } from '../../../utils/types';
import { COLORS } from '../../../utils/constants';

interface FavoriteProps {
  pokemon: Pokemons;
  isFavorite: boolean;
  onClick: () => void;
}

interface StarIconProps {
  $selected: boolean;
}

const StarIcon = styled.div<StarIconProps>`
  font-size: 24px; /* Adjust the size as needed */
  color: ${(props) => (props.$selected ? COLORS.yellow : COLORS.gray)};
  cursor: pointer;
`;

const Favorite: FC<FavoriteProps> = ({ pokemon, isFavorite, onClick }) => {
  const [isFavoriteState, setFavoriteState] = useState(isFavorite);

  const onClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    onClick();
    setFavoriteState(!isFavoriteState);
  };

  return (
    <StarIcon onClick={onClickHandler} $selected={isFavoriteState}>
      &#9733;
    </StarIcon>
  );
};

export default Favorite;
