import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
<>  
    <div className=' flex flex-col bg-[#f0ebe3] md:flex md:flex-wrap md:min-h-screen'>
        <div className='flex h-1/6 justify-center items-center md:justify-center '>
            <h1 className='text-xl md:text-5xl font-semibold mt-8'>CONTACT US</h1>
        </div>
        <div className='flex items-center px-8'>
            <div className=' md:w-1/2 md:h-screen '>
                <div className='w-full h-5/6 flex flex-col p-4 gap-2 justify-center'>
                    <div className='flex flex-col'>
                        <label className=' font-semibold' htmlFor="">Name:</label>
                        <input className='border border-gray-300 outline-none shadow-black shadow-sm ' type="text" name="" id="" />
                    </div>
                    <div className='flex flex-col'>
                        <label className=' font-semibold' htmlFor="">Email</label>
                        <input className='border border-gray-300 outline-none shadow-black shadow-sm' type="email" name="" id="" />
                    </div>
                    <div className='flex flex-col'>
                        <label className=' font-semibold' htmlFor="">Message</label>
                        <textarea className='w-full border resize-none border-gray-300 outline-none shadow-black shadow-sm' name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className='flex justify-center md:flex md:justify-end'>
                        <button className='flex w-3/4 justify-center m-2 bg-[#7D9D9C] rounded-md p-2 md:w-1/4 md:hover:bg-emerald-600 text-white md:hover:scale-110 md:hover:font-bold md:transform duration-300' type="submit">Send</button>
                    </div>
                    <div className=' flex flex-col text-justify gap-2'>
                        <div>
                            <p className=' font-semibold'>You can use the form to send us a message, or choose one of the following options to contact us.</p>
                        </div>
                        <div className='md:flex md:justify-between'>
                            <Link className='flex gap-2'><img className='w-5 h-5' src="./emailIcon.png" alt="" />toolkis@toolkis.com</Link>
                            <Link className='flex gap-2'><img className='w-5 h-5' src="./telephoneIcon.png" alt="" />+1 654-641-9812</Link>
                            <Link className='flex gap-2'><img className='w-5 h-5' src="./instagramIcon.png" alt="" />toolkisok</Link>
                        </div>
                    </div>
                </div>  
            </div>
            
            <img className="w-1/2 opacity-60 rounded-md ms-2 me-2 mb-32 max-md:hidden object-cover " src="./imgContacto.jpg" alt="" />
            
        </div>
    </div>
</>
  )
}

export default Contact