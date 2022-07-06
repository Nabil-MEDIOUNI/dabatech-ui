/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { useContext, useState } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// UI lib components
import { Box, Typography } from '@material-ui/core';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PeopleIcon from '@material-ui/icons/People';
import LogoutIcon from '@material-ui/icons/ExitToApp';

// Helpers & utils
import UserInfoContext from '../../UserInfoContextWrapper';

// Styles
import './index.css';

/* -------------------------------------------------------------------------- */
/*                                TopBar Component                            */
/* -------------------------------------------------------------------------- */
function TopBar() {
  /* ********************************** HOOKS ********************************* */
  const { data } = useContext(UserInfoContext);
  const [isOpenModal, setOpenModal] = useState(false);

  /* ***************************** RENDER HELPERS ***************************** */
  function getDropdownIcon() {
    if (isOpenModal) return <ArrowDropUpIcon className="dropdown_icon" />;
    return <ArrowDropDownIcon className="dropdown_icon" />;
  }

  function getDropDownContent() {
    if (isOpenModal) {
      return (
        <Box className="dropdown_content">
          <Link className="list_item list_item_active" to="/">
            <AccountCircleIcon className="list_item_icon" />
            <Typography className="list_item_text">My Profile</Typography>
          </Link>
          <Link className="list_item" to="/">
            <PeopleIcon className="list_item_icon" />
            <Typography className="list_item_text">Group Chat</Typography>
          </Link>
          <hr className="divider" />
          <Link className="list_item" to="/logout">
            <LogoutIcon className="list_item_icon list_item_icon_logout" />
            <Typography className="list_item_text list_item_text_logout">
              Logout
            </Typography>
          </Link>
        </Box>
      );
    }
    return '';
  }

  /* ******************************** RENDERING ******************************* */
  return (
    <Box className="topbar">
      <img
        className="devchallenges_logo"
        src="/static/icons/devchallenges_black.png"
        alt=""
      />
      <Box
        className="dropdown_toggler"
        onClick={() => setOpenModal(!isOpenModal)}
      >
        <img className="user_photo" src={data.currentPerson.photo.url} alt="" />
        <Typography className="user_name">{data.currentPerson.name}</Typography>
        {getDropdownIcon()}
      </Box>
      {getDropDownContent()}
    </Box>
  );
}

TopBar.propTypes = {};

export default TopBar;
