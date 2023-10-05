import React, { FC } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.h1`
  font-size: 1.5rem;
  color: gray;
`;

interface LabelProps {
  name: string;
}

const Label: FC<LabelProps> = ({ name }) => {
  return <StyledLabel>{name}</StyledLabel>;
};

export default Label;
