import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#8239B3' },
    secondary: { main: '#4ECC84' },
  },
  typography: {
    fontFamily: [
      // 'Fredoka One',
      'Nunito',
    ],
  },
  h4: {
    fontFamily: 'Fredoka One',
  },
});

export default theme;