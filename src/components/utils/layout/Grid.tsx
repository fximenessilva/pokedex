import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS } from '../../../utlils/constants';

const calculateColumnWidth = (columns: number) => {
  return `${(columns / 12) * 100}%`;
};

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

export const GridItem = styled.div<{ $columns: number }>`
  flex: 0 0 ${({ $columns }) => calculateColumnWidth($columns)};
  max-width: ${({ $columns }) => calculateColumnWidth($columns)};
  padding: 15px;
  box-sizing: border-box;

  @media (max-width: ${BREAKPOINTS.small}) {
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: ${BREAKPOINTS.medium}) {
    @media (max-width: ${BREAKPOINTS.large}) {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }

  @media (min-width: ${BREAKPOINTS.large}) {
    @media (max-width: ${BREAKPOINTS.xlarge}) {
      flex: 0 0 33.3333%;
      max-width: 33.3333%;
    }
  }
`;

export const Grid: React.FC = ({ children }) => {
  return <GridContainer>{children}</GridContainer>;
};
