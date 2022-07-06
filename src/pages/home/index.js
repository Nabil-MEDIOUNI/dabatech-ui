/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Pakcages
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// UI lib components
import { Box, Typography } from '@material-ui/core';

// UI local components
import TopBar from '../../components/_common/TopBar';
import CreatedBy from '../../components/_common/CreatedBy';
import Slogan from '../../components/_common/Slogan';

// Helpers & utils
import UserInfoContext from '../../components/UserInfoContextWrapper';

// Styles
import './index.css';

/* -------------------------------------------------------------------------- */
/*                                    Home Page                               */
/* -------------------------------------------------------------------------- */
function Home() {
  const { data, loading } = useContext(UserInfoContext);

  /* ******************************** RENDERING ******************************* */
  if (loading) return 'loading!';

  return (
    <Box className="home_page">
      <TopBar />
      <Box className="personal_info">
        <Typography className="headline">Personal info</Typography>
        <Typography className="subtitle">
          Basic info, like your name and photo
        </Typography>
        <Box className="personal_info_box">
          <Box className="first_row">
            <Box className="profile_info">
              <Typography className="headline">Profile</Typography>
              <Typography className="message">
                Some info may be visible to other people
              </Typography>
            </Box>
            <Link className="edit_btn" to="/profile">
              Edit
            </Link>
          </Box>
          <Box className="divider" />
          <Box className="single_row">
            <Typography className="title">PHOTO</Typography>
            <img
              className="user_photo"
              src={data.currentPerson.photo.url}
              alt=""
            />
          </Box>
          <Box className="divider" />
          <Box className="single_row">
            <Typography className="title">NAME</Typography>
            <Typography className="value">{data.currentPerson.name}</Typography>
          </Box>
          <Box className="divider" />
          <Box className="single_row">
            <Typography className="title">BIO</Typography>
            <Typography className="value bio">
              {data.currentPerson.bio}
            </Typography>
          </Box>
          <Box className="divider" />
          <Box className="single_row">
            <Typography className="title">PHONE</Typography>
            <Typography className="value">
              {data.currentPerson.phone}
            </Typography>
          </Box>
          <Box className="divider" />
          <Box className="single_row">
            <Typography className="title">EMAIL</Typography>
            <Typography className="value">
              {data.currentPerson.email}
            </Typography>
          </Box>
          <Box className="divider" />
          <Box className="single_row">
            <Typography className="title">PASSWORD</Typography>
            <Typography className="value">************</Typography>
          </Box>
        </Box>
        <CreatedBy />
      </Box>
      <Slogan />
    </Box>
  );
}

export default Home;
