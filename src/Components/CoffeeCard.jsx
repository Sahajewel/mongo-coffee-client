import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import getRandomFruitsName from 'random-fruits-name'

export default function CoffeeCard({coffee,coffees,setCoffees}) {
    const {_id,name, quantity, supplier, taste, category, details, photo} = coffee
   console.log(getRandomFruitsName())
    const handleDelete = (_id)=>{

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
         

          fetch(`http://localhost:5000/addCoffee/${_id}`, {
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
        const remainingCoffee =  coffees.filter((cof)=>cof._id !== _id)
          setCoffees(remainingCoffee)
      })
        }
      });
     
      
    }
  return (

    <div className="hero bg-base-200 ">
    <div className="hero-content flex-col ">
      <img className='lg:w-96 md:w-72 w-52'
        src={photo} />
      <div>
        <h1 className="text-2xl md:text-4xl  font-bold">Name: {name}</h1>
        <button>click</button>
        <p className="py-6">
         Quantity: {quantity}
        </p>
        <p>Supplier Name: {supplier}</p>
        <p>Taste: {taste}</p>
        <div className="bg-purple-500 join join-vertical lg:join-horizontal my-5  p-3">
            <button className="btn join-item btn-success border-2 border-black  ">View</button>
           <Link to={`/updateCoffee/${_id}`}> <button className="btn join-item btn- border-2 border-black ">Edit</button></Link>
            <button onClick={()=>handleDelete(_id)} className="btn    btn-success border-2 border-black  ">X</button>
        </div>
      </div>
    </div>
  </div>
 
  )
}
