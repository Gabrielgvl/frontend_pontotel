import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

export const Avatar = styled.div`
  align-self: center;
  padding-bottom: 20px;
  &:hover {
    animation: ${bounce} 0.5s linear infinite;
  }
`;

export const AvatarIcon = styled.img`
  color: #6b6a6a;
  font-size: 50px !important;
`;
