import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

import { useAppContext } from '../../../contexts/AppContext';
import { ComponentWithDarkMode } from '../../../utlils/types';
import { COLORS } from '../../../utlils/constants';

export const renderBackground = (props: { $isDarkMode: boolean }) =>
  props.$isDarkMode ? COLORS.light_gray : COLORS.medium_gray;

const StyledRoot = styled.div<ComponentWithDarkMode>`
  border: 1px solid #ffd700;
  border-radius: 8px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  --g: 4px;
  --b: 0.25rem;
  --c: #ffd700;
  padding: calc(var(--g) + var(--b));
  --_c: #0000 0 25%, var(--c) 0 50%;
  --_g1: repeating-linear-gradient(90deg, var(--_c)) repeat-x;
  --_g2: repeating-linear-gradient(180deg, var(--_c)) repeat-y;
  background: var(--_g1) var(--_p, 25%) 0, var(--_g2) 0 var(--_p, 125%),
    var(--_g1) var(--_p, 125%) 100%, var(--_g2) 100% var(--_p, 25%);
  background-size: 200% var(--b), var(--b) 200%;
  cursor: pointer;
  filter: grayscale(50%);
  transition: 0.3s;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* Initial box shadow */

  &:hover {
    --_p: 75%;
    filter: grayscale(0%);
    background-color: ${renderBackground};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4); /* Box shadow on hover */
    transition: all 0.3s ease-in-out; /* Smooth transition for box shadow */
  }
`;

const Root: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { state } = useAppContext();
  return <StyledRoot $isDarkMode={state.isDarkMode}>{children}</StyledRoot>;
};

export default Root;
