import React, { useEffect, useState } from 'react';

import {
  Popover, List, Divider, CircularProgress,
} from '@material-ui/core';

import Flex from 'components/Flex';

// import PropTypes from 'prop-types';
import { NotificationHeader, NotificationTitle, Root } from './styles';
import Notification from './Notification';

const NotificationMenu = ({
  popover, setPopover,
  dataNotification,
}) => {
  const [isRefetching, setIsRefetching] = useState(true);
  const { data, refetch } = { data: [], refetch: () => {} };

  useEffect(() => {
    const refetcher = async () => {
      setIsRefetching(true);
      await refetch();
      setIsRefetching(false);
    };
    if (dataNotification && dataNotification.totalNewNotifications.total > 0) refetcher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataNotification]);

  const handleClose = async (id = null) => {
    setPopover(null);
    if (id) {
      // await updateNotification({
      //   variables: {
      //     notificationId: id,
      //     event,
      //   },
      // });
    }
  };

  return (
    <Popover
      style={{ marginTop: '15px' }}
      open={Boolean(popover)}
      anchorEl={popover}
      onClose={() => handleClose()}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Root>
        <NotificationHeader>
          <NotificationTitle>Notificações</NotificationTitle>
        </NotificationHeader>
        <List component="div">
          {isRefetching ? (
            <Flex fullWidth justifyCenter>
              <CircularProgress size={25} />
            </Flex>
          ) : (
            data.notifications.notification.map((notification, index) => (
              <React.Fragment key={notification.notificationId}>
                <Notification
                  event={notification.event}
                  seen={notification.seen}
                  onClick={() => handleClose(notification.notificationId, notification.event)}
                >
                  {notification.message}
                </Notification>
                {index < data.notifications.notification.length - 1 && <Divider />}
              </React.Fragment>
            ))
          )}
        </List>
      </Root>
    </Popover>
  );
};

// NotificationMenu.propTypes = {
//   popover: PropTypes.node.isRequired,
//   setPopover: PropTypes.func.isRequired,
//   dataNotification: PropTypes.object.isRequired,
// };

export default NotificationMenu;
