
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { createContext } from 'react'
import { auth } from '../../public/_firebase_auth'

export const AuthContext = createContext(null)
export default function AuthProvider({children}) {
  const handleSignup = (email, password)=>{
   return createUserWithEmailAndPassword(auth,email,password)
  }
  const handleLogin = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }
  const AuthInfo = {
    handleSignup,
    handleLogin
  }
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}
