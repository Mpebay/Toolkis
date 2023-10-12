import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DisplayWeb = ({categoriesAndSub}) => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-white font-bold text-lg hidden lg:flex flex-col items-start gap-5 flex-wrap px-5 py-2 z-10 bg-[#053b50] max-h-[40vh] w-full"
    >
      {categoriesAndSub && categoriesAndSub?.map(cat => {
        return  <div key={cat?.id} className="flex flex-col max-h-48 max-w-64 flex-grow flex-shrink">
        <p className="flex hover:text-[#eea221]">{cat?.name}</p>
        <ul className="text-base flex flex-col font-medium  overflow-auto scrollbar-thin scrollbar-thumb-[#ffffff35] gap-1">
          {cat.sub?.map(sub => {
            return <li key={sub.id} className="flex cursor-pointer hover:text-[#eea221]">{sub.name_sub}</li>})
         }
        </ul>
      </div>
      <Link className=" hover:text-[#eea221] cursor-pointer">DIY</Link>
      <Link className=" hover:text-[#eea221] cursor-pointer">Hot Sales</Link>
      <Link className=" hover:text-[#eea221] cursor-pointer">Contact Us</Link>
      <Link className=" hover:text-[#eea221] cursor-pointer">Work with us</Link>
      </div>})}
    </motion.div>
  );
};

export default DisplayWeb;
