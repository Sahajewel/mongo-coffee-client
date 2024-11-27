import React from 'react'

export default function CoffeeCard({coffee}) {
    const {_id,name, quantity, supplier, taste, category, details, photo} = coffee
    const handleDelete = (_id)=>{
      console.log(_id)
      fetch(`http://localhost:5000/addCoffee/${_id}`, {
        method: "DELETE"
      })
      .then((res)=>res.json())
      .then((result)=>{
        console.log(result)
      })
    }
  return (

    <div className="hero bg-base-200 ">
    <div className="hero-content flex-col ">
      <img className='lg:w-96 md:w-72 w-52'
        src={photo} />
      <div>
        <h1 className="text-2xl md:text-4xl  font-bold">Name: {name}</h1>
        <p className="py-6">
         Quantity: {quantity}
        </p>
        <p>Supplier Name: {supplier}</p>
        <p>Taste: {taste}</p>
        <div className="bg-purple-500 join join-vertical lg:join-horizontal my-5  p-3">
            <button className="btn join-item btn-success border-2 border-black  ">View</button>
            <button className="btn join-item btn- border-2 border-black ">Edit</button>
            <button onClick={()=>handleDelete(_id)} className="btn    btn-success border-2 border-black  ">X</button>
        </div>
      </div>
    </div>
  </div>
 
  )
}
