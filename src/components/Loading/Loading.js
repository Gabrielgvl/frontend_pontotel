import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

const Loading = styled(CircularProgress)`
  margin-top: ${(props) => (props.notmargin ? '0' : '15px')};
`;

export default Loading;
