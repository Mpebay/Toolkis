import React from 'react'

const Login = () => {
  return (
    <div className='w-full min-h-screen bg-[#f0ebe3] flex flex-col text-center justify-around p-5 items-center'>
        <div className='w-full min-h-12 text-[#f0ebe3] p-5 bg-[#053b50]'>
            <h1 className='font-bold'>Welcome back!</h1>
            <h3 className='font-semibold text-sm'>Sign in, and keep enjoying our shopping experience!</h3>
        </div>
        
        <form className='min-w-1/2 min-h-5/6 rounded-lg gap-3 p-4  border-2 flex flex-col border-[#053b50] bg-[#0e4355b2]' action="">
            <label htmlFor="">Email:</label>
            <input className='border-[#053b50] border-2' type="text" />
            <label htmlFor="">Password:</label>
            <input className='border-[#053b50] border-2' type="text" />
            <button className='w-2/3 h-7 self-center text-xs text-white rounded-lg text-center bg-[#053b50]'>Login</button>
        </form>
    </div>
  )
}

export default Login