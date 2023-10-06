import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';

import { Wrapper } from '../utils';
import { Routes } from '../../routes/Routes';
import { useAppContext } from '../../contexts/AppContext';
import { ComponentWithDarkMode } from '../../utlils/types';
import { COLORS } from '../../utlils/constants';

const GlobalStyle = createGlobalStyle<ComponentWithDarkMode>`
  body {
    font-family: 'Press Start 2P', sans-serif;
    background-color: ${(props) =>
      props.$isDarkMode ? COLORS.darkest_gray : COLORS.light_gray};
    color: ${(props) =>
      props.$isDarkMode ? COLORS.light_gray : COLORS.darkest_gray};
  }
  a {
    text-decoration: none;
  }
`;

export const AppWrapper: FC = () => {
  return (
    <Wrapper>
      <App />
    </Wrapper>
  );
};

export const App = () => {
  const { state } = useAppContext();
  return (
    <>
      <GlobalStyle $isDarkMode={state.isDarkMode} />
      <Routes data-testid='routes' />
    </>
  );
};
