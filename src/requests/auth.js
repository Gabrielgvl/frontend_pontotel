import { useAxios } from '../hooks';
import { link, POST } from './util';

const URL = `${link}/auth`;
export const LOGIN_TYPE = 'Login';

export const useLogin = () => useAxios({
  url: `${URL}/login`, method: POST, entity: LOGIN_TYPE, manual: true, notification: false,
});
