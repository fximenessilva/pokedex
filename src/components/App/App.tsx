import { FC } from 'react';

import { Wrapper } from '../utils';
import { Routes } from '../../routes/Routes';

import '../../styles/app.css';

export const App: FC = () => {
  return (
    <Wrapper>
      <h1>Hello world!</h1>
      <Routes />
    </Wrapper>
  );
};
