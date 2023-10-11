import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import facebook from "../../public/facebook-svgrepo-com.svg"
import instagram from "../../public/instagram-svgrepo-com.svg"
import youtube from "../../public/youtube-svgrepo-com.svg"
import twitter from "../../public/twitter-svgrepo-com.svg"

const Footer = () => {
  return (
    <>
        <AnimatePresence>
            <motion.div className='min-h-[20vh] bg-[#053b50] text-white flex  flex-col w-full gap-5 font-light py-8 px-1 border-t-2 border-[#eea221]'>
                <div className='w-full flex divide-x divide-[#eea221] justify-center'>
                    <div  className='w-1/2 flex flex-col pl-1'>
                        <p className='text-center font-bold'>Contact</p>
                        <p>About Us</p>
                        <p>Contact</p>
                        <p>Terms & Privacy</p>
                    </div>
                    <div className='w-1/2 flex flex-col pr-1'>
                        <p className='text-center font-bold'>Store</p>
                        <p className='text-end'>Sales</p>
                        <p className='text-end'>category 1</p>
                        <p className='text-end'>category 2</p>
                        <p className='text-end'>category 3</p>
                        <p className='text-end'>category 4</p>
                    </div>
                </div>
                <div className='flex flex-col items-center p-2'>
                    <div className=' flex items-center justify-center w-1/2'>
                        <p className='font-bold'>Follow Us:</p>
                    </div>
                    <div className='flex w-1/2 justify-between gap-1'>   
                        <img className='h-10' src={facebook} alt="facebook logo" />
                        <img className='h-10' src={instagram} alt="instagram logo" />
                        <img className='h-10' src={youtube} alt="youtube logo" />
                        <img className='h-10' src={twitter} alt="twitter logo" />
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    </>
  )
}

export default Footer