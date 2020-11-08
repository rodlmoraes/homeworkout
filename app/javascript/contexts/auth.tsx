import React, { createContext, PropsWithChildren, useEffect, useState, useContext } from 'react'

import { signIn, signUp, loadAuth, signOut } from '../services/auth'
import { useAlert } from './alert'

export type AuthContextData = {
  signedIn: boolean,
  teacher: Teacher | null,
  signIn: (email: string, password: string) => Promise<void>,
  signUp: (email: string, password: string) => Promise<void>,
  signOut: () => Promise<void>
}

export type Teacher = {
  id: number,
  email: string,
  name: string,
  image: string,
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: PropsWithChildren<unknown>) {
  const { showAlert } = useAlert()
  const [teacher, setTeacher] = useState<Teacher | null>(null)

  useEffect(() => {
    const loadedTeacher = loadAuth()
    setTeacher(loadedTeacher)
  }, [])

  const authSignIn = async (email: string, password: string) => {
    const loadedTeacher = await signIn(email, password, showAlert)
    setTeacher(loadedTeacher)
  }

  const authSignUp = async (email: string, password: string) => {
    const loadedTeacher = await signUp(email, password, showAlert)
    setTeacher(loadedTeacher)
  }

  const authSignOut = async () => {
    const isSignedOut = await signOut(showAlert)
    if (isSignedOut) setTeacher(null)
  }

  return (
    <AuthContext.Provider value={{
      signedIn: !!teacher,
      signIn: authSignIn,
      signUp: authSignUp,
      signOut: authSignOut,
      teacher,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthContext
