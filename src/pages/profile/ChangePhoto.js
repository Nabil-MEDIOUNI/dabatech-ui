/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { useState, useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import { useMutation } from '@apollo/react-hooks';

// UI lib components
import { Box } from '@material-ui/core';
// UI lib icons
import CameraIcon from '@material-ui/icons/CameraAlt';

// UI local components
import Loading from '../../components/_common/Loading';

// Helpers & utils
import Alert from '../../utils/alert';
import UserInfoContext from '../../components/UserInfoContextWrapper';

// Mutations
import { PHOTO_UPDATE } from '../../apollo/mutations/currentPerson';
import { USER_INFO } from '../../apollo/queries/currentPerson';

/* -------------------------------------------------------------------------- */
/*                               Change Photo Component                       */
/* -------------------------------------------------------------------------- */
const ChangePhoto = () => {
  /* ********************************** HOOKS ********************************* */
  const { data } = useContext(UserInfoContext);

  const [openAlert, setAlert] = useState(false);

  const [changePhoto, { loading, error }] = useMutation(PHOTO_UPDATE, {
    refetchQueries: [
      {
        query: USER_INFO,
      },
    ],
  });

  const onDrop = useCallback(
    ([file]) => {
      changePhoto({ variables: { file } });
      setAlert(true);
    },
    [changePhoto],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  /* ***************************** RENDER HELPERS ***************************** */
  function getUploadLayout() {
    return (
      <Box className="upload">
        <CameraIcon className="upload_icon" />
        <img className="user_photo" src={data.currentPerson.photo.url} alt="" />
      </Box>
    );
  }

  /* ******************************** RENDERING ******************************* */
  if (loading) {
    return (
      <>
        <Box
          position="absolute"
          left="49%"
          zIndex="99"
          top="40%"
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <Loading />
        </Box>
        <Box
          position="fixed"
          width="100%"
          left={0}
          height="153vh"
          bgcolor="rgb(0 0 0 / 7%)"
          zIndex="3"
        />
      </>
    );
  }

  return (
    <>
      <Box {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? getUploadLayout() : getUploadLayout()}
      </Box>
      {Alert(
        error,
        openAlert,
        () => setAlert(false),
        'Photo is changed successfully!',
      )}
    </>
  );
};

export default ChangePhoto;
