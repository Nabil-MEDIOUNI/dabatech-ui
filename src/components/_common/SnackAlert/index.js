/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import PropTypes from 'prop-types';

// UI lib components
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

/* -------------------------------------------------------------------------- */
/*                               SnackAlert Component                         */
/* -------------------------------------------------------------------------- */
function SnackAlert({ type, message, open, handleClose }) {
  /* ***************************** RENDER HELPERS ***************************** */
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  /* ******************************** RENDERING ******************************* */
  return (
    <>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}

SnackAlert.propTypes = {
  handleClose: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  message: PropTypes.string,
};

SnackAlert.defaultProps = {
  message: undefined,
};

export default SnackAlert;
