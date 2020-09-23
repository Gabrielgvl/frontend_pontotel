import React from 'react';
import { Link } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import PropTypes from 'prop-types';
import NotificationIcons from '../NotificationIcons/index';

const generateLink = {
  link: '',
};

const Notification = ({
  event, seen, onClick, children,
}) => {
  const link = generateLink[event];
  return (
    <ListItem component="div" disabled={seen} className="position-relative">
      <ListItemIcon>
        <NotificationIcons icon={event} />
      </ListItemIcon>
      <ListItemText primary={children} onClick={onClick} />
      {link && <Link to={link} className="streched-link" />}
    </ListItem>
  );
};

Notification.propTypes = {
  event: PropTypes.string.isRequired,
  seen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Notification;
