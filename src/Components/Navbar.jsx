import React from 'react'
import {  NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='w-10/12 mx-auto flex justify-center my-10'>
      <NavLink className="mr-5 btn hover:bg-red-700" to="/users">Users</NavLink>
      <NavLink className="mr-5 btn hover:bg-red-700" to="/addCoffee">AddCoffee</NavLink>
      <NavLink className="mr-5 btn hover:bg-red-700" to="/updateCoffee">UpdateCoffee</NavLink>
      <NavLink className="mr-5 btn hover:bg-red-700" to="/signup">Sign Up</NavLink>
      <NavLink className="mr-5 btn hover:bg-red-700" to="/login">Login</NavLink>
    </div>
  )
}
