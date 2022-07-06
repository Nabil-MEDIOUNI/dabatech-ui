/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// UI lib components
import { Box, Button, Typography } from '@material-ui/core';

// UI lib icons
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

// UI local components
import SpecialLogin from '../../../components/_common/SpecialLogin';
import CreatedBy from '../../../components/_common/CreatedBy';
import InvertColors from '../../../components/_common/InvertColors';
import Slogan from '../../../components/_common/Slogan';
import DevchallengesImage from '../../../components/_common/DevchallengesImage';

// Helpers & utils
import { setTokenWithExpiry } from '../../../apollo/helpers/HandleToken';
import {
  LOGIN,
  SPECIAL_LOGIN,
} from '../../../apollo/mutations/authentification';
import { handleMany } from '../../../utils/handle';
import Alert from '../../../utils/alert';

// Styles
import './index.css';

/* -------------------------------------------------------------------------- */
/*                                   Login Page                               */
/* -------------------------------------------------------------------------- */
function Login() {
  /* ********************************** HOOKS ********************************* */
  const [openAlert, setAlert] = useState(false);
  const [revertColors, setRevertColors] = useState(false);
  const [error, setError] = useState({ message: undefined });
  const [person, setPerson] = useState({
    email: '',
    password: '',
  });

  /* ******************************** CALLBACKS ******************************* */
  const onSubmitLogin = (e) => {
    e.preventDefault();
    LOGIN({ ...person }).then((token) => {
      if (token.error) {
        setError({
          message: `Graphql error: ${token.error}`,
        });
        setAlert(true);
      } else {
        setError('');
        setAlert(true);
        setTokenWithExpiry(token);
        window.location.href = '/';
      }
    });
  };

  const onSpecialLoginSubmit = (response) => {
    SPECIAL_LOGIN({
      email: response?.profileObj.email,
    }).then(async (token) => {
      if (token.error) {
        setError({
          message: `Graphql error: ${token.error}`,
        });
        setAlert(true);
      } else {
        setError('');
        setAlert(true);
        setTokenWithExpiry(token);
        window.location.href = '/';
      }
    });
  };

  const getElementClassName = (className) => {
    if (revertColors) {
      return `black_${className}`;
    }
    return '';
  };

  /* ******************************** RENDERING ******************************* */
  return (
    <Box className={`login-page ${getElementClassName('login-page')}`}>
      <Box className="login-box-container">
        <Box className="login-container-content">
          <DevchallengesImage revertColors={revertColors} />
          <Typography className="join-learners">Login</Typography>
          <form onSubmit={onSubmitLogin}>
            <Box className="input-field-box email-input-field-box">
              <EmailIcon
                className={`input-icon ${getElementClassName('input-icon')}`}
              />
              <input
                className={`input-field ${getElementClassName('input-field')}`}
                type="email"
                placeholder="Email"
                onChange={handleMany(person, setPerson, 'email')}
                required
              />
            </Box>
            <Box className="input-field-box">
              <LockIcon
                className={`input-icon ${getElementClassName('input-icon')}`}
              />
              <input
                className={`input-field ${getElementClassName('input-field')}`}
                type="password"
                placeholder="Password"
                onChange={handleMany(person, setPerson, 'password')}
                required
              />
            </Box>
            <Button className="submit-btn" type="submit">
              Login
            </Button>
          </form>
          <Link className="forget_password" to="/forgot-password">
            Forgot your password?
          </Link>
          <Typography className="continue-with-social">
            or continue with these social profile
          </Typography>
          <SpecialLogin
            onLoginSubmit={onSpecialLoginSubmit}
            revertColors={revertColors}
          />
          <Typography className="already-a-member">
            Don’t have an account yet?
            <Link to="/register"> Register</Link>
          </Typography>
        </Box>
        <CreatedBy />
      </Box>
      <Slogan />
      {Alert(
        error,
        openAlert,
        () => setAlert(false),
        "You've logged in successfully!",
      )}
      <InvertColors
        revertColors={revertColors}
        setRevertColors={setRevertColors}
        getElementClassName={getElementClassName}
      />
    </Box>
  );
}

export default Login;
