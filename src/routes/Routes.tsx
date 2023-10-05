import { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotFound } from '../components/utils';

import { CenteredWrapper } from '../components/utils/layout';
import { Home } from '../components/home';
import { List } from '../components/list/List';
import { Detail } from '../components/detail/Detail';
import { useAppContext } from '../contexts/AppContext';
import { ROUTES } from '../utlils/constants';

export const Routes: FC = () => {
  const { state } = useAppContext();
  return (
    <CenteredWrapper $isDarkMode={state.isDarkMode}>
      <Router>
        <Switch>
          <Route exact path={ROUTES.homepage} component={Home} />
          <Route exact path={ROUTES.pokemons_list} component={List} />
          <Route path={ROUTES.pokemon_detail} component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </CenteredWrapper>
  );
};
