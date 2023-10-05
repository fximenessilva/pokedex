import React, { FC } from 'react';

interface LabelProps {
  length: number;
  searchTerm: string;
}

const Label: FC<LabelProps> = ({ length, searchTerm }) => {
  return (
    <span>
      {length} pokemons matching {searchTerm}
    </span>
  );
};

export default Label;
