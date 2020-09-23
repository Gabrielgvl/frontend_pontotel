import React, { useState, useEffect } from 'react';
import { darkText, pastelColor, darkText50 } from 'styles/colors';
import { handleShort } from 'utils/string';
import PropTypes from 'prop-types';
import { Card } from './Card';
import { CardAvatarStyled } from './styles';

export const CardAvatar = ({ children, backgroundColor, ...props }) => {
  const [background, setBackground] = useState('');
  const [fontColor, setFontColor] = useState('');

  useEffect(() => {
    const hexChar = typeof children === 'string' ? children.charCodeAt(0).toString(10) : 0;
    const auxHex = typeof children === 'string' ? children.charCodeAt(1).toString(10) : 0;
    const lastHexChar = typeof children === 'string' ? children.charCodeAt(children.length - 1).toString(10) : 0;
    const color = props.new || backgroundColor
      ? darkText50.fade(0.7)
      : pastelColor(hexChar, lastHexChar, auxHex);
    setBackground(backgroundColor || color.rgb().toString());
    setFontColor(
      props.new || backgroundColor
        ? darkText.rgb().toString()
        : color
          .darken(0.8)
          .rgb()
          .toString(),
    );
    // eslint-disable-next-line react/destructuring-assignment
  }, [backgroundColor, children, props.new]);

  return (
    <CardAvatarStyled
      background={background}
      color={fontColor}
      {...props}
      border={!!backgroundColor}
    >
      {typeof children === 'string' ? handleShort(children) : children}
    </CardAvatarStyled>
  );
};

Card.propTypes = {
  backgroundColor: PropTypes.string,
  new: PropTypes.bool,
};

CardAvatar.defaultProps = {
  new: false,
  backgroundColor: null,
};
