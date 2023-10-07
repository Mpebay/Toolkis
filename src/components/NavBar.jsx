import React from 'react'
import userIcon from "../../public/user-circle-svgrepo-com.svg"
import burguerMenu from "../../public/menu-alt-03-svgrepo-com.svg"
import searchIcon from "../../public/search-svgrepo-com.svg"

export const NavBar = () => {
    
  return (
    <div className="bg-[#053b50] py-3">
        <div className="flex text-sm items-center justify-center">
          <img
            className=" h-14"
            src="../public/png-clipart-computer-icons-others-miscellaneous-desktop-wallpaper.png"
            alt=""
          />
          <h1 className=" flex text-6xl items-center text-cyan-50 ">
            <spam className="text-amber-600 font-extrabold text-6xl">T</spam>
            oolki<span className="text-amber-600">s.</span>
          </h1>
        </div>
        <div className="w-full min-h-32  text-xl text-white p-3 justify-between items-center flex  ">
            <img className="h-12 cursor-pointer " src={burguerMenu} alt="menu" />
            <img className='h-10' onClick={()=>setSearch(!search)} src={searchIcon} alt="search" />
            <img className="h-10 cursor-pointer" src={userIcon} alt="user icon" />
        </div>
        {search ? <div className='justify-center flex gap-2 px-2 items-center w-full'>
          <input className="w-9/12 h-5" type="text" />
          <p className='font-bold text-amber-600 border border-amber-600 p-1 cursor-pointer'>search</p>
        </div> : null}
      </div>
  )
}
