/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// UI local components
import LoginPage from './authentification/login';
import LogoutPage from './authentification/logout';
import RegisterPage from './authentification/register';
import UserValidationPage from './authentification/account_validation';
import ForgotPasswordPage from './authentification/forgotPassword';
import ResetPasswordPage from './authentification/resetPassword';

import HomePage from './home';
import ProfilePage from './profile';

import PageNotFound from './404';

// Helpers & utils
import LoginRoute from '../utils/route/LoginRoute';
import PrivateRoute from '../utils/route/PrivateRoute';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */
const App = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute path="/" exact component={HomePage} />
      <PrivateRoute path="/profile" exact component={ProfilePage} />
      <LoginRoute path="/register" exact component={RegisterPage} />
      <LoginRoute path="/login" exact component={LoginPage} />
      <Route
        path="/validate/:validationId"
        exact
        component={UserValidationPage}
      />
      <LoginRoute path="/reset/:id" exact component={ResetPasswordPage} />
      <LoginRoute path="/forgot-password" component={ForgotPasswordPage} />
      <Route path="/logout" exact component={LogoutPage} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
