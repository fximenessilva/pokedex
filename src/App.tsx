import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';

import { Wrapper } from './components/utils';
import { RoutesWrapper } from './routes/Routes';
import { useAppContext } from './contexts/AppContext';
import { ComponentWithDarkMode } from './utils/types';
import { COLORS } from './utils/constants';

export const renderBackground = (props: ComponentWithDarkMode) =>
  props.$isDarkMode ? COLORS.darkest_gray : COLORS.light_gray;

export const renderColor = (props: ComponentWithDarkMode) =>
  props.$isDarkMode ? COLORS.light_gray : COLORS.darkest_gray;

const GlobalStyle = createGlobalStyle<ComponentWithDarkMode>`
  body {
    font-family: 'Press Start 2P', sans-serif;
    background-color: ${renderBackground};
    color: ${renderColor};
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
      <RoutesWrapper data-testid='routes' />
    </>
  );
};
