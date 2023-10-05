import React, { FC } from 'react';
import styled from 'styled-components';

interface LabelProps {
  length: number;
  searchTerm: string;
}

const StyledLabel = styled.span`
  font-size: 0.65rem;
  line-height: 1rem;
  white-space: pre-wrap;
`;

const Label: FC<LabelProps> = ({ length, searchTerm }) => {
  return (
    <StyledLabel>
      {length} pokemons matching <br />
      &ldquo;{searchTerm}&rdquo;
    </StyledLabel>
  );
};

export default Label;
