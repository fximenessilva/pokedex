import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import { useAppContext } from '../../../contexts/AppContext';
import { useFilterState } from '../../../contexts/FilterProvider';
import { usePokemonContext } from '../../../contexts/PokemonContext';
import {
  LOGO_URL,
  COLORS,
  ROUTES,
  BREAKPOINTS,
} from '../../../utlils/constants';
import { ComponentWithDarkMode } from '../../../utlils/types';
import { Input } from '../../common/searchBar';
import { ToggleButton } from '../toggle';
import useScrollDir from '../../../hooks/useScrollDir';
import { ScrollProgressBar } from '../../utils/layout';

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

  @media (max-width: ${BREAKPOINTS.small}) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: ${BREAKPOINTS.small}) {
    flex-direction: row-reverse;
    gap: 2rem;
  }
  @media (max-width: ${BREAKPOINTS.xsmall}) {
    gap: 0.75rem;
  }
`;

const ToggleContainer = styled.div`
  margin-left: auto;
`;

const Header = () => {
  const { state, toggleDarkMode } = useAppContext();
  const { filterState, setSearchTerm } = useFilterState();
  const { pokemons } = usePokemonContext();
  const { pathname } = useLocation();
  const scrollDirection = useScrollDir();

  const isListPage = pathname === ROUTES.pokemons_list;

  return (
    <>
      <StyledHeader $isDarkMode={state.isDarkMode} $scrollDir={scrollDirection}>
        <Link to='/'>
          <Image alt='pokemon logo' src={LOGO_URL} />
        </Link>
        <SearchContainer>
          <ToggleContainer>
            <ToggleButton
              onClick={toggleDarkMode}
              defaultValue={state.isDarkMode}
            />
          </ToggleContainer>

          {isListPage && (
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
          )}
        </SearchContainer>
      </StyledHeader>
      {isListPage && <ScrollProgressBar isDarkMode={state.isDarkMode} />}
    </>
  );
};

export default Header;
