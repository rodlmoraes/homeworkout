import React, { PropsWithChildren } from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'

import theme from './theme'
import { AuthProvider } from './contexts/auth'
import { AlertProvider } from './contexts/alert'

export default function ApplicationProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <AlertProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </AlertProvider>
    </ThemeProvider>
  )
}
