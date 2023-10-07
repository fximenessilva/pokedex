import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { BREAKPOINTS } from '../../../utils/constants';

const calculateWidth = (columns: number) => {
  return (columns / 12) * 100;
};

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 140px -15px 0;
  min-width: calc(100% + 30px);

  @media (max-width: ${BREAKPOINTS.small}) {
    margin: 200px -15px 0;
  }
`;

interface GridItemProps {
  $xs?: number;
  $sm?: number;
  $md?: number;
  $lg?: number;
  $xl?: number;
  $xxl?: number;
  columns?: number;
  children: ReactNode;
}

const getColumnStyles = (props: GridItemProps) => {
  const { $xs, $sm, $md, $lg, $xl, $xxl, columns = 12 } = props;

  return css`
    flex: 0 0 ${calculateWidth(columns)}%;
    max-width: ${calculateWidth(columns)}%;

    @media (max-width: 576px) {
      flex: 0 0 ${calculateWidth($xs || columns)}%;
      max-width: ${calculateWidth($xs || columns)}%;
    }

    @media (min-width: 576px) and (max-width: 768px) {
      flex: 0 0 ${calculateWidth($sm || $xs || columns)}%;
      max-width: ${calculateWidth($sm || $xs || columns)}%;
    }

    @media (min-width: 768px) and (max-width: 992px) {
      flex: 0 0 ${calculateWidth($md || $sm || $xs || columns)}%;
      max-width: ${calculateWidth($md || $sm || $xs || columns)}%;
    }

    @media (min-width: 992px) and (max-width: 1200px) {
      flex: 0 0 ${calculateWidth($lg || $md || $sm || $xs || columns)}%;
      max-width: ${calculateWidth($lg || $md || $sm || $xs || columns)}%;
    }

    @media (min-width: 1200px) and (max-width: 1800px) {
      flex: 0 0 ${calculateWidth($xl || $lg || $md || $sm || $xs || columns)}%;
      max-width: ${calculateWidth($xl || $lg || $md || $sm || $xs || columns)}%;
    }

    @media (min-width: 1800px) {
      flex: 0 0
        ${calculateWidth($xxl || $xl || $lg || $md || $sm || $xs || columns)}%;
      max-width: ${calculateWidth(
        $xxl || $xl || $lg || $md || $sm || $xs || columns
      )}%;
    }
  `;
};

const GridItem = styled.div<GridItemProps>`
  padding: 15px;
  box-sizing: border-box;
  ${getColumnStyles}
`;

const Grid: React.FC = ({ children }) => {
  return <GridContainer>{children}</GridContainer>;
};

export { GridItem, Grid };
