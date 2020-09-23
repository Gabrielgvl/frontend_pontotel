import React, { useState } from 'react';

import Gate from 'containers/Gate';
import LoginForm from './LoginForm';
import { Avatar, AvatarIcon } from './styles';
import Logo from '../../assets/img/logo.webp';
import RegisterForm from './RegisterForm';

const LoginPage = () => {
  const [isRegister, setRegister] = useState(false);
  return (
    <Gate>
      <Avatar new>
        <AvatarIcon src={Logo} alt="PontoTel" />
      </Avatar>
      {isRegister ? (
        <RegisterForm setRegister={setRegister} />
      ) : (
        <LoginForm setRegister={setRegister} />
      )}
    </Gate>
  );
};

export default LoginPage;
