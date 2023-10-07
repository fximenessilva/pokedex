import { FC } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import { NotFound } from '../components/utils';

import { CenteredWrapper, FavoriteLink } from '../components/utils/layout';
import { Header } from '../components/common/header';
import { Home } from '../components/home';
import List from '../components/list/List';
import { Detail } from '../components/detail/Detail';
import { useAppContext } from '../contexts/AppContext';
import { ROUTES } from '../utils/constants';

export const RoutesWrapper: FC = () => {
  const { state } = useAppContext();
  return (
    <CenteredWrapper $isDarkMode={state.isDarkMode}>
      <Router>
        <Routes />
      </Router>
    </CenteredWrapper>
  );
};

const Routes: FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={ROUTES.homepage} component={Home} />
        <Route exact path={ROUTES.pokemons_list} component={List} />
        <Route exact path={ROUTES.pokemons_favorites} component={List} />
        <Route path={ROUTES.pokemon_detail} component={Detail} />
        <Route component={NotFound} />
      </Switch>
      <FavoriteLink />
    </>
  );
};
