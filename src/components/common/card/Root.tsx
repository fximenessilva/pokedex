import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledRoot = styled.div`
  border: 1px solid grey;
  border-radius: 8px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Root: FC<PropsWithChildren<{}>> = ({ children }) => (
  <StyledRoot>{children}</StyledRoot>
);

export default Root;
