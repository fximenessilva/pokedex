import React from 'react';
import styled from 'styled-components';

import { COLORS, BREAKPOINTS } from '../../../utlils/constants';

interface DetailLayoutProps {
  children: React.ReactNode;
}

const DetailLayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 140px auto;
  padding: 3rem;
  border: 1px solid ${COLORS.medium_gray};
  border-radius: 0.5rem;

  @media (max-width: ${BREAKPOINTS.small}) {
    padding: 1.5rem;
  }
`;

const DetailLayoutContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.h1`
  font-size: 2rem;

  @media (max-width: ${BREAKPOINTS.small}) {
    font-size: 1.35rem;
  }
`;

export const StyledSpec = styled.span`
  font-size: 0.75rem;
  margin: 0.5rem 0;

  @media (max-width: ${BREAKPOINTS.small}) {
    font-size: 0.65rem;
  }
`;

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0.5rem 0;
`;

export const StyledListItem = styled.li`
  font-size: 0.75rem;
  padding: 0 0 0 1rem;
  margin: 0.35rem 0;
  @media (max-width: ${BREAKPOINTS.small}) {
    font-size: 0.65rem;
  }
`;

export const StyledImage = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 60%;
  margin: 0 auto;

  @media (max-width: ${BREAKPOINTS.small}) {
    width: 50%;
  }
`;
const DetailLayout: React.FC<DetailLayoutProps> = ({ children }) => {
  return (
    <DetailLayoutWrapper>
      <DetailLayoutContent>{children}</DetailLayoutContent>
    </DetailLayoutWrapper>
  );
};

export default DetailLayout;
