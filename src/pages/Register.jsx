import React from 'react'

const Register = () => {
  return (
    <div className="h-screen w-full items-center justify-center">
    
    <div className='w-full min-h-32 bg-[#053b50] text-xl text-white p-5 justify-between items-center flex gap-2 '>
                <div>
                    <img className='w-10 h-8' src="./public/descarga.png" alt="" />
                </div>
                <div className='flex text-sm items-center justify-center'>
                    <h1>Toolkis</h1>
                    <img className='w-14 h-10' src="../public/png-clipart-computer-icons-others-miscellaneous-desktop-wallpaper.png" alt="" />
                </div>
                <div>
                    <button>Sign In</button>
                </div>
            </div>
        <div className="w-full h-96 bg-[#F0EBE3] flex items-center justify-center">
            <div className="h-72 w-60 rounded-md bg-[#7D9D9C] flex flex-col items-center">
                <img className="h-12 w-12 -mt-6 " src="../../public/png-clipart-computer-icons-user-username-avatar-person.png" alt="" />
                <h1>Sign up</h1>
                <form action="" className="flex  flex-col ">
                    <label htmlFor="">Name & last name</label>
                    <input type="text" />
                    <label htmlFor="">Email</label>
                    <input type="text" />
                    <label htmlFor="">Password</label>
                    <input type="text" />
                    <button>Sign up!</button>
                </form>
                <h3>Are you registered?</h3>
                <button>Sign in here</button>

            </div>
        </div>
        <div className="h-32 w-full">
            Footer
        </div>
    
    </div>
    
)}

export default Register
