/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

// Helpers & utils
import { getTokenWithExpiry } from '../../apollo/helpers/HandleToken';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */
const LoginRoute = ({ component: Component, ...rest }) => {
  /* ******************************** RENDERING ******************************* */
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!getTokenWithExpiry()) {
          return <Component {...props} />;
        }
        return <Redirect to={{ pathname: '/' }} />;
      }}
    />
  );
};

LoginRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default LoginRoute;
