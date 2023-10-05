import React, { ReactNode, FC } from 'react';

import { AppProvider } from '../../contexts/AppContext';
import { PokemonProvider } from '../../contexts/PokemonContext';
import { FilterProvider } from '../../contexts/FilterProvider';
import ErrorBoundary from './ErrorBoundary';

type WrapperProps = {
  children: ReactNode;
};

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <ErrorBoundary>
      <AppProvider>
        <FilterProvider>
          <PokemonProvider>{children}</PokemonProvider>
        </FilterProvider>
      </AppProvider>
    </ErrorBoundary>
  );
};

export default Wrapper;
