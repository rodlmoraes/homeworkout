import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { useAuth } from './contexts/auth'
import LessonList from './pages/LessonList'
import LessonForm from './pages/LessonForm'
import Login from './pages/Login'

type RoutesProps = {
  route?: string
}

// fallback route entered by the user, it can be useful in the future
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Routes({ route }: RoutesProps) {
  const { signedIn } = useAuth()

  return (
    <BrowserRouter>
      <Switch>
        {signedIn
          ? <Route path='/cadastrar-aula' component={LessonForm} />
          : <Route path='/entrar' component={Login} />}
        <Route path='/' component={LessonList} exact />
        <Redirect to={signedIn ? '/cadastrar-aula' : '/'} />
      </Switch>
    </BrowserRouter>
  )
}
