import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Users() {
    const users = useLoaderData()
    console.log(users)
  return (
    <div className='mx-auto w-10/12 py-10 bg-indigo-600'>
     <h2 className='text-center text-4xl font-extrabold text-white'>Usres: {users.length}</h2>
     
     <div className='text-center my-10 text-white text-xl'>
       {users.map((user)=><p>Email: {user.email}</p>)}
     </div>
    </div>
  )
}

