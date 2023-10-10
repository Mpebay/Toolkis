import React from 'react'
import { delay, motion } from 'framer-motion'


const MobileSearchInput = () => {
  return (
    <motion.div key={"MobileSearchingInput"} initial={{y:-15}} animate={{y:0}} exit={{y:-15}} className="justify-center flex gap-2 px-2  items-center w-full lg:hidden">
            <input className="w-9/12 h-5" type="text" />
            <p className="font-bold text-[#eea221] border-l border-[#eea221]  py-1 pl-1 cursor-pointer">
              Search
            </p>
    </motion.div>
  )
}

export default MobileSearchInput