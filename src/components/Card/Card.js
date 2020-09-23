import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { CardStyled } from './styles';

export const Card = ({ children, delay, ...props }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <CardStyled {...props} animated={animated}>
      {children}
    </CardStyled>
  );
};

Card.propTypes = {
  autoHeight: PropTypes.bool,
  animated: PropTypes.bool,
  link: PropTypes.bool,
  noAlign: PropTypes.bool,
  opacity: PropTypes.number,
  sidebar: PropTypes.bool,
  padding: PropTypes.string,
  sidebarColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  delay: PropTypes.number,
  color: PropTypes.string,
};

Card.defaultProps = {
  delay: 50,
  color: '#fff',
};
