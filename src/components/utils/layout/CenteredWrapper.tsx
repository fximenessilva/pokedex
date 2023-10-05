import React from 'react';
import styled from 'styled-components';

import { ComponentWithDarkMode } from '../../../utlils/types';

const CenteredWrapper = styled.div<ComponentWithDarkMode>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: calc(100% - 4rem);
  padding: 2rem;
  // background-color: ${(props) =>
    props.$isDarkMode ? '#424B54' : '#E5ECF3'};
`;

export default CenteredWrapper;
