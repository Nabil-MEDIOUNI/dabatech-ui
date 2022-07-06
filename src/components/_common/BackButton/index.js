/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Pakcages
import React from 'react';
import { Link } from 'react-router-dom';

// UI lib components
import { Typography } from '@material-ui/core';

// UI lib icons
import ArrowBackIosNewIcon from '@material-ui/icons/ArrowBackIos';

// Styles
import './index.css';

/* -------------------------------------------------------------------------- */
/*                                 Back Button Page                           */
/* -------------------------------------------------------------------------- */
function BackButton() {
  /* ********************************** Hooks ********************************* */
  /* ******************************** RENDERING ******************************* */

  return (
    <Link className="back_btn" to="/">
      <ArrowBackIosNewIcon className="back_icon" />
      <Typography className="back_text">Back</Typography>
    </Link>
  );
}

export default BackButton;
