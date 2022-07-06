/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Pakcages
import React, { useState, useEffect, useContext } from 'react';
import { useMutation } from 'react-apollo';

// UI lib components
import { Box, Button, Typography } from '@material-ui/core';

// UI local components
import TopBar from '../../components/_common/TopBar';
import ChangePhoto from './ChangePhoto';
import Alert from '../../utils/alert';
import BackButton from '../../components/_common/BackButton';
import CreatedBy from '../../components/_common/CreatedBy';
import Slogan from '../../components/_common/Slogan';

// Helpers & utils
import UserInfoContext from '../../components/UserInfoContextWrapper';
import { USER_INFO } from '../../apollo/queries/currentPerson';
import { CURRENT_PERSON_UPDATE } from '../../apollo/mutations/currentPerson';

// Styles
import './index.css';

/* -------------------------------------------------------------------------- */
/*                                   Profile Page                             */
/* -------------------------------------------------------------------------- */
function Profile() {
  /* ********************************** Hooks ********************************* */
  const { data, loading } = useContext(UserInfoContext);
  const [openAlert, setAlert] = useState(false);

  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [currentPersonUpdate, { error }] = useMutation(CURRENT_PERSON_UPDATE, {
    refetchQueries: [{ query: USER_INFO }],
  });

  useEffect(() => {
    if (data) {
      setName(data.currentPerson.name);
      setBio(data.currentPerson.bio);
      setEmail(data.currentPerson.email);
      setPhone(data.currentPerson.phone);
    }
  }, [data]);

  /* ******************************** CALLBACKS ******************************* */

  const onSaveProfile = (e) => {
    e.preventDefault();

    const getPersonObj = () => {
      const personObj = {
        name,
        email,
        bio,
        phone,
      };
      if (password) {
        return {
          ...personObj,
          password,
        };
      }
      return personObj;
    };

    currentPersonUpdate({
      variables: {
        person: getPersonObj(),
      },
    })
      .then(() => {
        setAlert(true);
      })
      .catch(() => {
        setAlert(true);
      });
  };

  /* ******************************** RENDERING ******************************* */
  if (loading) return 'loading!';

  return (
    <Box className="profile_page">
      <TopBar />
      <Box className="personal_info">
        <BackButton />
        <Box className="personal_info_box">
          <Box className="first_row">
            <Box className="change_info">
              <Typography className="headline">Change Info</Typography>
              <Typography className="message">
                Changes will be reflected to every services
              </Typography>
            </Box>
          </Box>
          <Box className="change_photo">
            <ChangePhoto />
            <Typography className="upload_text">CHANGE PHOTO</Typography>
          </Box>
          <Box className="single_row">
            <Typography className="label">Name</Typography>
            <input
              className="field_input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your name..."
            />
          </Box>
          <Box className="single_row">
            <Typography className="label">Bio</Typography>
            <textarea
              className="field_input bio_field_input"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Enter your bio..."
            />
          </Box>
          <Box className="single_row">
            <Typography className="label">Phone</Typography>
            <input
              className="field_input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="Enter your phone..."
            />
          </Box>
          <Box className="single_row">
            <Typography className="label">Email</Typography>
            <input
              className="field_input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email..."
            />
          </Box>
          <Box className="single_row">
            <Typography className="label">Password</Typography>
            <input
              className="field_input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your new password..."
            />
          </Box>
          <Button className="save_btn" type="button" onClick={onSaveProfile}>
            Save
          </Button>
        </Box>
        <CreatedBy />
      </Box>
      <Slogan />
      {Alert(
        error,
        openAlert,
        () => setAlert(false),
        'Profile is updated successfully!',
      )}
    </Box>
  );
}

export default Profile;
