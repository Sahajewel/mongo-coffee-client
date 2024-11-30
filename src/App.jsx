import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./Components/CoffeeCard"
import { useState } from "react";



function App() {

  const LoadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(LoadedCoffees)
  return (
    <>
    
      <h1 className='text-5xl text-purple-600 text-center my-10'>Hot Coffee</h1>
      <h1 className='text-5xl text-purple-600 text-center my-10'>Coffee: {coffees.length}</h1>
      <div className=" w-10/12 mx-auto grid md:grid-cols-2 gap-5">
      {
        coffees.map((coffee)=><CoffeeCard coffees={coffees} setCoffees={setCoffees} key={coffee._id} coffee={coffee}></CoffeeCard>)
      }
      </div>
     
     
    </>
  )
}

export default App
