import { useSnackbar } from 'notistack';

/**
 * Hook para utilizar as variações das SnackBars
 */
export default function useNotistack() {
  const { enqueueSnackbar } = useSnackbar();

  const successSnack = (message) => {
    enqueueSnackbar(message, { variant: 'success' });
  };

  const errorSnack = (message) => {
    enqueueSnackbar(message, { variant: 'error' });
  };

  const infoSnack = (message) => {
    enqueueSnackbar(message, { variant: 'info' });
  };

  const warnSnack = (message) => {
    enqueueSnackbar(message, { variant: 'warning' });
  };

  const snack = (message) => {
    enqueueSnackbar(message);
  };

  const persistSnack = (
    message,
    variant,
  ) => {
    enqueueSnackbar(message, { variant, persist: true });
  };

  return {
    successSnack,
    errorSnack,
    infoSnack,
    warnSnack,
    snack,
    persistSnack,
  };
}
