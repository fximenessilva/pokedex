import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 280px;
`;
const Root: FC<PropsWithChildren<{}>> = ({ children }) => (
  <StyledRoot>{children}</StyledRoot>
);

export default Root;
