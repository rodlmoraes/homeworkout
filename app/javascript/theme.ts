import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#131419',
      paper: '#1C1C24',
    },
    primary: {
      main: '#F29C29',
      contrastText: '#FAFAFC',
    },
    secondary: {
      main: '#3281d9',
      contrastText: '#FAFAFC',
    },
    type: 'dark',
  },
  typography: {
    fontFamily: 'Poppins, Archivo, Roboto, sans-serif',
    allVariants: {
      color: '#FAFAFC',
    },
  },
})

export default theme
