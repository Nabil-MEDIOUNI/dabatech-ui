import React from 'react';

const { default: SnackAlert } = require('../components/_common/SnackAlert');

const Alert = (error, openAlert, setAlert, message) => {
  if (error) {
    const { message: errorMessage } = error;

    return (
      <SnackAlert
        message={errorMessage?.substring(15)}
        type="error"
        open={openAlert}
        handleClose={setAlert}
      />
    );
  }
  return (
    <SnackAlert
      message={message}
      type="success"
      open={openAlert}
      handleClose={setAlert}
    />
  );
};

export default Alert;
