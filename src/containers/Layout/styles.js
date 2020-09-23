import styled from 'styled-components';

import { tablet } from 'styles/queries';

export const Container = styled.div`
  display: flex;
  padding-top: 50px;
  padding-bottom: 50px;

  ${tablet} {
    height: 100%;
    padding-bottom: 0;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1;
  height: 100%;
  max-height: 100%;
  -webkit-overflow-scrolling: touch;

`;
