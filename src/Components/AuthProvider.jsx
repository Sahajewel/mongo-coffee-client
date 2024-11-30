
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { createContext } from 'react'
import { auth } from '../../public/_firebase_auth'
export const AuthContext = createContext(null)
export default function AuthProvider({children}) {
  const handleSignup = (email, password)=>{
   return createUserWithEmailAndPassword(auth,email,password)
  }
  const AuthInfo = {
    handleSignup,
  }
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}
