import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import newUser from '../../redux/actions/actionNewUser';

const Register = () => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    photo: '',
    telephone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(newUser(userData))
      .then((resultAction) => {
        if (newUser.fulfilled.match(resultAction)) {
          console.log('Registro exitoso:', resultAction.payload);
        } else if (newUser.rejected.match(resultAction)) {
          console.error('Error:', resultAction.error.message);
        }
      });
  };

  return (
    <div className='w-full min-h-screen bg-[#f0ebe3] flex flex-col justify-center gap-10 p-5 items-center'>
      <div className='w-full min-h-12 text-center text-[#f0ebe3] p-5 bg-[#053b50] md:mt-28'>
        <h1 className='font-bold'>Welcome!</h1>
        <h3 className='font-semibold text-sm'>Sign up, and unlock full access to our website!</h3>
      </div>

      <form className='w-full md:w-1/2 min-h-5/6 rounded-lg gap-4 p-4 flex flex-col' onSubmit={handleSubmit}>
        <label className='font-semibold' htmlFor="email">Name:</label>
        <input
          className='border border-gray-300 outline-none shadow-black shadow-sm'
          type="text"
          name="name"
          id="name"
          value={userData.name}
          onChange={handleChange}
        />
        <label className='font-semibold' htmlFor="email">Email:</label>
        <input
          className='border border-gray-300 outline-none shadow-black shadow-sm'
          type="text"
          name="email"
          id="email"
          value={userData.email}
          onChange={handleChange}
        />
        <label className='font-semibold' htmlFor="password">Password:</label>
        <input
          className='border border-gray-300 outline-none shadow-black shadow-sm'
          type="password"
          name="password"
          id="password"
          value={userData.password}
          onChange={handleChange}
        />
        <label className='font-semibold' htmlFor="photo">Photo (Optional):</label>
        <input
          className='border border-gray-300 outline-none shadow-black shadow-sm'
          type="text"
          name="photo"
          id="photo"
          value={userData.photo}
          onChange={handleChange}
        />
        <label className='font-semibold' htmlFor="telephone">Phone number (Optional):</label>
        <input
          className='border border-gray-300 outline-none shadow-black shadow-sm'
          type="text"
          name="telephone"
          id="telephone"
          value={userData.telephone}
          onChange={handleChange}
        />
        <div className='flex flex-col items-center gap-3 text-center'>
          <button
            className='flex w-3/4 sm:w-1/2 justify-center m-2 bg-[#7D9D9C] rounded-md p-2 md:hover:bg-[#053b50] text-white md:hover:scale-110 md:hover:font-bold md:transform duration-300'
            type="submit"
          >
            Register
          </button>
          <p className='w-3/4'>You already have an account? Sign in!</p>
          <Link to={"/login"}
            className='flex w-3/4 sm:w-1/2 justify-center m-2 bg-[#7D9D9C] rounded-md p-2 md:hover:bg-[#053b50] text-white md:hover:scale-110 md:hover:font-bold md:transform duration-300'
            type="submit"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;