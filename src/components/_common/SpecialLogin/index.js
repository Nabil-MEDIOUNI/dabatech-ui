/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';
import LoginGithub from 'react-login-github';

// UI lib components
import { Box, IconButton } from '@material-ui/core';

// UI lib icons
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

// Styles
import './index.css';

/* -------------------------------------------------------------------------- */
/*                                  SpecialLogin                              */
/* -------------------------------------------------------------------------- */
function SpecialLogin({ onLoginSubmit, onRegisterSubmit, revertColors }) {
  /* ***************************** RENDER HELPERS ***************************** */
  function getGoogleImage() {
    if (revertColors) {
      return (
        <img
          className="social-icon"
          src="/static/icons/google_icon_white.svg"
          alt=""
        />
      );
    }
    return (
      <img className="social-icon" src="/static/icons/google_icon.svg" alt="" />
    );
  }
  /* ******************************** RENDERING ******************************* */
  return (
    <Box className="social-icons">
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        render={(renderProps) => (
          <IconButton onClick={renderProps.onClick}>
            {getGoogleImage()}
          </IconButton>
        )}
        onSuccess={onLoginSubmit || onRegisterSubmit}
        onFailure={onLoginSubmit || onRegisterSubmit}
      />
      <IconButton>
        <FacebookIcon
          className={`social-icon ${revertColors && 'white_social-icon'}`}
        />
      </IconButton>
      <IconButton>
        <TwitterIcon
          className={`social-icon ${revertColors && 'white_social-icon'}`}
          color="white"
        />
      </IconButton>
      <Box className="github_login">
        <LoginGithub
          clientId={process.env.REACT_APP_GITHUB_APP_ID}
          onSuccess={onLoginSubmit || onRegisterSubmit}
          onFailure={onLoginSubmit || onRegisterSubmit}
        >
          <IconButton onClick={onLoginSubmit || onRegisterSubmit}>
            <GitHubIcon
              className={`social-icon ${revertColors && 'white_social-icon'}`}
            />
          </IconButton>
        </LoginGithub>
      </Box>
    </Box>
  );
}

SpecialLogin.propTypes = {
  onLoginSubmit: PropTypes.func,
  onRegisterSubmit: PropTypes.func,
  revertColors: PropTypes.bool.isRequired,
};

SpecialLogin.defaultProps = {
  onLoginSubmit: undefined,
  onRegisterSubmit: undefined,
};

export default SpecialLogin;
