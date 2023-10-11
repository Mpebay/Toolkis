import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import allProducts from '../../redux/actions/actionProducts'
import { Link } from 'react-router-dom'



const Products = () => {
  const dispatch = useDispatch()
  const [products, setProducts]= useState([])
  const allItems = useSelector((store)=>store.itemsReducer.allItems)
  console.log(allItems)
  useEffect(()=>{
    dispatch(allProducts()),
    setProducts(allItems)
  }, [])

  return (
    <div className='w-full min-h-screen bg-[#f0ebe3] flex flex-col md:flex-row p-3'>
      <div className='filterbox rounded-md border-2 mb-2 border-[#053b50] p-4  gap-3 flex flex-col items-center justify-center md:w-1/4 md:h-2/3 md: md:py-10 md:sticky top-10 md:gap-20 bg-[#0e4355b2]'>
        <h1 className='text-white font-semibold'>Filters:</h1>
        <input type="search" name="" id="" />
        <div className='flex w-full items-center gap-3 flex-col md:gap-5'>
          <select className='w-1/2 md:w-3/4' name="" id="">
            <option value="">Screwdrivers</option>
            <option value="">Hammers</option>
            <option value="">Clippers</option>
          </select>
          <select className='w-1/2 md:w-3/4' name="" id="">
            <option value="">Screwdrivers</option>
            <option value="">Hammers</option>
            <option value="">Clippers</option>
          </select>
          <select className='w-1/2 md:w-3/4' name="" id="">
            <option value="">Screwdrivers</option>
            <option value="">Hammers</option>
            <option value="">Clippers</option>
          </select>
          <select className='w-1/2 md:w-3/4' name="" id="">
            <option value="">Screwdrivers</option>
            <option value="">Hammers</option>
            <option value="">Clippers</option>
          </select>
          <select className='w-1/2 md:w-3/4' name="" id="">
            <option value="">Screwdrivers</option>
            <option value="">Hammers</option>
            <option value="">Clippers</option>
          </select>
        </div>
      </div>

      <div>
        <div className='flex-col items-center justify-center max-md:mb-3 text-center mt-5'>
            <h2>Order:</h2>
            <select className='w-36 border-2 border-[#0e4355b2]' name="" id="">
              <option value="">Price ↓</option>
              <option value="">Price ↑</option>
              <option value="">A-Z</option>
              <option value="">Z-A</option>
              <option value="">Brand</option>
              <option value="">Discount</option>
            </select>
        </div>
        <div  className='cardcontainer w-full min-h-3/4  flex flex-wrap p-2 items-center justify-center gap-5 md:my-5'>
        {products && products.map(product=>{
           
         return <div key={product?._id} className='h-25 w-36 flex flex-col border border-[#053b50] rounded-md gap-2 items-center md:w-52 md:h-80 justify-between md:hover:scale-110 md:transform md:duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 '>
            <h3 className='text-xs text-white font-bold pb-2'>{product?.name}</h3>
            <img className='w-full h-20 bg-white border md:w-full md:h-40 md:object-contain' src={product?.photo} alt="" />
            <p className='text-white text-xs line-clamp-3'>{product?.description}</p>
            <p className='text-white w-3/4 text-end font-semibold'>${product?.price}</p>
            <Link to={`/${product?._id}/details`} className='w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]'>See more</Link>
          </div>
        
        })}
        </div>

      </div>
    </div>
  )
}

export default Products