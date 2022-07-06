/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import { Link } from 'react-router-dom';

// UI lib components
import { Box } from '@material-ui/core';

// Styles
import './index.css';

/* -------------------------------------------------------------------------- */
/*                                 Page Not Found                             */
/* -------------------------------------------------------------------------- */
function PageNotFound() {
  /* ******************************** RENDERING ******************************* */
  return (
    <Box className="page-404">
      <Box className="noise" />
      <Box className="overlay" />
      <Box className="terminal">
        <h1>
          An
          <span className="errorcode"> error </span>
          happened
        </h1>
        <p className="output">
          The server you are joining has been haxorized by kvacdoor.
        </p>
        <h3>------------------------------------------------------------</h3>
        <p className="output">
          you are requested to leave this server
          <Link to="/"> s.v.p </Link>
          OR
          <Link to="/">you&apos;ll get cancer.</Link>
        </p>
      </Box>
    </Box>
  );
}

export default PageNotFound;
