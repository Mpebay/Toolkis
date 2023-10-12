import React from "react";
import cross from "../../../public/cross-small-svgrepo-com.svg";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";


const ModalCart = ({ setCartShow, cartShow }) => {
    const {cart} = useSelector(store=>store.cartReducer)
  return (
    <div
      onClick={() => setCartShow(!cartShow)}
      className="h-screen z-40 top-0 flex justify-end fixed w-full"
    >
      <div className="md:w-1/3 p-3 min-h-screen bg-[#f0ebe3] flex justify-between items-center flex-col gap-3">
        <div className="w-full">
          <div className="flex w-full">
            <motion.img
              whileHover={{ rotate: 360 }}
              onClick={() => setCartShow(!cartShow)}
              className="h-8 cursor-pointer"
              src={cross}
              alt="close"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="w-full font-bold text-xl gap flex text-start mt-2">
              Products
            </div>
            {cart && cart?.map(item => {
                return <div key={item._id} className="w-full h-20 bg-gray-400 flex items-center gap-2 rounded-lg p-2 justify-around relative shadow-md hover:scale-110 transform duration-300 cursor-pointer">
              <img
                className="w-10 h-10 md:w-14 md:h-14 border border-black p-1 rounded-lg"
                src={item.photo}
                alt={item.name}
              />
              <p>{item.name}</p>
              <form className="text-sm" action="">
                Qty.
              </form>
              <input
                className="w-10 text-center rounded-md"
                type="number"
                min="1"
                max="100"
                name=""
                id=""
              />
              <p className=" text-center text-sm">${item.price}</p>
              <img
                className="w-3 h-3 cursor-pointer absolute top-2 right-2"
                src="./cerrar.png"
                alt=""
              />
            </div>})}

            <div className="w-full flex">
              <div className="w-full h-6 flex items-center justify-end gap-4 p-2 font-bold">
                <p>TOTAL</p>
                <p>$ </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/6 text-sm flex gap-2 justify-between">
          <div className="flex gap-4">
            <button className="bg-red-700 text-white rounded-md p-2 hover:bg-red-700 hover:scale-110 transform duration-300">
              Clear cart
            </button>
          </div>
          <button className="bg-[#7D9D9C] rounded-md p-2 hover:bg-emerald-600 text-white hover:scale-110 hover:font-bold transform duration-300">
            Complete purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCart;
