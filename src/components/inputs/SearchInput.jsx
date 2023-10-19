import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



const SearchInput = ({isVisible}) => {
  const inputRef = useRef(null)
  const searchContainerRef = useRef(null);
  const [search , setSearch] = useState("")
  const [list , setList] = useState([])
  const [showSearch , setShowSearch] = useState(false)
  const {allItems} = useSelector(store=> store.itemsReducer)

  useEffect(() => {
    console.log(showSearch);
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
    <>
    <div className='hidden md:flex w-10/12 justify-center'>
    <motion.div key={"searchInput"} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:[0]}} className="justify-center lg:flex gap-2 px-2  items-center w-8/12 hidden" ref={searchContainerRef}>
              <input onChange={()=> setSearch(inputRef.current?.value) } ref={inputRef}  className="w-full h-8 rounded-sm text-black outline-double p-2" type="text" />
   </motion.div>
   {showSearch && search?.length > 0 && list.length > 0 &&
    <div className={`bg-white w-9/12 absolute md:flex text-black flex-col p-1 hidden border-2 z-30 ${isVisible?"top-[21vh]":"top-[12vh]"} min-h-40 max-h-[30vh] overflow-auto border-[#053b50]` } ref={searchContainerRef}>
      {showSearch && list?.map(item =>
        (<Link to={`/${item?._id}/details`} key={item?._id} className=" hover:border-1 hover:border-[#eea221] hover:rounded-md flex px-3 items-center justify-between border-b w-full  h-[20vh] border-[#00000058]">
            <div className='w-[12vw]'>
              <img className=" h-[10vh]" src={item?.photo} alt={item?.name} />  
            </div>
          <div className=' w-full pl-5'>
            <p className='font-semibold'>{item?.name}</p>
          </div>
          <p className='font-semibold'>${item?.price}</p>
        </Link>)
      )}
    </div>}
    </div>
    </>
  )
}

export default SearchInput