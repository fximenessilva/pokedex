import { FC } from 'react';

import { Wrapper } from '../utils';
import { Routes } from '../../routes/Routes';
import { Header } from '../../components/common/header';

export const App: FC = () => {
  return (
    <Wrapper>
      <Header />
      <Routes />
    </Wrapper>
  );
};
