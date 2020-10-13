import React from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'

import Routes from './Routes'
import { AuthProvider } from './contexts/auth'
import theme from './theme'

type AppProps = {
  route?: string
}

export default function App({ route }: AppProps) {
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <AuthProvider>
        <Routes route={route} />
      </AuthProvider>
    </ThemeProvider>
  )
}
