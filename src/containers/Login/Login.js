import React from 'react';

import Flex from 'components/Flex';

import { LoginRoutes } from '../../routes';

const Login = () => (
  <Flex justifyCenter alignCenter fullHeight loginBg>
    <LoginRoutes />
  </Flex>
);

export default Login;
