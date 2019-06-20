import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#8239B3' },
    secondary: { main: '#4ECC84' },
  },
  typography: {
    h1: {
      fontFamily: 'Fredoka One',
      fontWeight: 500,
    },
    h2: {
      fontFamily: 'Fredoka One'
    },
    h3: {
      fontFamily: 'Fredoka One'
    },
    h4: {
      fontFamily: 'Fredoka One',
      color: 'white'
    },
    h5: {
      fontFamily: 'Nunito'
    },
    h6: {
      fontFamily: 'Nunito'
    },
  },
});

export default theme;