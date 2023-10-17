import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'


const MobileSearchInput = () => {
  const inputRef = useRef(null)
  const [search , setSearch] = useState("")
  const [list , setList] = useState([])
  const {allItems} = useSelector(store=> store.itemsReducer)

  useEffect(() => {
    if (allItems &&  search.length > 0  && allItems.length > 0) {
      const items = allItems
      const findItems = items.filter(item =>  item.name.toLowerCase().includes(search.toString().toLowerCase()) );
      setList(findItems)
    }
  }, [search, allItems]);
  return (
    <div className='flex justify-center'>
    <motion.div key={"MobileSearchingInput"} initial={{y:-15}} animate={{y:0}} exit={{y:-15}} className="justify-center relative flex gap-2 px-2  items-center w-full lg:hidden">
            <input onChange={()=> setSearch(inputRef.current?.value) } ref={inputRef} className="w-9/12 h-5 text-black " type="text" />
    </motion.div>
    {list?.length > 0 && search?.length > 0 &&
    <div className='bg-white w-9/12 absolute md:hidden border-2 z-30 top-[100px] h-40 overflow-auto border-[#053b50] '>
      {list?.length > 0 && list?.map(item =>
        (<div key={item?._id} className=" flex border-b w-full h-20 border-black">
          <div>
            <img className="h-16" src={item?.photo} alt={item?.name} />  
          </div>
          <p>{item.name}</p>
        </div>)
      )}
    </div>}
    </div>
  )
}

export default MobileSearchInput