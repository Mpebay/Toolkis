import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DisplayWeb = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-white font-bold text-lg hidden lg:flex flex-col items-start gap-5 flex-wrap px-5 py-2 z-10 bg-[#053b50] max-h-[70vh] w-full"
    >
      <div className="flex flex-col max-h-48 max-w-64 flex-grow flex-shrink">
        <p className="flex">DisplayWeb</p>
        <ul className="text-base flex flex-col font-medium  overflow-auto scrollbar-thin scrollbar-thumb-[#ffffff35] gap-1">
          <li className="flex">cont</li>
          <li className="flex">cont</li>
          <li className="flex">cont</li>
          <li className="flex">cont</li>
          <li className="flex">codasdasdasnt</li>
          <li className="flex">cont</li>
          <li className="flex">cont</li>
          <li className="flex">cont</li>
          <li className="flex">condsdt</li>
          <li className="flex">cont</li>
        </ul>
      </div>
      <div className="flex flex-col max-h-48 max-w-64 flex-grow flex-shrink">
        <p className="flex">DisplayWeb</p>
        <ul className="text-base flex flex-col font-medium  overflow-auto scrollbar-thin scrollbar-thumb-[#ffffff] gap-1">
          <li className="flex">cont</li>
          <li className="flex">cont</li>
          <li className="flex">cont</li>
        </ul>
      </div>
      <div className="flex flex-col max-h-48 max-w-64 flex-grow flex-shrink">
        <p className="flex">DisplayWeb</p>
        <ul className="text-base flex flex-col font-medium  overflow-auto scrollbar-thin scrollbar-thumb-[#ffffff] gap-1">
          <li className="flex">cont</li>
          <li className="flex">cont</li>
          <li className="flex">condasdasdt</li>
          <li className="flex">cont</li>
          <li className="flex">cont</li>
        </ul>
      </div>
      <div className="flex flex-col max-h-48 max-w-64 flex-grow flex-shrink">
        <p className="flex">DisplayWeb</p>
        <ul className="text-base flex flex-col font-medium  overflow-auto scrollbar-thin scrollbar-thumb-[#ffffff] gap-1">
          <li className="flex">cont</li>
          <li className="flex">cdsadasdasdasdont</li>
          <li className="flex">condsadasdt</li>
          <li className="flex">cont</li>
          <li className="flex">cont</li>
        </ul>
      </div>
      <div className="flex flex-col max-h-48 max-w-64 flex-grow flex-shrink">
        <p className="flex">DisplayWeb</p>
        <ul className="text-base flex flex-col font-medium  overflow-auto scrollbar-thin scrollbar-thumb-[#ffffff] gap-1">
          <li className="flex">cont</li>
          <li className="flex">cont</li>
          <li className="flex">cont</li>
          <li className="flex">cont</li>
          <li className="flex">cont</li>
        </ul>
      </div>
      <Link className=" hover:text-[#eea221] cursor-pointer">DIY</Link>
      <Link className=" hover:text-[#eea221] cursor-pointer">Hot Sales</Link>
      <Link className=" hover:text-[#eea221] cursor-pointer">Contact Us</Link>
      <Link className=" hover:text-[#eea221] cursor-pointer">Work with us</Link>
    </motion.div>
  );
};

export default DisplayWeb;
