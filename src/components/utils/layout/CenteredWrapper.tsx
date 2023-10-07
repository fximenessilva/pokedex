import React from 'react';
import styled from 'styled-components';

import { ComponentWithDarkMode } from '../../../utils/types';

const CenteredWrapper = styled.div<ComponentWithDarkMode>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 4rem);
  padding: 2rem;
`;

export default CenteredWrapper;
