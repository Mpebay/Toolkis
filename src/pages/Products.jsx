import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import favorite from "../../public/heart-svgrepo-com.svg";
import { addFavorite, removeFavorite } from '../../redux/actions/actionFavorite';
import actionCart from '../../redux/actions/actionCart';


const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const { cart } = useSelector((store) => store.cartReducer);
  const { allItems, category, subcategories } = useSelector((store) => store.itemsReducer);
  const favorites = useSelector((store) => store.userReducer.favorites);
  const dispatch = useDispatch();

  const handleFavorite = (id) => {
    const item = allItems.find((item) => item._id === id);
    const isFavorite = favorites.some((favoriteItem) => favoriteItem._id === id);

    if (isFavorite) {
      dispatch(removeFavorite({ _id: id }));
    } else {
      dispatch(addFavorite(item));
    }
  };
  const filteredProducts = allItems
    .filter((product) => {
      const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === '' || product.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSubcategory = selectedSubcategory === '' || product.subcategory.toLowerCase() === selectedSubcategory.toLowerCase();

      return matchesSearchTerm && matchesCategory && matchesSubcategory;
    })
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  const handleCart = (id)=>{
    const favorite = allItems.find(item => item._id === id)
    dispatch(actionCart(favorite))
  }

  return (
    <div className='w-full min-h-screen bg-[#f0ebe3] flex flex-col md:flex-row p-3'>
      <div className='filterbox rounded-md border-2 mb-2 border-[#053b50] md:mt-7 p-10 gap-3 flex flex-col items-center justify-center md:w-1/4 md:h-1/3 md:py-10 md:sticky top-10 md:gap-5 bg-[#0e4355b2]'>
        <h1 className='text-white font-semibold'>Filters:</h1>
        <input className=' outline-none p-1 w-48'
          type="search"
          name=""
          id=""
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search...'
        />
        <div className='flex w-full items-center gap-3 flex-col md:gap-3'>
          <h2 className='text-white font-semibold text-sm text-center max-md:w-2/3 md:w-36'>Categories:</h2>
          <select
            className='w-36 max-md:w-2/3 text-black outline-none'
            name=""
            id=""
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">See all</option>
            {category && category?.map((category) => (
              <option key={category?.id} value={category?.id}>
                {category?.name}
              </option>
            ))}
          </select>
          <h2 className='text-white font-semibold text-sm text-center max-md:w-2/3 md:w-36'>Subcategories:</h2>
          <select
            className='w-36 max-md:w-2/3 overflow-y-scroll text-black outline-none'
            name=""
            id=""
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
          >
            <option value="">See all</option>
            {subcategories && subcategories?.map((subcategory) => (
              <option key={subcategory?._id} value={subcategory?._id}>
                {subcategory?.name_sub}
              </option>
            ))}
          </select>
          <h2 className='text-white text-sm max-md:w-2/3 md:w-36 text-center font-semibold' >Order:</h2>
          <select
            className='w-36 max-md:w-2/3'
            name=""
            id=""
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>
      </div>

      <div className=''>
        <div className='flex-col items-center justify-center max-md:mb-3 text-center mt-5'>
          
        </div>
        {filteredProducts.length > 0 ? (
          <div className='cardcontainer md:w-[75vw] min-h-3/4 flex flex-wrap p-2 items-center justify-center gap-5 md:my-5'>
            {filteredProducts.map((product) => (
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
        ) : (
          <div className='text-center w-[75vw] text-gray-500 mt-5'> <p>There are no matches.</p></div>
        )}
      </div>
    </div>
  );
};

export default Products;
