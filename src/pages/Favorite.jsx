import React from 'react'
import { Link } from 'react-router-dom'

const Favorite = () => {
  return (
    <>
        
        <div className='w-full bg-[#f0ebe3] h-screen md:min-w-full md:min-h-screen flex flex-col justify-start items-center'>
            <div className=' flex w-11/12 mt-2 md:mt-8 md:justify-start md:ps-4 font-bold text-xl items-center justify-center'>
                <h1>Favorites</h1>
            </div>
            <div className=' w-11/12 h-48 flex justify-center items-center mt-2 md:mt-4 gap-4 border-t-2 border-b-2 border-gray-300'>
                <img className=' w-28 h-28 md:w-44 md:h-44' src="./drill.jpg" alt="" />
                <div className=' flex flex-col justify-center items-start'>
                    <Link className='line-clamp-1'>ACA VA EL TITULO</Link>
                    <p>$15.874</p>
                    <p className='line-clamp-1'>minima descrip</p>
                    <button className='bg-red-500 text-white rounded-lg px-2 mt-4'>Delete</button>
                </div>
                
            </div>
            
        </div>
    </>
  )
}

export default Favorite