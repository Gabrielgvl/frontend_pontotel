import * as React from 'react';
import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';
import { darkText50, darkText, primary } from 'styles/colors';
import * as queries from 'styles/queries';

export const Flex = styled.div`
  display: flex;
  flex-wrap: ${(props) => {
    if (props.wrapReverse) return 'wrap-reverse';
    if (props.noWrap) return 'nowrap';
    return 'wrap';
  }};
  justify-content: ${(props) => {
    if (props.justifyContent) return props.justifyContent;
    if (props.justifyCenter) return 'center';
    if (props.justifyAround) return 'space-around';
    if (props.justifyBetween) return 'space-between';
    if (props.justifyEnd) return 'flex-end';
    return 'flex-start';
  }};
  align-items: ${(props) => {
    if (props.alignItems) return props.alignItems;
    if (props.alignStretch) return 'stretch';
    if (props.alignEnd) return 'flex-end';
    if (props.alignCenter) return 'center';
    if (props.alignBaseline) return 'baseline';
    return 'flex-start';
  }};
  align-content: ${(props) => {
    if (props.alignContent) return props.alignContent;
    if (props.contentStart) return 'flex-start';
    if (props.contentEnd) return 'flex-end';
    if (props.contentCenter) return 'center';
    if (props.contentBetween) return 'space-between';
    if (props.contentAround) return 'contentAround';
    return 'stretch';
  }};
  height: ${(props) => {
    if (props.fullHeight) return '100%';
    return 'auto';
  }};
  width: ${(props) => {
    if (props.fullWidth) return '100%';
    return 'auto';
  }};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  background: ${(props) => (props.loginBg ? primary.rgb().toString() : 'transparent')};
`;

export const FlexImageBG = styled.div`{
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  background-position: center center;
  background-size: cover;
  background-image: url(${(props) => props.backgroundImage});
  &:after {
    position: absolute;
    zIndex: 3;
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    background: whitesmoke;
    opacity: .3;
  }
  `;

const responsive = css`
  width: 100%;

  ${queries.tablet} {
    width: 100%;
  }

  ${queries.desktop} {
    width: 50%;
  }

  ${queries.desktopHd} {
    width: 33.33%;
  }
`;

Flex.propTypes = {
  wrapReverse: PropTypes.bool,
  noWrap: PropTypes.bool,
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-around',
    'space-between',
    'space-evenly',
  ]),
  justifyCenter: PropTypes.bool,
  justifyAround: PropTypes.bool,
  justifyBetween: PropTypes.bool,
  justifyEnd: PropTypes.bool,
  alignItems: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
  ]),
  alignStretch: PropTypes.bool,
  alignEnd: PropTypes.bool,
  alignCenter: PropTypes.bool,
  alignBaseline: PropTypes.bool,
  alignContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'stretch',
  ]),
  contentStart: PropTypes.bool,
  contentEnd: PropTypes.bool,
  contentCenter: PropTypes.bool,
  contentBetween: PropTypes.bool,
  contentAround: PropTypes.bool,
  fullHeight: PropTypes.bool,
  fullWidth: PropTypes.bool,
  column: PropTypes.bool,
  loginBg: PropTypes.bool,
  backgroundImage: PropTypes.any,
  style: PropTypes.objectOf(React.CSSProperties),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export const Column = styled.div`
  transition: width 0.3s;
  width: ${(props) => {
    if (props.fullWidth) return '100%';
    if (props.three) return '33.33%';
    if (props.four) return '25%';
    return '50%';
  }};
  ${(props) => props.responsive && responsive}
  padding: ${(props) => (props.noPadding ? 0 : '15px')};
`;

export const FlexColumn = styled.div`
  height: ${(props) => (props.fullHeight ? '100%' : 'auto')};
  transition: width 0.3s;
  width: ${(props) => props.sm || props.all || '50%'};

  ${queries.phablet} {
    width: ${(props) => {
    if (props.sm === 'fullWidth') return '100%';
    if (props.sm === 'three') return '33.33%';
    if (props.sm === 'four') return '25%';
    return props.sm || props.all || '50%';
  }};
  }

  ${(props) => (props.marginBottom ? `margin-bottom:${props.marginBottom};` : '')}
  
  padding: ${(props) => (props.noPadding ? 0 : '15px')};

  ${queries.tablet} {
    width: ${(props) => {
    if (props.md === 'fullWidth') return '100%';
    if (props.md === 'three') return '33.33%';
    if (props.md === 'four') return '25%';
    return props.md || props.all || '50%';
  }};
  }

  ${queries.desktop} {
    width: ${(props) => {
    if (props.lg === 'fullWidth') return '100%';
    if (props.lg === 'three') return '33.33%';
    if (props.lg === 'four') return '25%';
    return props.lg || props.all || '50%';
  }};
  }

  ${queries.desktopHd} {
    width: ${(props) => {
    if (props.xl === 'fullWidth') return '100%';
    if (props.xl === 'three') return '33.33%';
    if (props.xl === 'four') return '25%';
    return props.xl || props.all || '50%';
  }};
  }
`;

FlexColumn.propTypes = {
  fullHeight: PropTypes.bool,
  noPadding: PropTypes.bool,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  xl: PropTypes.string,
  all: PropTypes.string,
  style: PropTypes.objectOf(React.CSSProperties),
  className: PropTypes.string,
};

export const Container = styled.div`
  width: 100%;
  flex: 1;
  color: ${darkText50.rgb().toString()};

  a {
    text-decoration: none;
    color: ${darkText.rgb().toString()};
  }
  
  ${queries.phablet} { 
    width: 85%;
    margin-top: 15px;
  }
`;

export const CardContainer = styled.div`
  padding: 0 15px;
`;
