import styled, { keyframes } from 'styled-components';
import Lock from '@material-ui/icons/LockOpen';
import { tablet } from 'styles/queries';

import { CardAvatar } from 'components/Card';

const bounce = keyframes`
0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

export const LoginLogo = styled.img`
  visibility: hidden;
  position: absolute;
  top: 12px;
  left: 25px;
  margin-top: -3em;

  ${tablet} {
    visibility: visible;
  }
`;

export const Avatar = styled(CardAvatar)`
  margin-top: -55px;
  align-self: center;
  background: #c3c3c3;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    animation: ${bounce} 0.5s linear infinite;
  }
`;

export const AvatarIcon = styled(Lock)`
  color: #6b6a6a;
  font-size: 50px !important;
`;
