import React from 'react';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { sha512 } from 'js-sha512';
import useJwtAuth from '@gabrielgvl/jwt_auth_react';
import { Button } from '@material-ui/core';
import FormikTextField from '../../../components/FormikTextField';
import PasswordInput from '../../../components/PasswordInput';
import Flex from '../../../components/Flex';
import ButtonProgress from '../../../components/ButtonProgress';
import useNotistack from '../../../hooks/useNotistack';
import { useRegister } from '../../../requests/auth';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Informe o nome de Usuário')
    .trim(),
  password: Yup.string()
    .required('Informe a senha')
    .min(8, 'Informe uma senha de no mínimo 8 caracteres')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':\\|,.<>/?])[A-Za-z\d!@#$%^&*()_+\-=[\]{};':\\|,.<>/?]{8,}$/,
      'Sua senha deve ter no mínimo 8 caracteres, 1 letra maiúscula, 1 caracter especial e 1 número',
    ),
  confirmPassword: Yup.string()
    .required('Confirme sua senha')
    .oneOf([Yup.ref('password'), null], 'Senhas não são iguais.'),
});

const RegisterForm = ({ setRegister }) => {
  const { successSnack, errorSnack } = useNotistack();
  const { handleLogin } = useJwtAuth();
  const [, register] = useRegister();

  return (
    <Formik
      onSubmit={async ({ username, password }, { setSubmitting }) => {
        try {
          const hashedPassword = sha512(encodeURI(password));
          const { data } = await register({
            data: {
              username,
              hashed_password: hashedPassword,
            },
          });
          const { access_token: accessToken } = data;
          if (accessToken) {
            handleLogin(accessToken);
            successSnack('Usuario criado com sucesso!');
          } else {
            errorSnack('Autenticação inválida!');
          }
        } catch (e) {
          console.log(e);
          setSubmitting(false);
        }
      }}
      initialValues={{
        username: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
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
          <PasswordInput
            label="Confirme a Senha"
            name="confirmPassword"
            fullWidth
            showPass={false}
          />
          <Flex justifyBetween className="mt-4">
            <Button
              color="primary"
              onClick={() => setRegister(false)}
            >
              Voltar
            </Button>
            <ButtonProgress
              type="submit"
              color="primary"
              variant="contained"
              disabled={isSubmitting}
            >
              Registrar-se
            </ButtonProgress>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

RegisterForm.propTypes = {
  setRegister: PropTypes.func.isRequired,
};

export default RegisterForm;
