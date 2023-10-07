import React, { useMemo } from 'react';
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
} from '../../../utils/constants';
import { ComponentWithDarkMode } from '../../../utils/types';
import { Input } from '../../common/searchBar';
import { ToggleButton } from '../toggle';
import useScrollDir from '../../../hooks/useScrollDir';
import { ScrollProgressBar } from '../../utils/layout';
import { filterByKeyCallback } from '../../../utils/filterHelper';

export const toTop = (props: StyledHeaderProps) =>
  props.$scrollDir === 'down' ? '-180px' : '0';

export const renderBackground = (props: ComponentWithDarkMode) =>
  props.$isDarkMode ? COLORS.darkest_gray : COLORS.light_gray;

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
  background-color: ${renderBackground};
  position: fixed;
  top: ${toTop};
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
  const { pokemons, favorites } = usePokemonContext();
  const { pathname } = useLocation();
  const scrollDirection = useScrollDir();

  const isListPage = ROUTES.pokemons_list === pathname;

  const isFavoritePage = ROUTES.pokemons_favorites === pathname;

  const list = isListPage ? pokemons : isFavoritePage ? favorites : [];

  const filteredPokemons = useMemo(
    () =>
      list.filter((pokemon) =>
        filterByKeyCallback(pokemon, filterState.searchTerm)
      ),
    [pokemons, filterState.searchTerm, favorites, pathname]
  );

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

          {(isListPage || isFavoritePage) && (
            <Input.Root data-testid='input-root'>
              <Input.Search
                value={filterState.searchTerm}
                onChange={setSearchTerm}
              />
              {filterState.searchTerm && (
                <Input.Label
                  searchTerm={filterState.searchTerm}
                  length={filteredPokemons.length}
                />
              )}
            </Input.Root>
          )}
        </SearchContainer>
      </StyledHeader>
      {(isListPage || isFavoritePage) && (
        <ScrollProgressBar
          data-testid='scroll-progress-bar'
          isDarkMode={state.isDarkMode}
        />
      )}
    </>
  );
};

export default Header;
