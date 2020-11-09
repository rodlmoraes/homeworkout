import React from 'react'

import Routes from './Routes'
import ApplicationProvider from './ApplicationProvider'

type AppProps = {
  route?: string
}

export default function App({ route }: AppProps) {
  return (
    <ApplicationProvider>
      <Routes route={route} />
    </ApplicationProvider>
  )
}
