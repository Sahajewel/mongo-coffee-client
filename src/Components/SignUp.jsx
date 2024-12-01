import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider';
import Navbar from './Navbar';


export default function SignUp() {
  const {handleSignup} = useContext(AuthContext)
  const handleSignupForm = (e)=>{
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
   
   handleSignup(email, password)
   .then((result)=>{
       console.log(result.user)
       const timeNew = result.user.metadata.creationTime
       const newUsers = {name,email, timeNew}
    fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(newUsers)
    })
    .then((res)=>console.log(res))
    .then((result)=>{
        console.log(result)
    })
   })
   .then((err)=>{
    console.log(err)
   })

  }
  return (
   <div>
    <Navbar></Navbar>
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col ">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">SignUp now!</h1>
      
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSignupForm} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input name='name' type="text" placeholder="name" className="input input-bordered" required />
          </div>
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
            <button className="btn btn-primary">Signup</button>
          </div>
        </form>
      </div>
    </div>
  </div>
   </div>
  )
}
