/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { ThemeProvider } from '@material-ui/core/styles';

import App from './pages/_app';
import theme from './utils/theme';
import client from './apollo/initApollo';
import { UserInfoContextWrapper } from './components/UserInfoContextWrapper';

/* ******************************** RENDERING ******************************* */
ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <ThemeProvider theme={theme}>
        <UserInfoContextWrapper>
          <App />
        </UserInfoContextWrapper>
      </ThemeProvider>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('app'),
);

/* eslint-disable no-console */
window.addEventListener('load', () => {
  navigator.serviceWorker
    .register('./serviceworker.js')
    .then((reg) => console.log('Success: ', reg.scope))
    .catch((err) => console.log('Failure: ', err));
});
