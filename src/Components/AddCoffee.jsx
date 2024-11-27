
import Swal from 'sweetalert2'

export default function AddCoffee() {
 
  const handleCoffeeSubmit = (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {name, quantity, supplier, taste, category, details, photo}
    console.log(newCoffee)
    fetch("http://localhost:5000/addCoffee", {
      method:"POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(newCoffee)
      
      
    })
    .then((res)=>res.json())
    .then((data)=>{
     if(data.insertedId){
      Swal.fire({
        title: 'Success!',
        text: 'Successfylly',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
     }
    })
  }
  return (
    <div className='my-10 mx-auto w-10/12'>
      <h1 className='text-5xl font-extrabold text-center mb-10'>Add a Coffee</h1>
      <form onSubmit={handleCoffeeSubmit}>
       {/* name and available */}
       <div className='md:flex gap-5 bg-[#F4F2F0]'>
                <div className="join flex flex-col gap-3 bg-blue-400 p-10 w-full md:w-1/2 mb-5">
                      <p className=" bg-white p-3 w-full rounded-r-full">Add Coffee</p>
                      <input name='name' className="input input-bordered join-item w-full" placeholder="add coffee" />
            
                  </div>
                  <div className="join flex flex-col gap-3 bg-blue-400 p-10 md:w-1/2 mb-5">
                      <p className=" bg-white p-3 w-full rounded-r-full">Quantity Coffee</p>
                      <input name='quantity' className="input input-bordered join-item" placeholder="quantity coffee" />
            
                  </div>
       </div>
        {/* supplier name */}
       <div className='md:flex gap-5 bg-[#F4F2F0]'>
                <div className="join flex flex-col gap-3 bg-blue-400 p-10 w-full md:w-1/2 mb-5">
                      <p className=" bg-white p-3 w-full rounded-r-full">Supplier Name</p>
                      <input name='supplier' className="input input-bordered join-item w-full" placeholder="supplier name" />
            
                  </div>
                  <div className="join flex flex-col gap-3 bg-blue-400 p-10 md:w-1/2 mb-5">
                      <p className=" bg-white p-3 w-full rounded-r-full">Taste</p>
                      <input name='taste' className="input input-bordered join-item" placeholder="taste" />
            
                  </div>
       </div>
       <div className='md:flex gap-5 bg-[#F4F2F0]'>
                <div className="join flex flex-col gap-3 bg-blue-400 p-10 w-full md:w-1/2 mb-5">
                      <p className=" bg-white p-3 w-full rounded-r-full">Category</p>
                      <input name='category' className="input input-bordered join-item w-full" placeholder="category" />
            
                  </div>
                  <div className="join flex flex-col gap-3 bg-blue-400 p-10 md:w-1/2 mb-5">
                      <p className=" bg-white p-3 w-full rounded-r-full">Details</p>
                      <input name='details' className="input input-bordered join-item" placeholder="details" />
            
                  </div>
       </div>
        
     
        
       <div className='md:flex gap-5 bg-[#F4F2F0]'>
                <div className="join flex flex-col gap-3 bg-blue-400 p-10 w-full  mb-5">
                      <p className=" bg-white p-3 w-full rounded-r-full">Photo Url</p>
                      <input name='photo' className="input input-bordered join-item w-full" placeholder="photo url" />
            
                  </div>
               
       </div>
       <input type='submit' value="add coffee" className=" w-full btn btn-primary text-lg text-purple-600 " placeholder="Add Coffee" />
        
      </form>
    </div>
  )
}
