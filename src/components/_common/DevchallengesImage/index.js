/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './index.css';

/* -------------------------------------------------------------------------- */
/*                         DevchallengesImage Component                       */
/* -------------------------------------------------------------------------- */
function DevchallengesImage({ revertColors }) {
  /* ********************************** HOOKS ********************************* */
  /* ***************************** RENDER HELPERS ***************************** */
  function getDevchallengesImage() {
    if (revertColors) {
      return (
        <img
          className="devchallenges-img"
          src="/static/icons/devchallenges_white.png"
          alt=""
        />
      );
    }
    return (
      <img
        className="devchallenges-img"
        src="/static/icons/devchallenges_black.png"
        alt=""
      />
    );
  }

  /* ******************************** RENDERING ******************************* */
  return getDevchallengesImage();
}

DevchallengesImage.propTypes = {
  revertColors: PropTypes.bool.isRequired,
};

export default DevchallengesImage;
