import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import cross from "../../../public/cross-small-svgrepo-com.svg"
import arrow from "../../../public/arrow-prev-small-svgrepo-com.svg"


const Display = ({subMenu,setSubMenu,show,setShow,categories,handleList}) => {
  return (
    
    <div className="fixed w-full lg:hidden z-40 top-0 flex ">
    <motion.div
    initial={{x:"-100%"}}
      animate={{ x: 0}}
      transition={{ type: "spring", stiffness: 500, damping: 50 }} 
      exit={{x:"-100%"}}
      className=" bg-[#053b50] h-screen w-full sm:w-10/12 px-3 py-2 border-r-2 border-[#eea221]"
    >
      <div className=" flex justify-end ">
        <motion.img  whileHover={{rotate:360}} className="h-8" onClick={() => setShow(!show)} src={cross} alt="close menu" />
      </div>
    <p onClick={()=> setSubMenu(!subMenu)} className="text-white font-bold text-3xl cursor-pointer ">Product Categories</p>
      {subMenu && <motion.div transition={{ type: "spring", stiffness: 500, damping: 50 }}  initial={{x:"-100%"}} animate={{x:0}} className=" border-r-2 border-[#eea221] overflow-y-auto h-screen py-3 fixed w-full z-50 top-0 bg-[#053b50] ">
      <div className=" flex justify-between ">
        <motion.img  whileHover={{x:"-10%"}} className="h-8 mr-3 cursor-pointer" onClick={() => setSubMenu(!subMenu)} src={arrow} alt="close sub menu" />
        <motion.img  whileHover={{rotate:360}} className="h-8 mr-3 cursor-pointer" onClick={() => setShow(!show)} src={cross} alt="close menu" />
      </div>
      <ul className="text-white font-bold text-2xl flex flex-col gap-4 py-10">
          <AnimatePresence>
            {categories?.map(cat=>
            {
              return <div key={cat.id}>
                        <p className="cursor-pointer" onClick={()=> handleList(cat.id)}>{cat.name}</p>
                          <motion.div
                          initial={{y:null}}
                          animate={{y:10}}
                          exit={{y:null}}
                          className="font-normal text-lg flex flex-col gap-2 ">
                            {cat.state && cat.subProducts && cat.subProducts?.map(sub=>{
                              return <p className="cursor-pointer" key={sub}>{sub}</p>
                            })
                            }
                          </motion.div>
                  </div>
            })
            }
          </AnimatePresence>
      </ul>
       </motion.div>}
    </motion.div>
    <div 
      onClick={() => setShow(!show)}
      className=" hidden sm:flex h-screen w-full"
      ></div>
  </div>

  )
}

export default Display