import { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { About } from '../components/list/List';

export const Routes: FC = () => {
  return (
    <Router>
      <Route exact path='/about'>
        <About />
      </Route>
    </Router>
  );
};
