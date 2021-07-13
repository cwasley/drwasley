import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    background: {
      default: '#e0ffe9'
    },
    primary: {
      main: '#33006f'
    },
    secondary: {
      main: '#288222'
    },
    lightBackground: {
      main: '#f5ebff'
    }
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 300,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
});

export default theme