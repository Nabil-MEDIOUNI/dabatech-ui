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
/*                                    CreatedBy                               */
/* -------------------------------------------------------------------------- */
function CreatedBy() {
  /* ******************************** RENDERING ******************************* */
  return (
    <Box className="created-by">
      <Typography>
        created by
        <a
          href="https://www.linkedin.com/in/nabil-mediouni-175a341a5/"
          target="_blank"
          rel="noreferrer"
        >
          Nabil MEDIOUNI
        </a>
      </Typography>
      <Typography>devChallenges.io</Typography>
    </Box>
  );
}

export default CreatedBy;
