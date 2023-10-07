import React from 'react'

const Index = () => {
    return (

        <div className='w-full h-screen'>
               
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
                <div className='w-full min-h-screen bg-[#f0ebe3] flex justify-center'>
                    <input className='w-1/2 h-5' type='text' />
                </div>
            <div className='w-full h-32 bg-[#053b50]'></div>
        </div>


    )
}

export default Index