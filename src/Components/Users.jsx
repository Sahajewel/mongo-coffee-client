import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'
import Navbar from './Navbar'

export default function Users() {
    const usersLoaded = useLoaderData()
    const [users, setUsers] = useState(usersLoaded)
    console.log(users)
    const handleDelete = (_id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          })
            
          .then((result)=>{
          
              if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${_id}`, {
                  method: "DELETE"
              })
              .then((res)=>res.json())
              .then((result)=>{
                console.log(result)
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                const remainingUsers = users.filter((single)=>single._id !== _id)
                setUsers(remainingUsers)
              })
             
            
               
              }
             
          })
        
         
        
    }
  return (
  <div>
    <Navbar></Navbar>
      <div className='mx-auto w-10/12 py-10 bg-indigo-600'>
     <h2 className='text-center text-4xl font-extrabold text-white'>Usres: {users.length}</h2>
     
     <div className='text-center my-10 text-white text-xl'>
       
       <div className="overflow-x-auto">
  <table className="table mt-10">
    {/* head */}
    <thead>
      <tr className='text-white text-xl'>
       
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Last SignIn</th>
        <th>Creation at</th>
      </tr>
      </thead>
      <tbody>
      {users.map((user)=>  <tr key={user._id} className='text-white text-lg'>
       
        <td>{user._id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.lastSignInTime}</td>
        <td>{user.timeNew}</td>
        <td>
            <button className='btn mr-5'>E</button>
            <button onClick={()=>handleDelete(user._id)} className='btn '>X</button>
        </td>
      </tr>)}
      </tbody>
     
   
   
  </table>
</div>
     </div>
    </div>
  </div>
  )
}

