import React from 'react'

const Register = () => {
  return (
    <div className='w-full min-h-screen bg-[#f0ebe3] flex flex-col text-center justify-around p-5 items-center'>
        <div className='w-full min-h-12 text-[#f0ebe3] p-5 bg-[#053b50]'>
            <h1 className='font-bold'>Welcome!</h1>
            <h3 className='font-semibold text-sm'>Sign up, and unlock full access to our website!</h3>
        </div>
        
        <div className='w-full min-h-5/6 rounded-lg gap-3 p-4 flex flex-col md:flex-row md:w-2/3 md:gap-10'>
            <form className='w-full min-h-5/6 rounded-lg gap-3 p-4 border-2 flex flex-col border-[#053b50] bg-[#0e4355b2]' action="">
                <label htmlFor="">Email:</label>
                <input className='border-[#053b50] border-2' type="text" />
                <label htmlFor="">Password:</label>
                <input className='border-[#053b50] border-2' type="text" />
                <label htmlFor="">Photo:</label>
                <input className='border-[#053b50] border-2' type="text" />
                <label htmlFor="">Phone number (optional):</label>
                <input className='border-[#053b50] border-2' type="text" />
                <button className='w-2/3 h-7 self-center text-xs text-white rounded-lg text-center bg-[#053b50]'>Register</button>
            </form>
            <img className='max-md:hidden md:w-1/2 object-cover' src="../public/specialdrill.j" alt="" />
        </div>    
    </div>
  )
}

export default Register
