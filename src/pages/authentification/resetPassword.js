/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// UI lib components
import { Box, Button, Typography } from '@material-ui/core';

// UI lib icons
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

// UI local components
import Alert from '../../utils/alert';
import CreatedBy from '../../components/_common/CreatedBy';
import Slogan from '../../components/_common/Slogan';
import DevchallengesImage from '../../components/_common/DevchallengesImage';
import InvertColors from '../../components/_common/InvertColors';

// Helpers & utils
import { CHANGE_PASSWORD } from '../../apollo/mutations/authentification';

// Styles
import './login/index.css';

/* -------------------------------------------------------------------------- */
/*                              Reset Password Page                           */
/* -------------------------------------------------------------------------- */
const ResetPassword = ({ match }) => {
  /* ********************************** HOOKS ********************************* */
  const [password, setPassword] = useState(false);
  const [revertColors, setRevertColors] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [email, setEmail] = useState(false);

  const [matchError, setMatchError] = useState({ message: undefined });
  const [openAlert, setAlert] = useState(false);
  const [error, setError] = useState({ message: undefined });

  /* ******************************** CALLBACKS ******************************* */
  const onSubmitReset = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMatchError({ message: 'Graphql error: Two passwords do not match!' });
      setAlert(true);
      return false;
    }
    setMatchError('');
    CHANGE_PASSWORD({ email, password, id: match.params.id }).then((res) => {
      if (res.error) {
        setError({
          message: `Graphql error: ${res.error}`,
        });
        setAlert(true);
      } else {
        setError('');
        setAlert(true);
        window.location.href = '/login';
      }
    });
    return '';
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
          <Typography className="join-learners">Reset Password</Typography>
          <form onSubmit={onSubmitReset}>
            <Box className="input-field-box email-input-field-box">
              <EmailIcon
                className={`input-icon ${getElementClassName('input-icon')}`}
              />
              <input
                className={`input-field ${getElementClassName('input-field')}`}
                type="email"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
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
                placeholder="New password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Box>
            <Box className="input-field-box" mt={2}>
              <LockIcon
                className={`input-icon ${getElementClassName('input-icon')}`}
              />
              <input
                className={`input-field ${getElementClassName('input-field')}`}
                type="password"
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Box>
            <Button className="submit-btn" type="submit">
              Reset Password
            </Button>
          </form>
        </Box>
        <CreatedBy />
      </Box>
      <Slogan />
      {Alert(
        matchError || error,
        openAlert,
        () => setAlert(false),
        'Password changed successfully!',
      )}
      <InvertColors
        revertColors={revertColors}
        setRevertColors={setRevertColors}
        getElementClassName={getElementClassName}
      />
    </Box>
  );
};

ResetPassword.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ResetPassword;
