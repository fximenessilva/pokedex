import React, { ReactNode, FC } from 'react';

import { AppProvider } from '../../contexts/AppContext';
import { PokemonProvider } from '../../contexts/PokemonContext';
import ErrorBoundary from './ErrorBoundary';

type WrapperProps = {
  children: ReactNode;
};

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <ErrorBoundary>
      <AppProvider>
        <PokemonProvider>{children}</PokemonProvider>
      </AppProvider>
    </ErrorBoundary>
  );
};

export default Wrapper;
