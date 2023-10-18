import React from 'react';
import { useState, useEffect } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { eliminateOne, eliminateAll, restOne, addOne } from "../../redux/actions/actionEliminateOne";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cartReducer);
  console.log(cart);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    console.log(cart);
    if (cart.length > 0) {
      total = cart.reduce((acc, item) => acc + item?.total, 0);
    }
    console.log(total);
    setTotalPrice(total);
  }, [cart]);

  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago("TEST-bd89b013-dd1b-4473-bb04-90a6f717a90f");

  const handleBuy = async () => {
    try {
      
      const products = cart.map((item) => ({
        title: item.product?.name, 
        description: item.product?.description,
        currency_id: 'USD', 
        unit_price: item.product?.price, 
        quantity: item.quantity, 
      }));

      
      const response = await axios.post('http://localhost:8080/payment/create-order', {
        products, 
      });

      if (response.data.id) {
        setPreferenceId(response.data.id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='w-full h-screen'>
      <div className='w-full min-h-screen bg-[#f0ebe3] flex items-center flex-col gap-3'>
        <div className='w-5/6 font-bold text-xl flex text-start mt-8'>Products</div>
        {cart.length > 0 && (
          cart.map((item) => (
            <div key={item.product?._id + item.product?.name} className='w-5/6 h-20 bg-gray-400 flex items-center gap-2 rounded-lg p-2 justify-around relative shadow-md hover:scale-110 transform duration-300 cursor-pointer'>
              <img className='w-10 h-10 md:w-20 md:h-20 p-1 rounded-lg' src={item.product?.photo} alt="" />
              <p className='md:w-3/4 md:line-clamp-1 md:display hidden'>{item.product?.description}</p>
              <form className='text-sm' action="">Qty.</form>
              <div className="flex gap-3 w-4/12 justify-center">

                <div onClick={() => dispatch(restOne(item.product?._id))} className={`flex items-center border ${item?.quantity > 1 ? "border-[#eea221] cursor-pointer" : "text-gray-700"}  px-3 h-6 pb-1 rounded-md`}>
                  <p className={`text-xl select-none font-bold ${item?.quantity > 1 ? "text-[#eea221]  cursor-pointer" : "text-gray-700"}  `} >
                    -
                  </p>
                </div>
                <p className="select-none">{item?.quantity}</p>
                <div onClick={() => dispatch(addOne(item.product?._id))} className="flex items-center border border-[#eea221] cursor-pointer px-3 h-6 pb-1 rounded-md">
                  <p className="text-xl font-bold text-[#eea221] select-none">
                    +
                  </p>
                </div>
              </div>
              <p className='w-12 text-center text-sm'>$ {item.product?.price}</p>
              <img onClick={() => dispatch(eliminateOne(item.product?._id))} className='w-3 h-3 cursor-pointer absolute top-2 right-2' src="./eliminar.png" alt="" />
            </div>

          ))
        )}

        <div className='w-5/6 flex justify-end'>
          <div className='w-full h-6 flex items-center justify-end gap-4 p-2 font-bold'>
            <p>TOTAL</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
        </div>
        <div className='w-5/6 text-sm flex gap-2 justify-between flex-col md:flex-row'>
          <div className='flex gap-2 flex-col md:flex-row md:gap-4'>
            <Link to={"/products"} className='bg-[#7D9D9C] flex items-center text-center rounded-md text-white p-2 hover:scale-110 transform duration-300'>Add more products</Link>
            <button onClick={()=> dispatch(eliminateAll())} className='h-12 bg-red-500 text-white rounded-md p-2 hover:bg-red-700 hover:scale-110 transform duration-300'>Clear cart</button>
          </div>
          <button className=' bg-[#7D9D9C] rounded-md p-2 hover:bg-emerald-600 text-white hover:scale-110 hover:font-bold transform duration-300' onClick={handleBuy}>Complete purchase</button>
        </div>
        {preferenceId && <Wallet initialization={{ preferenceId }} />}
      </div>
      <div className='w-full h-32 bg-[#053b50]'></div>
    </div>
  );
};

export default Cart;
