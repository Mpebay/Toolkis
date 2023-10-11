import React from 'react'

const Cart = () => {
   
  return (
    <div className='w-full h-screen'>
            
        <div className='w-full min-h-screen bg-[#f0ebe3] flex items-center flex-col gap-3'>
            <div className='w-5/6 font-bold text-xl flex text-start mt-2'>Products</div>
            <div className='w-5/6 h-20 bg-gray-400 flex items-center gap-2 rounded-lg p-2 justify-around relative shadow-md hover:scale-110 transform duration-300 cursor-pointer'>
                <img className='w-10 h-10 md:w-14 md:h-14 border border-black p-1 rounded-lg' src="./martillo.png" alt="" />
                <p>Description</p>
                <form className='text-sm' action="">Qty.</form>
                <input className='w-10 text-center rounded-md' type="number" min="1" max="100" name="" id="" />
                <p className=' text-center text-sm'>$150.-</p>
                <img className='w-3 h-3 cursor-pointer absolute top-2 right-2' src="./cerrar.png" alt="" />  
            </div>
            
            <div className='w-5/6 flex justify-end'>
                <div className='w-full h-6 flex items-center justify-end gap-4 p-2 font-bold'>
                    <p>TOTAL</p>
                    <p>$ .-</p>
                </div>
                
            </div>
            <div className='w-5/6 text-sm flex gap-2 justify-between'>
                <div className='flex gap-4'>
                    <button className='bg-[#7D9D9C] rounded-md p-2 hover:scale-110 transform duration-300'>Add more products</button>
                    <button className='bg-red-700 text-white rounded-md p-2 hover:bg-red-700 hover:scale-110 transform duration-300'>Clear cart</button>
                </div>
                <button className='bg-[#7D9D9C] rounded-md p-2 hover:bg-emerald-600 hover:scale-110 hover:font-bold transform duration-300'>Complete purchase</button>
            </div>
            
        </div>
    <div className='w-full h-32 bg-[#053b50]'></div>
</div>
  )
}

export default Cart