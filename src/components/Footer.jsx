import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import facebook from "../../public/facebook-svgrepo-com.svg"
import instagram from "../../public/instagram-svgrepo-com.svg"
import youtube from "../../public/youtube-svgrepo-com.svg"
import twitter from "../../public/twitter-svgrepo-com.svg"
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
        <AnimatePresence>
            <motion.div className='min-h-[20vh] bg-[#053b50] text-white flex  flex-col md:flex-row w-full gap-5 font-light py-8 px-1 border-t-2 border-[#eea221]'>
                <div className='md:w-8/12 flex divide-x divide-[#eea221] justify-center'>
                    <div  className='w-1/2 flex md:text-center flex-col pl-1'>
                        <p className='text-center font-bold'>Contact</p>
                        <Link to={"/"} className="hover:text-[#eea221] cursor-pointer">Home</Link>
                        <Link to={"/products"} className="hover:text-[#eea221] cursor-pointer">All Products</Link>
                        <Link to={"/diy"} className="hover:text-[#eea221] cursor-pointer">DIY</Link>
                        <Link to={"/contact"} className="hover:text-[#eea221] cursor-pointer">Contact Us</Link>
                        <Link to={"/workwithus"} className="hover:text-[#eea221] cursor-pointer">Work With Us</Link>
                    </div>
                    <div className='w-1/2 flex md:text-center px-3 flex-col pr-1'>
                        <p className='text-center font-bold'>Store</p>
                        <Link to={"/category/power tools"} className="hover-text-[#eea221] cursor-pointer">Power Tools</Link>
                        <Link to={"/category/home and garden"} className="hover-text-[#eea221] cursor-pointer">Home And Garden</Link>
                        <Link to={"/category/hardware"} className="hover-text-[#eea221] cursor-pointer">Hardware</Link>
                        <Link to={"/category/hand tools"} className="hover-text-[#eea221] cursor-pointer">Hand Tools</Link>
                    </div>
                </div>
                <div className='flex flex-col md:w-4/12 items-center p-2 gap-4 md:p-0'>

                    <div className=' flex items-center justify-center w-1/2'>
                        <p className='font-bold'>Follow Us:</p>
                    </div>
                    <div className='flex w-1/2 justify-between gap-1'>   
                        <Link to={"https://www.facebook.com/"}><img className='h-10' src={facebook} alt="facebook logo" /></Link>
                        <Link to={"https://www.instagram.com/"}><img className='h-10' src={instagram} alt="instagram logo" /></Link>
                        <Link to={"https://www.youtube.com/"}><img className='h-10' src={youtube} alt="youtube logo" /></Link>
                        <Link to={"https://twitter.com/?lang=en"}><img className='h-10' src={twitter} alt="twitter logo" /></Link>
                        
                    </div>
                    <div className='font-bold'>
                    <p>Email: toolkis@toolkis.com</p>
                    <p>Tel: +1 654-641-9812</p>

                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    </>
  )
}

export default Footer