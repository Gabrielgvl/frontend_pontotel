import { useAxios } from '../hooks';
import { GET, link, POST } from './util';

const URL = `${link}`;
export const LOGIN_TYPE = 'Login';
export const REGISTER_TYPE = 'Registro';

export const useLogin = () => useAxios({
  url: `${URL}/login`, method: GET, entity: LOGIN_TYPE, manual: true, notification: false,
});

export const useRegister = () => useAxios({
  url: `${URL}/register`, method: POST, entity: REGISTER_TYPE, manual: true, notification: false,
});
