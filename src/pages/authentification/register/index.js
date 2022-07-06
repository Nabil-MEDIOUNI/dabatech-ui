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
import Slogan from '../../../components/_common/Slogan';
import InvertColors from '../../../components/_common/InvertColors';
import DevchallengesImage from '../../../components/_common/DevchallengesImage';

// Helpers & utils
import { REGISTER } from '../../../apollo/mutations/authentification';
import { handleMany } from '../../../utils/handle';
import Alert from '../../../utils/alert';

// Styles
import './index.css';

/* -------------------------------------------------------------------------- */
/*                                 Register Page                              */
/* -------------------------------------------------------------------------- */
function Register() {
  /* ********************************** HOOKS ********************************* */
  const [openAlert, setAlert] = useState(false);
  const [revertColors, setRevertColors] = useState(false);
  const [error, setError] = useState({ message: undefined });
  const [person, setPerson] = useState({
    email: '',
    password: '',
  });

  /* ******************************** CALLBACKS ******************************* */
  const onSubmitRegister = (e) => {
    e.preventDefault();
    REGISTER({ ...person }).then((token) => {
      if (token.error) {
        setError({
          message: `Graphql error: ${token.error}`,
        });
        setAlert(true);
      } else {
        setError('');
        setAlert(true);
        localStorage.setItem('validation', JSON.stringify(token.validation));
      }
    });
  };

  const onSpecialRegisterSubmit = (response) => {
    REGISTER({ email: response?.profileObj.email }).then((token) => {
      if (token.error) {
        setError({
          message: `Graphql error: ${token.error}`,
        });
        setAlert(true);
      } else {
        setError('');
        setAlert(true);
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
    <Box className={`register-page ${getElementClassName('register-page')}`}>
      <Box className="register-box-container">
        <Box className="register-container-content">
          <DevchallengesImage revertColors={revertColors} />
          <Typography className="join-learners">
            Join thousands of learners from around the world
          </Typography>
          <Typography className="master-web">
            Master web development by making real-life projects. There are
            multiple paths for you to choose
          </Typography>
          <form onSubmit={onSubmitRegister}>
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
              Start coding now
            </Button>
          </form>
          <Typography className="continue-with-social">
            or continue with these social profile
          </Typography>
          <SpecialLogin
            onRegisterSubmit={onSpecialRegisterSubmit}
            revertColors={revertColors}
          />
          <Typography className="already-a-member">
            Adready a member?
            <Link to="/login"> Login</Link>
          </Typography>
        </Box>
        <CreatedBy />
      </Box>
      <Slogan />
      {Alert(
        error,
        openAlert,
        () => setAlert(false),
        'Registration Successful, Please Check Email Inbox or Spam!',
      )}
      <InvertColors
        revertColors={revertColors}
        setRevertColors={setRevertColors}
        getElementClassName={getElementClassName}
      />
    </Box>
  );
}

export default Register;
