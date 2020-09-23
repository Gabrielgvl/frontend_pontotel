import styled from 'styled-components';

import { primary, darkText10 } from 'styles/colors';
import * as queries from 'styles/queries';

export const Container = styled.header`
  height: 50px;
  background: ${primary.rgb().toString()};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px;
  width: 100%;
  z-index: 1250;
  position: fixed;
`;

export const ProfileContainer = styled.div`
  z-index: 1500;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  color: #fff !important;

  & svg.expand {
    cursor: pointer;
    display: initial;
    margin-right: 15px;
  }

  &.dropMenu {
    margin-top: 50px;
  }

`;

export const Logo = styled.img`
  width: 125px;
`;

export const LogoMobile = styled.img`
  width: 30px;
`;

export const HeaderTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: #fff;

  ${queries.microMobile} {
    font-size: 26px;
  }

  ${queries.mobile} {
    font-size: 36px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  font-size: 14px;
  border-right: 1px solid ${darkText10.rgb().toString()};
  margin-right: 8px;
`;

export const Item = styled.li`
  margin: 0 8px;
  font-weight: ${(props) => (props.active ? 'bold' : '300')};
`;
