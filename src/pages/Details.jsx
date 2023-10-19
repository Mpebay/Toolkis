import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'


const Details = () => {
    const products = useSelector(store => store.itemsReducer.allItems)
    const { role } = useSelector((store)=> store.userReducer.user)
    const { id } = useParams()
    console.log(id);
    console.log(products);
    const product = products.find(product => product._id === id)
    console.log(product);
    return (
        <div className='w-full min-h-screen px-10 pt-5 justify-center items-center gap-10 flex flex-col bg-[#f0ebe3]'>
            <div className='border-2 md:w-5/6 border-[#053b50] bg-[#0e4355b2] p-3 md:p-10 rounded-lg h-screen justify-center items-center flex flex-col md:flex-row md:gap-5'>
                <img className='max-[450px]:w-full w-2/3 h-1/2 object-cover rounded-lg md:w-1/2 md:h-full' src={product?.photo} alt={product?.name} />
                <div className='w-full flex flex-col gap-5 p-5 min-h-1/4 justify-around text-center items-center md:h-full md:w-1/2'>
                    <h1 className='text-white text-xl font-bold md:text-3xl'>{product?.name}</h1>
                    <h3 className='text-white text-xs md:text-lg text-justify'>{product?.description}</h3>
                    <h3 className='text-white font-semibold md:text-3xl'>{product?.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h3>
                    {role === 2 ? (
                        <Link to={`/${id}/edit`} className="w-48 bg-[#f0ebe3] border-2 border-[#053b50] h-12 flex justify-center items-center rounded-lg">
                            Edit product
                        </Link>
                    ) : null}
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
                                Power Supply:
                            </td>
                            <td className='border-2 border-gray-500 w-24 text-center'>
                                {product?.details?.PowerSupply}
                            </td>
                        </tr>
                        <tr className='border-2 border-gray-500'>
                            <td className='border-2 border-gray-500 w-24 text-center'>
                                Speeds:
                            </td>
                            <td className='border-2 border-gray-500 w-24 text-center'>
                                {product?.details?.Speeds}
                            </td>
                        </tr>
                        <tr className='border-2 border-gray-500'>
                            <td className='border-2 border-gray-500 w-24 text-center'>
                                Voltage:
                            </td>
                            <td className='border-2 border-gray-500 w-24 text-center'>
                                {product?.details?.Voltage}
                            </td>
                        </tr>
                        <tr className='border-2 border-gray-500'>
                            <td className='border-2 border-gray-500 w-24 text-center'>
                                Amperage:
                            </td>
                            <td className='border-2 border-gray-500 w-24 text-center'>
                                {product?.details?.Amperage}
                            </td>
                        </tr>
                        <tr className='border-2 border-gray-500'>
                            <td className='border-2 border-gray-500 w-24 text-center'>
                                Material:
                            </td>
                            <td className='border-2 border-gray-500 w-24 text-center'>
                                {product?.details?.Material}
                            </td>
                        </tr>
                        <tr className='border-2 border-gray-500'>
                            <td className='border-2 border-gray-500 w-24 text-center'>
                                Item Weight:
                            </td>
                            <td className='border-2 border-gray-500 w-24 text-center'>
                                {product?.details?.ItemWeight}
                            </td>
                        </tr>
                        <tr className='border-2 border-gray-500'>
                            <td className='border-2 border-gray-500 w-24 text-center'>
                                Item Dimensions:
                            </td>
                            <td className='border-2 border-gray-500 w-24 text-center'>
                                {product?.details?.ItemDimensions}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Details


