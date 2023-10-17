import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DisplayWeb = ({categoriesAndSub,setShow,show}) => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-white font-bold text-lg hidden lg:flex flex-col items-start gap-5 flex-wrap px-5 py-2 z-10 bg-[#053b50] max-h-[40vh] w-full"
    >
      {categoriesAndSub && categoriesAndSub?.map(cat => {
        return  <div key={cat?.id} className="flex flex-col max-h-48 max-w-64 flex-grow flex-shrink">
        <Link to={`/category/${cat?.name.toLowerCase()}`} onClick={()=>setShow(!show)} className="flex hover:text-[#eea221]">{cat?.name}</Link>
        <ul className="text-base flex flex-col font-medium  overflow-auto scrollbar-thin scrollbar-thumb-[#ffffff35] gap-1">
          {cat.sub?.map(sub => {
            return <Link onClick={()=>setShow(!show)} to={`/category/${cat?.name}/${sub.name_sub.toLowerCase()}`} key={sub.id} className="flex cursor-pointer hover:text-[#eea221]">{sub.name_sub}</Link>})
         }
        </ul>
      </div>})}
    </motion.div>
  );
};

export default DisplayWeb;