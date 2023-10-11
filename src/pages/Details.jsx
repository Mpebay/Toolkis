import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Details = () => {
   const products = useSelector(store => store.itemsReducer.allItems)
   const { id }= useParams() 
   console.log(id);
   console.log(products);
   const product = products.find(product => product._id === id)
   console.log(product);
  return (
    <div className='w-full min-h-screen px-10 pt-5 gap-10 flex flex-col bg-[#f0ebe3]'>
        <div className='border-2 border-[#053b50] bg-[#0e4355b2] p-3 md:p-10 rounded-lg h-screen flex flex-col md:flex-row md:gap-5'>
            <img className='w-full h-3/4 object-cover rounded-lg md:w-1/2 md:h-full' src={product?.photo} alt={product?.name} />
            <div className='w-full flex flex-col gap-5 p-5 min-h-1/4 justify-around text-center items-center md:h-full md:w-1/2'>
                <h1 className='text-white text-xl font-bold md:text-5xl'>{product?.name}</h1>
                <h3 className='text-white text-xs md:text-2xl text-justify'>{product?.description}</h3>
                <h3 className='text-white font-semibold md:text-5xl'>${product?.price}</h3>
            </div>
        </div>
        <div className='w-full flex flex-col mb-2 opacity-80 md:w-1/2 md:self-center'>
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