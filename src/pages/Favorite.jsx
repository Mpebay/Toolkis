import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../../redux/actions/actionFavorite';

const Favorite = () => {
  const favorites = useSelector((state) => state.userReducer.favorites);
  const dispatch = useDispatch();

  const handleDelete = (productId) => {
    dispatch(removeFavorite({ _id: productId }));
  };

  return (
    <>
      <div className='w-full bg-[#f0ebe3] min-h-screen md:min-w-full flex flex-col justify-start items-center'>
        <div className='flex w-11/12 mt-2 md:mt-8 md:justify-start md:ps-4 font-bold text-xl items-center justify-center'>
          <h1>Favorites</h1>
        </div>
        <div className='w-11/12 mt-4 border-t-2 border-b-2 border-gray-300 gap-4'>
          {favorites.length === 0 ? (
            <div className='flex flex-col text-center p-4 justify-center items-center'>
              <p>Your favorites list is empty.</p>
              <Link to="/products" className='w-36 bg-[#7D9D9C] rounded-md p-2 hover:bg-emerald-600 text-white hover:scale-110 hover:font-bold transform duration-300'>Go to products</Link>
            </div>
          ) : (
            favorites.map((favoriteItem) => (
              <div key={favoriteItem._id} className='flex items-center gap-4 p-4 border-b border-gray-300'>
                <img className='w-28 h-28 md:w-44 md:h-44' src={favoriteItem.photo} alt="" />
                <div className='flex flex-col'>
                  <Link className='line-clamp-1'>{favoriteItem.name}</Link>
                  <p>${favoriteItem.price}</p>
                  <p className='line-clamp-2'>{favoriteItem.description}</p>
                  <button className='w-20 bg-red-500 text-white rounded-lg px-2 mt-4' onClick={() => handleDelete(favoriteItem._id)}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Favorite;
