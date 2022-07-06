/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { useState } from 'react';

// UI lib components
import { Box, Button, Typography } from '@material-ui/core';

// UI lib icons
import EmailIcon from '@material-ui/icons/Email';

// UI local components
import Alert from '../../utils/alert';
import CreatedBy from '../../components/_common/CreatedBy';
import Slogan from '../../components/_common/Slogan';
import BackButton from '../../components/_common/BackButton';
import DevchallengesImage from '../../components/_common/DevchallengesImage';
import InvertColors from '../../components/_common/InvertColors';

// Helpers & utils
import { FORGOT_PASSWORD } from '../../apollo/mutations/authentification';
import { handleMany } from '../../utils/handle';

// Styles
import './register/index.css';

const ForgotPassword = () => {
  const [openAlert, setAlert] = useState(false);
  const [revertColors, setRevertColors] = useState(false);
  const [error, setError] = useState({ message: undefined });
  const [request, setRequest] = useState({
    email: '',
  });

  const onSubmitReset = (e) => {
    e.preventDefault();
    FORGOT_PASSWORD({ email: request.email }).then((res) => {
      if (res.error) {
        setError({
          message: `Graphql error: ${res.error}`,
        });
        setAlert(true);
      } else {
        setError('');
        setAlert(true);
        localStorage.setItem('resetEmail', request.email);
      }
    });
  };

  const getElementClassName = (className) => {
    if (revertColors) {
      return `black_${className}`;
    }
    return '';
  };

  return (
    <Box className={`register-page ${getElementClassName('register-page')}`}>
      <Box className="register-box-container">
        <BackButton />
        <Box className="register-container-content">
          <DevchallengesImage revertColors={revertColors} />
          <Typography className="join-learners">Forgot Password ?</Typography>
          <Typography className="master-web">
            We just need your registered email address to send you password
            reset.
          </Typography>
          <form onSubmit={onSubmitReset}>
            <Box className="input-field-box email-input-field-box">
              <EmailIcon
                className={`input-icon ${getElementClassName('input-icon')}`}
              />
              <input
                className={`input-field ${getElementClassName('input-field')}`}
                type="email"
                placeholder="Email"
                onChange={handleMany(request, setRequest, 'email')}
                required
              />
            </Box>
            <Button className="submit-btn" type="submit">
              Send Email
            </Button>
          </form>
        </Box>
        <CreatedBy />
      </Box>
      <Slogan />
      {Alert(
        error,
        openAlert,
        () => setAlert(false),
        'The Email is sent successfully!',
      )}
      <InvertColors
        revertColors={revertColors}
        setRevertColors={setRevertColors}
        getElementClassName={getElementClassName}
      />
    </Box>
  );
};

export default ForgotPassword;
