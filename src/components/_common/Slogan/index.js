/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Pakcages
import React from 'react';

// UI lib components
import { Box, Typography } from '@material-ui/core';

// Styles
import './index.css';

/* -------------------------------------------------------------------------- */
/*                                   Slogan Page                              */
/* -------------------------------------------------------------------------- */
function Slogan() {
  /* ******************************** RENDERING ******************************* */
  return (
    <Box className="slogan">
      <a
        href="https://www.linkedin.com/in/nabil-mediouni-175a341a5/"
        target="_blank"
        rel="noreferrer"
      >
        Nabil MEDIOUNI
      </a>
      <Typography>devChallenges.io</Typography>
    </Box>
  );
}

export default Slogan;
