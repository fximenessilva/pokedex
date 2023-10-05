import { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotFound } from '../components/utils';

import { CenteredWrapper } from '../components/utils/layout';
import { List } from '../components/list/List';
import { Detail } from '../components/detail/Detail';
import { useAppContext } from '../contexts/AppContext';

export const Routes: FC = () => {
  const { state } = useAppContext();
  return (
    <CenteredWrapper $isDarkMode={state.isDarkMode}>
      <Router>
        <Switch>
          <Route exact path='/' component={List} />
          <Route path='/pokemon/:pokemonId' component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </CenteredWrapper>
  );
};
