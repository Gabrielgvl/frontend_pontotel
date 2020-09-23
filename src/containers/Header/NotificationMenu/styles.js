import styled from 'styled-components';

import { darkText80 } from 'styles/colors';

import NotificationBackground from 'assets/img/notifications.svg';

export const Root = styled.div`
  width: 350px;
  max-width: 100%;
  font-size: 14px !important;
`;

export const NotificationHeader = styled.div`
  background-image: url(${NotificationBackground});
  background-position-x: right;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: contain;
  padding-bottom: 34px;
  padding-right: 20px;
  padding-top: 34px;
`;

export const NotificationTitle = styled.div`
  padding: 8px 16px 0;
  font-size: 14px;
  font-weight: bold;
  color: ${darkText80.rgb().toString()};
`;

export const NotificationSubTitle = styled.div`
  padding: 0 16px;
  font-size: 12px;
  color: ${darkText80.rgb().toString()};
`;
