import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  typography: {
    h1: {
      fontFamily: 'inherit',
      fontWeight: 'inhert',
      fontSize: '1.5rem',
      paddingBottom: '2rem'
    },
    h2: {
      fontFamily: 'inherit',
      fontWeight: 'inhert',
      fontSize: '1.3rem',
      paddingBottom: '2rem'
    },
    h3: {
      fontFamily: 'inherit',
      fontWeight: 'inhert',
      fontSize: '1.1rem',
      paddingBottom: '2rem'
    }
  }
})

export default theme;