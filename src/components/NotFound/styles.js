import styled from 'styled-components';

export const Logo = styled.img`
  width: ${(props) => props.width || '300px'};
  margin-bottom: 15px;
`;

export const TextPage = styled.span`
  font-family: monospace !important;
  font-size: 22px;
`;
