import React, { useRef, useEffect } from 'react';

import { withRouter } from 'react-router-dom';
import { Container, Content } from './styles';
import useMobile from '../../hooks/useMobile';
import Routes from '../../routes';

const Layout = withRouter(({ location }) => {
  const isMobile = useMobile();
  const ref = useRef(null);

  useEffect(() => {
    if (!isMobile) {
      ref.current.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <Container>
        <Content ref={ref}>{Routes}</Content>
      </Container>
    </>
  );
});

export default Layout;
