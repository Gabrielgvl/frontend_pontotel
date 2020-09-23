import { useEffect } from 'react';
import defaultUseAxios from 'axios-hooks';
import { useHistory } from 'react-router-dom';
import useJwtAuth from '@gabrielgvl/jwt_auth_react';
import useNotistack from './useNotistack';
import { LOGIN } from '../routes/pathNames';
import useCache from '../store/cache';

/**
 * Hook para fazer requests com axios
 */

const useAxios = (
  {
    url,
    method,
    entity,
    manual = false,
    timer = 0,
    config = {},
    notification = true,
  },
) => {
  const { successSnack, errorSnack } = useNotistack();
  const history = useHistory();

  const { writeCache, readCache } = useCache();
  const cachedData = readCache(entity);

  const { token, isLoggedIn, logOut } = useJwtAuth();
  const [{
    response, error, data, loading,
  }, execute] = defaultUseAxios(
    {
      headers: { Authorization: `Bearer ${token}` },
      url,
      method,
      validateStatus(status) {
        return status >= 200 && status < 500;
      },
      ...config,
    },
    {
      manual,
      useCache: true,
    },
  );

  useEffect(() => {
    if (!response || !response.config) return;
    console.log(response);
    function handleNotifications() {
      if (notification) {
        switch (response.status) {
          case 200:
            if (response.config.method === 'post') {
              successSnack(`${entity} Atualizado(a) com Sucesso!`);
            } if (response.config.method === 'delete') {
              successSnack(`${entity} Excluido(a) com Sucesso!`);
            }
            break;
          case 201:
            successSnack(`${entity} Registrado(a) com Sucesso!`);
            break;
          case 400:
            errorSnack('Falha na Conexão');
            break;
          case 401:
            if (isLoggedIn) {
              logOut();
              errorSnack('Sua sessão expirou!');
              history.push(LOGIN);
            } else {
              errorSnack('Erro de Autenticação');
            }
            break;
          case 403:
            errorSnack('Acesso Negado!');
            break;
          case 404:
            errorSnack(`${entity} não encontrado(a)!`);
            break;
          default:
            break;
        }
      }
    }

    function handleCache() {
      // If cached data doesn't exist yet on post/put/delete
      const cData = cachedData || [];
      if (cData instanceof Array) {
        switch (response.config.method) {
          case 'get':
            writeCache(entity, data);
            break;
          case 'post':
            writeCache(entity, [...cData, data]);
            break;
          default:
            console.log('Not Implemented');
        }
      } else {
        writeCache(entity, data);
      }
    }

    handleCache();
    handleNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response, error]);

  useEffect(() => {
    if (timer) {
      setInterval(() => {
        execute();
      }, timer);
    }
  }, [execute, timer]);

  return [{
    response, error, data: cachedData, loading,
  }, execute];
};

export default useAxios;
