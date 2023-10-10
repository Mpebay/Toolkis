import React from 'react'

const Products = () => {
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
        <div className='flex-col items-center justify-center text-center mt-5'>
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

        <div className='cardcontainer w-full min-h-3/4  flex flex-wrap p-2 items-center justify-center gap-4 md:my-5'>
          <div className='min-h-25 w-36 flex flex-col border border-[#053b50] rounded-md gap-2 items-center md:w-52 md:min-h-64 justify-between hover:scale-110 transform duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 '>
            <h3 className='text-xs text-white font-bold pb-2'>Manu's favorite!</h3>
            <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/specialdrill.jpg" alt="" />
            <p className='text-white text-xs'>A great tool to pleasure your man, just the way he likes it!</p>
            <p className='text-white w-3/4 text-end font-semibold'>$10.³³</p>
            <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]'>See more</button>
          </div>
          <div className='min-h-25 w-36 flex flex-col border border-[#053b50] rounded-md gap-2 items-center md:w-52 md:min-h-64 justify-between hover:scale-110 transform duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 '>
            <h3 className='text-xs text-white font-bold pb-2'>Manu's favorite!</h3>
            <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/specialdrill.jpg" alt="" />
            <p className='text-white text-xs'>A great tool to pleasure your man, just the way he likes it!</p>
            <p className='text-white w-3/4 text-end font-semibold'>$10.³³</p>
            <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]'>See more</button>
          </div>
          <div className='min-h-25 w-36 flex flex-col border border-[#053b50] rounded-md gap-2 items-center md:w-52 md:min-h-64 justify-between hover:scale-110 transform duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 '>
            <h3 className='text-xs text-white font-bold pb-2'>Manu's favorite!</h3>
            <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/specialdrill.jpg" alt="" />
            <p className='text-white text-xs'>A great tool to pleasure your man, just the way he likes it!</p>
            <p className='text-white w-3/4 text-end font-semibold'>$10.³³</p>
            <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]'>See more</button>
          </div>
          <div className='min-h-25 w-36 flex flex-col border border-[#053b50] rounded-md gap-2 items-center md:w-52 md:min-h-64 justify-between hover:scale-110 transform duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 '>
            <h3 className='text-xs text-white font-bold pb-2'>Manu's favorite!</h3>
            <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/specialdrill.jpg" alt="" />
            <p className='text-white text-xs'>A great tool to pleasure your man, just the way he likes it!</p>
            <p className='text-white w-3/4 text-end font-semibold'>$10.³³</p>
            <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]'>See more</button>
          </div>
          <div className='min-h-25 w-36 flex flex-col border border-[#053b50] rounded-md gap-2 items-center md:w-52 md:min-h-64 justify-between hover:scale-110 transform duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 '>
            <h3 className='text-xs text-white font-bold pb-2'>Manu's favorite!</h3>
            <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/specialdrill.jpg" alt="" />
            <p className='text-white text-xs'>A great tool to pleasure your man, just the way he likes it!</p>
            <p className='text-white w-3/4 text-end font-semibold'>$10.³³</p>
            <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]'>See more</button>
          </div>
          <div className='min-h-25 w-36 flex flex-col border border-[#053b50] rounded-md gap-2 items-center md:w-52 md:min-h-64 justify-between hover:scale-110 transform duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 '>
            <h3 className='text-xs text-white font-bold pb-2'>Manu's favorite!</h3>
            <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/specialdrill.jpg" alt="" />
            <p className='text-white text-xs'>A great tool to pleasure your man, just the way he likes it!</p>
            <p className='text-white w-3/4 text-end font-semibold'>$10.³³</p>
            <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]'>See more</button>
          </div>
          <div className='min-h-25 w-36 flex flex-col border border-[#053b50] rounded-md gap-2 items-center md:w-52 md:min-h-64 justify-between hover:scale-110 transform duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 '>
            <h3 className='text-xs text-white font-bold pb-2'>Manu's favorite!</h3>
            <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/specialdrill.jpg" alt="" />
            <p className='text-white text-xs'>A great tool to pleasure your man, just the way he likes it!</p>
            <p className='text-white w-3/4 text-end font-semibold'>$10.³³</p>
            <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]'>See more</button>
          </div>
          <div className='min-h-25 w-36 flex flex-col border border-[#053b50] rounded-md gap-2 items-center md:w-52 md:min-h-64 justify-between hover:scale-110 transform duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 '>
            <h3 className='text-xs text-white font-bold pb-2'>Manu's favorite!</h3>
            <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/specialdrill.jpg" alt="" />
            <p className='text-white text-xs'>A great tool to pleasure your man, just the way he likes it!</p>
            <p className='text-white w-3/4 text-end font-semibold'>$10.³³</p>
            <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]'>See more</button>
          </div>
          <div className='min-h-25 w-36 flex flex-col border border-[#053b50] rounded-md gap-2 items-center md:w-52 md:min-h-64 justify-between hover:scale-110 transform duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 '>
            <h3 className='text-xs text-white font-bold pb-2'>Manu's favorite!</h3>
            <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/specialdrill.jpg" alt="" />
            <p className='text-white text-xs'>A great tool to pleasure your man, just the way he likes it!</p>
            <p className='text-white w-3/4 text-end font-semibold'>$10.³³</p>
            <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]'>See more</button>
          </div>
          <div className='min-h-25 w-36 flex flex-col border border-[#053b50] rounded-md gap-2 items-center md:w-52 md:min-h-64 justify-between hover:scale-110 transform duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 '>
            <h3 className='text-xs text-white font-bold pb-2'>Manu's favorite!</h3>
            <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/specialdrill.jpg" alt="" />
            <p className='text-white text-xs'>A great tool to pleasure your man, just the way he likes it!</p>
            <p className='text-white w-3/4 text-end font-semibold'>$10.³³</p>
            <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]'>See more</button>
          </div>
          <div className='min-h-25 w-36 flex flex-col border border-[#053b50] rounded-md gap-2 items-center md:w-52 md:min-h-64 justify-between hover:scale-110 transform duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 '>
            <h3 className='text-xs text-white font-bold pb-2'>Manu's favorite!</h3>
            <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/specialdrill.jpg" alt="" />
            <p className='text-white text-xs'>A great tool to pleasure your man, just the way he likes it!</p>
            <p className='text-white w-3/4 text-end font-semibold'>$10.³³</p>
            <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]'>See more</button>
          </div>
          <div className='min-h-25 w-36 flex flex-col border border-[#053b50] rounded-md gap-2 items-center md:w-52 md:min-h-64 justify-between hover:scale-110 transform duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 '>
            <h3 className='text-xs text-white font-bold pb-2'>Manu's favorite!</h3>
            <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/specialdrill.jpg" alt="" />
            <p className='text-white text-xs'>A great tool to pleasure your man, just the way he likes it!</p>
            <p className='text-white w-3/4 text-end font-semibold'>$10.³³</p>
            <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]'>See more</button>
          </div>
          <div className='min-h-25 w-36 flex flex-col border border-[#053b50] rounded-md gap-2 items-center md:w-52 md:min-h-64 justify-between hover:scale-110 transform duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 '>
            <h3 className='text-xs text-white font-bold pb-2'>Manu's favorite!</h3>
            <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/specialdrill.jpg" alt="" />
            <p className='text-white text-xs'>A great tool to pleasure your man, just the way he likes it!</p>
            <p className='text-white w-3/4 text-end font-semibold'>$10.³³</p>
            <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]'>See more</button>
          </div>
          <div className='min-h-25 w-36 flex flex-col border border-[#053b50] rounded-md gap-2 items-center md:w-52 md:min-h-64 justify-between hover:scale-110 transform duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 '>
            <h3 className='text-xs text-white font-bold pb-2'>Manu's favorite!</h3>
            <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/specialdrill.jpg" alt="" />
            <p className='text-white text-xs'>A great tool to pleasure your man, just the way he likes it!</p>
            <p className='text-white w-3/4 text-end font-semibold'>$10.³³</p>
            <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]'>See more</button>
          </div>
          <div className='min-h-25 w-36 flex flex-col border border-[#053b50] rounded-md gap-2 items-center md:w-52 md:min-h-64 justify-between hover:scale-110 transform duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 '>
            <h3 className='text-xs text-white font-bold pb-2'>Manu's favorite!</h3>
            <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/specialdrill.jpg" alt="" />
            <p className='text-white text-xs'>A great tool to pleasure your man, just the way he likes it!</p>
            <p className='text-white w-3/4 text-end font-semibold'>$10.³³</p>
            <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]'>See more</button>
          </div>
          <div className='min-h-25 w-36 flex flex-col border border-[#053b50] rounded-md gap-2 items-center md:w-52 md:min-h-64 justify-between hover:scale-110 transform duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 '>
            <h3 className='text-xs text-white font-bold pb-2'>Manu's favorite!</h3>
            <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/specialdrill.jpg" alt="" />
            <p className='text-white text-xs'>A great tool to pleasure your man, just the way he likes it!</p>
            <p className='text-white w-3/4 text-end font-semibold'>$10.³³</p>
            <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]'>See more</button>
          </div>
          <div className='min-h-25 w-36 flex flex-col border border-[#053b50] rounded-md gap-2 items-center md:w-52 md:min-h-64 justify-between hover:scale-110 transform duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 '>
            <h3 className='text-xs text-white font-bold pb-2'>Manu's favorite!</h3>
            <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/specialdrill.jpg" alt="" />
            <p className='text-white text-xs'>A great tool to pleasure your man, just the way he likes it!</p>
            <p className='text-white w-3/4 text-end font-semibold'>$10.³³</p>
            <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]'>See more</button>
          </div>
          <div className='min-h-25 w-36 flex flex-col border border-[#053b50] rounded-md gap-2 items-center md:w-52 md:min-h-64 justify-between hover:scale-110 transform duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 '>
            <h3 className='text-xs text-white font-bold pb-2'>Manu's favorite!</h3>
            <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/specialdrill.jpg" alt="" />
            <p className='text-white text-xs'>A great tool to pleasure your man, just the way he likes it!</p>
            <p className='text-white w-3/4 text-end font-semibold'>$10.³³</p>
            <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]'>See more</button>
          </div>
          <div className='min-h-25 w-36 flex flex-col border border-[#053b50] rounded-md gap-2 items-center md:w-52 md:min-h-64 justify-between hover:scale-110 transform duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 '>
            <h3 className='text-xs text-white font-bold pb-2'>Manu's favorite!</h3>
            <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/specialdrill.jpg" alt="" />
            <p className='text-white text-xs'>A great tool to pleasure your man, just the way he likes it!</p>
            <p className='text-white w-3/4 text-end font-semibold'>$10.³³</p>
            <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]'>See more</button>
          </div>
          <div className='min-h-25 w-36 flex flex-col border border-[#053b50] rounded-md gap-2 items-center md:w-52 md:min-h-64 justify-between hover:scale-110 transform duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 '>
            <h3 className='text-xs text-white font-bold pb-2'>Manu's favorite!</h3>
            <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/specialdrill.jpg" alt="" />
            <p className='text-white text-xs'>A great tool to pleasure your man, just the way he likes it!</p>
            <p className='text-white w-3/4 text-end font-semibold'>$10.³³</p>
            <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]'>See more</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Products