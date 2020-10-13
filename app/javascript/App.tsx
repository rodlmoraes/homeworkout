import React from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'

import Routes from './Routes'
import { AuthProvider } from './contexts/auth'
import theme from './theme'

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  )
}
