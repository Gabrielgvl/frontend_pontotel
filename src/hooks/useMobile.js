import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

// hook responsavel por trackear se tamanho da tela é mobile ou nao
export default function useMobile() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('sm'));
}
