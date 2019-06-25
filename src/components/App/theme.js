import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#8239B3' },
    secondary: { main: '#4ECC84' },
  },
  typography: {
    fontFamily: 'Nunito',
    h1: {
      fontFamily: 'Fredoka One',
      fontWeight: 500,
    },
    h2: {
      fontFamily: 'Nunito',
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'Fredoka One'
    },
    h4: {
      fontFamily: 'Nunito',
      color: 'black',
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Fredoka One',
      color: 'white',
      fontSize: 32,
    },
    h6: {
      fontFamily: 'Nunito',
      color: 'white',
      fontSize: 16,
      fontWeight: 300,
    },
    
  },
});

export default theme;