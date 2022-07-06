/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import PropTypes from 'prop-types';

// UI lib components
import { Box, IconButton } from '@material-ui/core';

// UI lib icons
import InvertColorsIcon from '@material-ui/icons/InvertColors';

// Styles
import './index.css';

/* -------------------------------------------------------------------------- */
/*                              Invert Colors Component                       */
/* -------------------------------------------------------------------------- */
function InvertColors({ revertColors, setRevertColors, getElementClassName }) {
  /* ******************************** RENDERING ******************************* */
  return (
    <Box
      className="invert_colors"
      onClick={() => setRevertColors(!revertColors)}
    >
      <IconButton>
        <InvertColorsIcon
          className={`invert_colors_icon ${getElementClassName(
            'invert_colors_icon',
          )}`}
        />
      </IconButton>
    </Box>
  );
}

InvertColors.propTypes = {
  revertColors: PropTypes.bool.isRequired,
  setRevertColors: PropTypes.func.isRequired,
  getElementClassName: PropTypes.func.isRequired,
};

export default InvertColors;
