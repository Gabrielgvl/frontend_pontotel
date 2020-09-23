import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Button, Link as MuiLink } from '@material-ui/core';
import Flex from 'components/Flex';
import ButtonProgress from 'components/ButtonProgress';
import PasswordInput from 'components/PasswordInput';

import useJwtAuth from '@gabrielgvl/jwt_auth_react';
import { sha512 } from 'js-sha512';
import { Form } from './styles';
import FormikTextField from '../../../components/FormikTextField';
import useNotistack from '../../../hooks/useNotistack';
import { useLogin } from '../../../requests/auth';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Informe o Nome de Usuario')
    .trim(),
  password: Yup.string().required('Informe a senha'),
});

const LoginForm = ({ setRegister }) => {
  const { successSnack, errorSnack } = useNotistack();
  const { handleLogin } = useJwtAuth();
  const [, login] = useLogin();

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={async ({ username, password }, { setSubmitting }) => {
        try {
          const hashedPassword = sha512(encodeURI(password));
          const { data } = await login({
            headers: {
              Authorization: `Basic ${btoa(`${username}:${hashedPassword}`)}`,
            },
          });
          const { access_token: accessToken } = data;
          if (accessToken) {
            successSnack('Seja Bem-Vindo!');
            handleLogin(accessToken);
          } else {
            errorSnack('Autenticação inválida!');
          }
        } catch (e) {
          console.log(e);
          setSubmitting(false);
        }
      }}
      validationSchema={validationSchema}
      validateOnBlur={false}
    >
      {({
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <FormikTextField
            label="Nome de Usuário"
            name="username"
            margin="normal"
            variant="standard"
            fullWidth
          />
          <PasswordInput
            label="Senha"
            name="password"
            fullWidth
          />
          <Flex fullWidth justifyEnd>
            <MuiLink color="primary" component={Link} to="/forgot-password">
              Esqueceu sua senha?
            </MuiLink>
          </Flex>
          <Flex justifyBetween className="mt-4">
            <Button
              color="primary"
              onClick={() => setRegister(true)}
            >
              Registrar-se
            </Button>
            <ButtonProgress
              type="submit"
              color="primary"
              variant="contained"
              disabled={isSubmitting}
            >
              Entrar
            </ButtonProgress>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default withRouter(LoginForm);
