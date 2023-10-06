import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

import { COLORS, BREAKPOINTS } from '../../../utlils/constants';

interface SearchBarProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
  border: 1px solid ${COLORS.medium_gray};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  outline: none;
  min-width: 240px;

  @media (max-width: ${BREAKPOINTS.small}) {
    min-width: 200px;
    max-width: 220px;
  }
  @media (max-width: ${BREAKPOINTS.xsmall}) {
    min-width: 100px;
    max-width: 160px;
  }
`;

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, ...props }) => {
  return (
    <StyledInput
      type='text'
      placeholder='Search pokemon...'
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default SearchBar;
