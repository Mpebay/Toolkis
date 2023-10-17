import React from 'react'

const WorkWithUs = () => {
  return (
    <div className='w-full h-screen bg-[#f0ebe3]'>
        <div className='w-full h-12 mt-20 flex justify-center '>
      <h1 className='text-5xl font-semibold text-[#053b50]'>WORK WITH US</h1>
      </div>
    <div className='flex justify-center'>
        <h1 className='text-3xl text-[#053b50] font-semibold mt-8'>Featured Job Offers</h1>
    </div>
    <div className='w-full h-96 border border-black flex mt-3'>
        <div className='w-1/3 border border-black m-2 flex flex-col rounded-xl'>
            <div className='h-1/2 rounded-t-xl'>
                <img className="object-cover h-full w-full " src="https://eurotransis.com/wp-content/uploads/2018/12/Qu%C3%A9-es-y-como-se-hace-picking.jpg" alt="" />
            </div>
            <div className='h-1/2 bg-[#053b50]' >
                <div className='h-5 w-24 bg-white font-semibold text-center text-[#053b50]'>FULLTIME</div>
                <h1 className='text-white text-xl text-center mt-6'>Do you want to be part of our family? Dispatch Assistants to work in our distribution center.</h1>
            </div>
        </div>
        <div className='w-1/3 border border-black m-2'>
            <div className='h-1/2 border border-black'></div>
            <div className='h-1/2 border border-black'></div>
        </div>
        <div className='w-1/3 border border-black m-2'>
            <div className='h-1/2 border border-black'></div>
            <div className='h-1/2 border border-black'></div>
        </div>
    </div>
    </div>
  )
}

export default WorkWithUs
