import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const MobileSearchInput = ({isVisible}) => {
  const inputRef = useRef(null)
  const searchContainerRef = useRef(null);
  const [search , setSearch] = useState("")
  const [list , setList] = useState([])
  const [showSearch , setShowSearch] = useState(false)
  const {allItems} = useSelector(store=> store.itemsReducer)

  useEffect(() => {
    
    if (list?.length > 0 ) {
      setShowSearch(true)
    }
    
  }, [search])
  

  useEffect(() => {
    if (allItems &&  search.length > 0  && allItems.length > 0) {
      const items = allItems
      const findItems = items.filter(item =>  item.name.toLowerCase().includes(search.toString().toLowerCase()) );
      setList(findItems)
    }
  }, [search, allItems]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className='flex justify-center'>
    <motion.div key={"MobileSearchingInput"} initial={{y:-15}} animate={{y:0}} exit={{y:-15}} className="justify-center relative flex gap-2 px-2  items-center w-full lg:hidden" ref={searchContainerRef}>
            <input onChange={()=> setSearch(inputRef.current?.value) } ref={inputRef} className="w-9/12 h-5 text-black outline-double p-2 " type="text" />
    </motion.div>
    {showSearch && search?.length > 0 && list.length > 0 &&
    <div className={`bg-white w-9/12 absolute md:hidden border-2 z-30 ${isVisible?"top-[21vh]":"top-[12vh]"} h-40 overflow-auto border-[#053b50]` } ref={searchContainerRef}>
      {showSearch && list?.map(item =>
        (<Link to={`/${item?._id}/details`} key={item?._id} className=" flex px-3 items-center justify-between border-b w-full  h-20 border-[#00000058]">
            <img className="w-[13vw] h-[13vw]" src={item?.photo} alt={item?.name} />  
          <div className=' w-full pl-5'>
            <p className='font-semibold'>{item.name}</p>
          </div>
          <p className='font-semibold'>${item?.price}</p>
        </Link>)
      )}
    </div>}
    </div>
  )
}

export default MobileSearchInput