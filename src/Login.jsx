import React, { useContext } from 'react'
import Navbar from './Components/Navbar'
import { AuthContext } from './Components/AuthProvider'

export default function Login() {
  const {handleLogin} = useContext(AuthContext)
  const handleLoginForm = (e)=>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;

handleLogin(email, password)
.then((result)=>{
  console.log(result.user)
  const lastSignInTime = result?.user?.metadata?.lastSignInTime
const users = {email, lastSignInTime}

  fetch("http://localhost:5000/users", {
    method: "PATCH",
    headers:{
      "content-type": "application/json"
    },
    body: JSON.stringify(users)
  })
  .then((res)=> res.json())
  .then((result)=>{
    console.log(result)
  })
 
}).catch((err)=>{
  console.log(err.message)
})
  }
  return (
    <div>
    <Navbar></Navbar>
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col ">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
      
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLoginForm} className="card-body">
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
   </div>
  )
}
