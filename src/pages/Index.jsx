import React, { useState } from 'react'
import userIcon from "../../public/user-circle-svgrepo-com.svg"
import burguerMenu from "../../public/menu-alt-03-svgrepo-com.svg"
import searchIcon from "../../public/search-svgrepo-com.svg"

const Index = () => {
   const [search , setSearch] = useState(false)
   const [show , setShow] = useState(false)
  return (
    <div className="w-full h-screen">
      <div className="bg-[#053b50] py-3 relative">
        <div className="flex text-sm items-center gap-2 justify-center">
          <img
            className=" h-16"
            src="../public/png-clipart-computer-icons-others-miscellaneous-desktop-wallpaper.png"
            alt=""
          />
          <h1 className=" flex text-6xl items-center text-cyan-50 ">
            <spam className="text-[#eea221] font-extrabold text-6xl">T</spam>
            oolki<span className="text-[#eea221] ">s.</span>
          </h1>
        </div>
        <div className="w-full min-h-32  text-xl text-white p-3 justify-between items-center flex  ">
            <img className="h-12 cursor-pointer " onClick={()=>setShow(!show)} src={burguerMenu} alt="menu" />
            <img className='h-10' onClick={()=>setSearch(!search)} src={searchIcon} alt="search" />
            <img className="h-10 cursor-pointer" src={userIcon} alt="user icon" />
        </div>
        {search ? <div className='justify-center flex gap-2 px-2 items-center w-full'>
          <input className="w-9/12 h-5" type="text" />
          <p className='font-bold text-[#eea221] border border-[#eea221] p-1 cursor-pointer'>search</p>
        </div> : null}
      </div>
        <div className="w-full min-h-screen bg-[#f0ebe3] flex justify-center">
        </div>
        { show ? <div className='bg-red-800 h-screen w-10/12 absolute z-50 top-0'>
            <p className='cursor-pointer' onClick={()=> setShow(!show)}>x</p>
            <p>hola bb</p>
        </div>: null}
    </div>

  );
};

export default Index