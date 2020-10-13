import React, { createContext, PropsWithChildren, useEffect, useState, useContext } from 'react'

import { signIn, loadAuth } from '../services/auth'

export type AuthContextData = {
  signedIn: boolean,
  teacher: Teacher | null,
  signIn: (email: string, password: string) => Promise<void>
}

export type Teacher = {
  id: number,
  email: string,
  name: string,
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: PropsWithChildren<unknown>) {
  const [teacher, setTeacher] = useState<Teacher | null>(null)

  useEffect(() => {
    const loadedTeacher = loadAuth()
    setTeacher(loadedTeacher)
  }, [])

  const authSignIn = async (email: string, password: string) => {
    const loadedTeacher = await signIn(email, password)
    setTeacher(loadedTeacher)
  }

  return (
    <AuthContext.Provider value={{ signedIn: !!teacher, signIn: authSignIn, teacher }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthContext
