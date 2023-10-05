import * as ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import { App } from './components/app/App';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Press Start 2P', cursive;
  }
  a{
    text-decoration: none;
  }
`;
ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
