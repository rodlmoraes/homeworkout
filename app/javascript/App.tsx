import React from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'

import theme from './theme'
import Routes from './Routes'
import { AuthProvider } from './contexts/auth'
import { AlertProvider } from './contexts/alert'

type AppProps = {
  route?: string
}

export default function App({ route }: AppProps) {
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <AlertProvider>
        <AuthProvider>
          <Routes route={route} />
        </AuthProvider>
      </AlertProvider>
    </ThemeProvider>
  )
}
