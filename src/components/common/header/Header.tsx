import React from 'react';
import styled from 'styled-components';

import { useAppContext } from '../../../contexts/AppContext';
import { LOGO_URL } from '../../../utlils/constants';
import { ComponentWithDarkMode } from '../../../utlils/types';

const Image = styled.img`
  max-width: 240px;
  height: auto;
`;

const StyledHeader = styled.header<ComponentWithDarkMode>`
  width: calc(100% - 4rem);
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: ${(props) => (props.$isDarkMode ? '#424B54' : '#E5ECF3')};
`;

const Header = () => {
  const { state } = useAppContext();
  return (
    <StyledHeader $isDarkMode={state.isDarkMode}>
      <Image alt='pokemon logo' src={LOGO_URL} />
    </StyledHeader>
  );
};

export default Header;
