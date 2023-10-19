import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { addFavorite, removeFavorite } from '../../redux/actions/actionFavorite';
import favorite from "../../public/heart-svgrepo-com.svg";
import actionCart from '../../redux/actions/actionCart';

const MainCategoryPage = () => {
    const [items, setItems] = useState([])
    const {allItems} = useSelector(store => store.itemsReducer)
    const {cart} = useSelector(store => store.cartReducer)
    const {favorites} = useSelector((store) => store.userReducer);
    const {main} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(allItems);
        const filtered = allItems.filter(item => item?.category.toLowerCase() === main)
      setItems(filtered)
    }, [allItems,main])

    const handleFavorite = (id) => {
        const item = allItems.find((item) => item._id === id);
        const isFavorite = favorites.some((favoriteItem) => favoriteItem._id === id);
    
        if (isFavorite) {
          dispatch(removeFavorite({ _id: id }));
        } else {
          dispatch(addFavorite(item));
        }
      };


    const handleCart = (id)=>{
        const favorite = allItems.find(item => item._id === id)
        dispatch(actionCart(favorite))
      }
    
  return (
    <div className='bg-[#f0ebe3]'>
        <p className='font-bold text-[#053b50] pl-4 text-2xl'><Link to={"/"}>/home</Link>/{main}</p>
    <div className='cardcontainer  py-14 md:w-max-[75vw] min-h-[50vh] flex flex-wrap p-2 md:px-32 items-center justify-center gap-5 '>
            {items?.map((product) => (
              <div key={product._id} className='h-72 w-48 flex flex-col border border-[#053b50] rounded-md gap-2 items-center md:w-52 md:h-80 justify-between md:hover:scale-110 md:transform md:duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-2 '>
              <div className='flex w-full flex-row-reverse md:justify-center'>

              <img
                className=' h-6 max-md:w-2/12 md:fixed cursor-pointer top-0 right-1'
                onClick={() => handleFavorite(product._id)}
                src={favorite}
                alt="favorite"
                style={{ filter: favorites.some((favoriteItem) => favoriteItem._id === product._id) ? 'none' : 'invert(50%) sepia(98%) saturate(2479%) hue-rotate(320deg) brightness(0%) contrast(101%)'  }}
                />
              <h3 className='text-xs max-md:w-10/12 text-center  text-white font-bold pb-2'>{product.name}</h3>
                </div>
              <img className='w-full h-36 rounded-md bg-white border md:w-full md:h-40 md:object-contain' src={product.photo} alt="" />
              <p className='text-white text-sm max-md:line-clamp-1 md:line-clamp-2'>{product.description}</p>
              <p className='text-white w-3/4 text-end font-semibold'>{product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
              <div className='w-full flex gap-1'>
                <Link to={`/${product._id}/details`} className='w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]'>See more</Link>
                <p onClick={()=>{
                  if (!cart.find(item=> item.product._id === product._id)) {
                     handleCart(product?._id)
                  }
                 }} className={`px-5 cursor-pointer h-5 text-xs text-white rounded-lg text-center ${(!cart.find(item=> item.product?._id === product._id))?"bg-[#053b50]": "bg-[#43626e56]" }`} >{`${(!cart.find(item=> item.product?._id === product._id))? "Add" : "Added"}`}</p>
              </div>
            </div>
            ))}
          </div>
        
    </div>
  )
}

export default MainCategoryPage