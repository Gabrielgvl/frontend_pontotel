import styled from 'styled-components';

import { muiColors, darkText80 } from 'styles/colors';

export const InfoTitle = styled.span`
  font-size: 12px;
  color: ${props => (props.color ? muiColors[props.color] : 'black')};
`;

export const Info = styled.div`
  font-size: 28px;
  margin-top: 4px;
  color: ${darkText80.rgb().toString()};
`;
