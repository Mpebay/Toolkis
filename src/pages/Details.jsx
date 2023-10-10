import React from 'react'

const Details = () => {
  return (
    <div className='w-full min-h-screen px-10 pt-5 gap-10 flex flex-col bg-[#f0ebe3]'>
        <div className='border-2 border-[#053b50] bg-[#0e4355b2] p-3 md:p-10 rounded-lg h-screen flex flex-col md:flex-row md:gap-5'>
            <img className='w-full h-3/4 object-cover rounded-lg md:w-1/2 md:h-full' src="../public/specialdrill.jpg" alt="" />
            <div className='w-full flex flex-col gap-5 p-5 min-h-1/4 justify-around text-center items-center md:h-full md:w-1/2'>
                <h1 className='text-white text-xl font-bold md:text-2xl'>Manu's favorite tool</h1>
                <h3 className='text-white text-xs'>A great tool to pleasure your man, just the way he likes it!</h3>
                <h3 className='text-white font-semibold'>$10.³³</h3>
            </div>
        </div>
        <div className='w-full flex flex-col opacity-80 md:w-1/2 md:self-center'>
            <table className='border-2 border-gray-500'>
                <thead>
                    <tr className='border-2 border-gray-500'>
                        <th colSpan={2} className=''>
                            Item description:
                        </th>
                    </tr>
                </thead>
                <tbody className='border-2 border-gray-500'>
                    <tr className='border-2 border-gray-500'>
                        <td className='border-2 border-gray-500 w-24 text-center'>
                            Sarasa
                        </td>
                        <td className='border-2 border-gray-500 w-24 text-center'>
                            asdasd
                        </td>
                    </tr>
                    <tr className='border-2 border-gray-500'>
                        <td className='border-2 border-gray-500 w-24 text-center'>
                            Sarasa
                        </td>
                        <td className='border-2 border-gray-500 w-24 text-center'>
                            asdasd
                        </td>
                    </tr>
                    <tr className='border-2 border-gray-500'>
                        <td className='border-2 border-gray-500 w-24 text-center'>
                            Sarasa
                        </td>
                        <td className='border-2 border-gray-500 w-24 text-center'>
                            asdasd
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Details