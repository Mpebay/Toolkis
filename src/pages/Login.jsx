import React, { useState } from 'react'
import login from '../../redux/actions/actionLogin'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  
    dispatch(login(credentials))
      .then((resultAction) => {
        if (login.fulfilled.match(resultAction)) {
          Swal.fire({
            title: 'Welcome!',
            text: "You've logged in successfully",
            icon: 'success',
          }).then(() => {
            navigate("/");
          });
        } else if (login.rejected.match(resultAction)) {
          alert("Credenciales inválidas");
          console.error('Error:', resultAction.error.message);
        }
      });
  };

  return (
    <div className='w-full min-h-screen bg-[#f0ebe3] flex flex-col justify-center gap-10 p-5 items-center'>
      <div className='w-full min-h-12 text-center text-[#f0ebe3] p-5 bg-[#053b50]'>
        <h1 className='font-bold'>Welcome back!</h1>
        <h3 className='font-semibold text-sm'>Sign in, and keep enjoying our shopping experience!</h3>
      </div>

      <form className='w-full md:w-1/2 min-h-5/6 rounded-lg gap-4 p-4 flex flex-col' onSubmit={handleSubmit}>
        <label className='font-semibold' htmlFor="email">Email:</label>
        <input
          className='border border-gray-300 outline-none shadow-black shadow-sm'
          type="text"
          name="email"
          id="email"
          value={credentials.email}
          onChange={handleChange}
        />
        <label className='font-semibold' htmlFor="password">Password:</label>
        <input
          className='border border-gray-300 outline-none shadow-black shadow-sm'
          type="password"
          name="password"
          id="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <div className='flex flex-col items-center gap-3 text-center'>
          <button
            className='flex w-3/4 sm:w-1/2 justify-center m-2 bg-[#7D9D9C] rounded-md p-2 md:hover:bg-[#053b50] text-white md:hover:scale-110 md:hover:font-bold md:transform duration-300'
            type="submit"
          >
            Login
          </button>
          <p className='w-3/4'>You don't have an account? Create one!</p>
          <Link to={"/register"}
            className='flex w-3/4 sm:w-1/2 justify-center m-2 bg-[#7D9D9C] rounded-md p-2 md:hover:bg-[#053b50] text-white md:hover:scale-110 md:hover:font-bold md:transform duration-300'
            type="submit"
          >
            Register
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login