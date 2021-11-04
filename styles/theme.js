import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
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
      midsm: 768,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
})

theme = responsiveFontSizes(theme)

export default theme
