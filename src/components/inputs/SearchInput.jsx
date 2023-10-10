import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const SearchInput = () => {
  return (

    <motion.div key={"searchInput"} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:[0]}} className="justify-center lg:flex gap-2 px-2  items-center w-8/12 hidden">
              <input className="w-full h-5 rounded-sm" type="text" />
              <p className="font-bold text-[#eea221] border-l border-[#eea221]  py-1 pl-1 cursor-pointer">
                Search
              </p>
   </motion.div>
  )
}

export default SearchInput