import React, { useEffect, useState } from "react";
import cross from "../../../public/cross-small-svgrepo-com.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addOne, eliminateAll, eliminateOne, restOne } from "../../../redux/actions/actionEliminateOne";
import { Link } from "react-router-dom";

const ModalCart = ({ setCartShow, cartShow }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cartReducer);
  const [totalPrice, setTotalPrice] = useState(0);
  const { role } = useSelector((store) => store.userReducer.user);

  useEffect(() => {
    let total = 0;
    console.log(cart);
    if (cart.length > 0) {
      total = cart.reduce((acc, item) => acc + item?.total, 0);
    }
    console.log(total);
    setTotalPrice(total);
  }, [cart]);

  return (
    <div className="h-screen z-40 top-0 flex justify-end fixed w-full">
      <div className="h-screen md:w-7/12" onClick={() => setCartShow(!cartShow)}></div>
      <motion.div transition={{ type: "spring", stiffness: 500, damping: 50 }} exit={{ x: "100%" }} initial={{ x: "100%" }} animate={{ x: 0 }} className="w-full md:w-5/12 p-3 border-l-2 border-[#eea221] min-h-screen bg-[#f0ebe3] flex justify-between items-center flex-col gap-3">
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
            <AnimatePresence>
              {cart.length > 0 && (
                cart.map((item) => (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ x: "200%" }} transition={{ type: "spring", stiffness: 500, damping: 50 }} key={item.product?._id + item.product?.name} className="w-full h-20 bg-[#0e4355b2] hover:border-2 hover:border-[#eea221] flex items-center text-white font-semibold rounded-lg p-2 gap-1 relative shadow-md hover:scale-[1.02] transform duration-300">
                    <div className="w-6/12 flex items-center gap-3">
                      <img
                        className="h-1 md:w-14 md:h-14  p-1 rounded-lg"
                        src={item.product?.photo}
                        alt={item.product?.name}
                      />
                      <Link to={`/${item.product?._id}/details`} className="line-clamp-1 hover:text-[#eea221]">{item.product?.name}</Link>
                    </div>
                    <form className="text-sm w-1/12" action="">
                     {item.product?.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                    </form>
                    <div className="flex gap-3 w-4/12 justify-center">

                      <div onClick={() => dispatch(restOne(item.product?._id))} className={`flex items-center bg-[#053b50] border ${item?.quantity > 1 ? "border-[#eea221] cursor-pointer" : "text-gray-700"}  px-3 h-6 pb-1 rounded-md`}>
                        <p className={`text-xl  select-none font-bold ${item?.quantity > 1 ? "text-white  cursor-pointer" : "text-white"}  `} >
                          -
                        </p>
                      </div>
                      <p className="select-none">{item?.quantity}</p>
                      <div onClick={() => dispatch(addOne(item.product?._id))} className="flex bg-[#053b50] items-center border border-[#eea221] cursor-pointer px-3 h-6 pb-1 rounded-md">
                        <p className="text-xl font-bold text-white select-none">
                          +
                        </p>
                      </div>
                    </div>
                    <div onClick={() => dispatch(eliminateOne(item.product?._id))} className="flex items-center bg-[#053b50] border border-amber-600 hover:border-red-600 px-2 h-6 pb-1 rounded-md cursor-pointer">
                      <p className="text-white select-none" >x</p>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
            <div className="w-full flex">
              <div className="w-full h-6 flex items-center justify-end gap-4 p-2 font-bold">
                <p>TOTAL</p>
                <p> {totalPrice.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-sm border-t border-slate-400 py-5 flex gap-2 justify-between">
          <div className="flex gap-4 ">
            <button onClick={() => dispatch(eliminateAll())} className="bg-red-700 text-white rounded-md p-2 hover:bg-red-700 hover:scale-110 transform duration-300">
              Clear
            </button>
          </div>
          <Link to="/cart" onClick={() => setCartShow(cartShow)} className={`bg-[#7D9D9C] rounded-md p-2 hover:bg-emerald-600 text-white hover:scale-110 hover:font-bold transform duration-300 ${role !== 1 && role !== 2 ? 'hidden' : ''}`}>
            Complete purchase
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ModalCart;
