import styled, { css } from 'styled-components';
import {
  darkText, darkText50, muiColors, secondary,
} from '../../styles/colors';
import {
  desktop, desktopHd, phablet,
} from '../../styles/queries';

const animatedCss = css`
  opacity: 1;
`;

export const CardTitle = styled.h1`
  font-size: ${(props) => (props.staticFont ? '22px' : '18px')};
  font-weight: 300;
  color: ${(props) => (props.black ? darkText : secondary.rgb().toString())};
  margin-bottom: 5px;
  text-align: center;

  ${desktop} {
    font-size: 28px;
  }

  ${(props) => props.flex && css`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const CardDetails = styled.h1`
  font-size: 18px;
  font-weight: 300;
  color: ${darkText.rgb().toString()};
  margin-bottom: 5px;
  text-align: center;

  ${desktop} {
    font-size: 16px;
  }

  ${desktopHd} {
    font-size: 20px;
  }
`;

export const CardSubTitle = styled.span`
  font-size: 14px;
  text-align: center;
  padding: 0 10px;
`;

export const CardDescription = styled.span`
  font-size: 14px;
  text-align: end;
  padding: 0 10px;
`;

export const CardText = styled.span`
  font-size: 16px;
  padding: 0 10px;
  margin-top: 10px;
  font-weight: bold;
  color: ${(props) => (props.isValue ? 'inherit' : '#fff')}
`;

export const CardInfo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const CardHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const IconInfo = styled.div`
  padding: 15px;
  margin-top: -20px;
  margin-right: 15px;
  float: right;
  height: 4em;
  width: 4em;
`;

export const CardDivider = styled.div`
  height: 1px;
  background: #eee;
  width: 100%;
  margin: 5px 0;
  background: ${secondary}
`;

export const CardActions = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  
  ${phablet} {
    top: 10px;
  }
`;

export const CardIcon = styled.div`
  position: absolute;
  top: 5;
  right: 5;
  text-align: end;
  font-size: 2em;
`;

export const BackButton = styled.div`
  position: absolute;
  left: 5px;
  top: 0px;
  
  ${phablet} {
    top: 10px;
  }
`;

export const CardAvatarStyled = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  margin-bottom: 15px;
  border: ${(props) => (props.border
    ? `1px solid  ${darkText50
      .fade(0.7)
      .rgb()
      .toString()}`
    : '0')};
`;

export const CardStyled = styled.div`
  position: relative;
  color: ${(props) => (props.color === '#fff' ? darkText : secondary.rgb().toString())};
  padding: ${(props) => (props.padding ? props.padding : '15px 0')};
  min-height: ${(props) => {
    if (props.autoHeight) return 'auto';
    if (props.height) return props.height;
    return '280px';
  }};
  height: ${(props) => {
    if (props.height) return props.height;
    return 'auto';
  }};
  width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
  opacity: 0;
  background: ${(props) => (props.opacity ? `rgba(255,255,255,${props.opacity})` : props.color)};
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.noAlign ? 'start' : 'center')};
  cursor: ${(props) => {
    if (props.new || props.link) return 'pointer';
    return 'auto';
  }};
  /*transform: translateY(50px);*/
  transition: 500ms all ease-in-out, background 0.3s;
  ${(props) => props.animated && animatedCss}

  &:hover {
    ${(props) => (props.color === '#fff' ? `background: ${(props.new ? '#bbb' : '#fff')};` : '')}
  }

  ${(props) => props.sidebar
    && css`
      border-left: 3px solid ${props.sidebarColor ? muiColors[props.sidebarColor] : '#000000'};
    `}
`;
