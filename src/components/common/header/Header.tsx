import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useAppContext } from '../../../contexts/AppContext';
import { useFilterState } from '../../../contexts/FilterProvider';
import { usePokemonContext } from '../../../contexts/PokemonContext';
import { LOGO_URL, COLORS, ROUTES } from '../../../utlils/constants';
import { ComponentWithDarkMode } from '../../../utlils/types';
import { Input } from '../../common/searchBar';
import { ToggleButton } from '../toggle';
import useScrollDir from '../../../hooks/useScrollDir';

interface StyledHeaderProps extends ComponentWithDarkMode {
  $scrollDir?: string | null;
}

const Image = styled.img`
  max-width: 10rem;
  height: auto;
`;

const StyledHeader = styled.header<StyledHeaderProps>`
  display: flex;
  justify-content: space-between;
  padding: 1.75rem 2rem;
  background-color: ${(props) =>
    props.$isDarkMode ? COLORS.darkest_gray : COLORS.light_gray};
  position: fixed;
  top: ${(props) => (props.$scrollDir === 'down' ? '-180px' : '0')};
  transition: 0.3s;
  width: calc(100% - 4rem);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ToggleContainer = styled.div`
  margin-left: auto;
`;

const Header = () => {
  const { state, toggleDarkMode } = useAppContext();
  const { filterState, setSearchTerm } = useFilterState();
  const { pokemons } = usePokemonContext();
  const scrollDirection = useScrollDir();

  return (
    <StyledHeader $isDarkMode={state.isDarkMode} $scrollDir={scrollDirection}>
      <Image alt='pokemon logo' src={LOGO_URL} />
      {true && (
        <SearchContainer>
          <ToggleContainer>
            <ToggleButton
              onClick={toggleDarkMode}
              defaultValue={state.isDarkMode}
            />
          </ToggleContainer>

          <Input.Root>
            <Input.Search
              value={filterState.searchTerm}
              onChange={setSearchTerm}
            />
            {filterState.searchTerm && (
              <Input.Label
                searchTerm={filterState.searchTerm}
                length={pokemons.length}
              />
            )}
          </Input.Root>
        </SearchContainer>
      )}
    </StyledHeader>
  );
};

export default Header;
