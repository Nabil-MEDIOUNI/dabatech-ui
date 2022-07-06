/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { useEffect } from 'react';

// UI lib components
import { Typography } from '@material-ui/core';

// Helpers & utils
import { clearToken } from '../../apollo/helpers/HandleToken';

/* -------------------------------------------------------------------------- */
/*                                  Logout Page                               */
/* -------------------------------------------------------------------------- */
const Logout = () => {
  /* ********************************** HOOKS ********************************* */
  useEffect(() => {
    clearToken();
  }, []);

  /* ******************************** RENDERING ******************************* */
  return <Typography>redirecting...</Typography>;
};

export default Logout;
