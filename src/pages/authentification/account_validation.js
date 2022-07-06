/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { useEffect } from 'react';

// UI lib components
import { Typography } from '@material-ui/core';

// Helpers & utils
import { VALIDATE_USER } from '../../apollo/mutations/authentification';

/* -------------------------------------------------------------------------- */
/*                               User Validation Page                         */
/* -------------------------------------------------------------------------- */
const UserValidation = () => {
  /* ********************************** HOOKS ********************************* */
  useEffect(() => {
    VALIDATE_USER();
    setTimeout(() => {
      window.location.href = '/login';
    }, 4000);
  });

  /* ******************************** RENDERING ******************************* */
  return <Typography>redirecting...</Typography>;
};

export default UserValidation;
