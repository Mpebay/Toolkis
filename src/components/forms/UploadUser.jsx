import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import newAdmPanUser from '../../../redux/actions/actionNewAdmPanUser'
import Swal from 'sweetalert2'


const UploadUser = () => {

    const dispatch = useDispatch()

    const name = useRef()
    const email = useRef()
    const password = useRef()
    const photo = useRef()
    const role = useRef()
    const telephone = useRef()

    const handleForm = async () => {
        const refName = name.current.value;
        const refEmail = email.current.value;
        const refPassword = password.current.value;
        const refPhoto = photo.current.value;
        const refRole = role.current.value;
        const refTelephone = telephone.current.value

        const newUserData = {
            name: refName,
            email: refEmail,
            password: refPassword,
            photo: refPhoto,
            role: refRole,
            telephone: refTelephone
        }

        try {
            console.log(newUserData)
            const response = await dispatch(newAdmPanUser(newUserData))
            console.log(response)
            if (response && response.payload.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'User created successfully!',
                    showConfirmButton: false,
                    timer: 2500
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Something went wrong!',
                    text: response.error || 'Please, check the data and try again later.',
                });
            }
        } catch (error) {
            console.log(error)

            Swal.fire({
                icon: 'error',
                title: 'Something went wrong!',
                text: 'Please, check the data and try again later.',
            });
        }
    }


    return (
        <>
            <h1 className='font-semibold text-3xl text-center my-5'>Upload User</h1>
            <form className='flex flex-col w-full' action="">
                <label className='font-semibold' htmlFor="">Name:</label>
                <input className='border border-gray-300 shadow-sm shadow-black' ref={name} type="text" />
                <label className='font-semibold' htmlFor="">Email:</label>
                <input className='border border-gray-300 shadow-sm shadow-black' ref={email} type="text" />
                <label className='font-semibold' htmlFor="">Password:</label>
                <input className='border border-gray-300 shadow-sm shadow-black' ref={password} type="text" />
                <label className='font-semibold' htmlFor="">Photo:</label>
                <input className='border border-gray-300 shadow-sm shadow-black' ref={photo} type="text" />
                <label className='font-semibold' htmlFor="">Role:</label>
                <input className='border border-gray-300 shadow-sm shadow-black' ref={role} type="text" />
                <label className='font-semibold' htmlFor="">Telephone:</label>
                <input className='border border-gray-300 shadow-sm shadow-black' ref={telephone} type='number' />
                <button className='w-20 rounded-full m-5 justify-center self-end border border-gray-500 bg-green-400' onClick={(e)=>{
                    e.preventDefault(),
                    handleForm()
                }
                }>Submit</button>
            </form>
        </>
    )
}

export default UploadUser