import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import editUser from '../../../redux/actions/actionEditUser';

const EditUser = () => {
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState("");
    const dispatch = useDispatch();

    const name = useRef();
    const email = useRef();
    const password = useRef();
    const photo = useRef();
    const role = useRef();
    const telephone = useRef();

    const getUsers = async () => {
        try {
            const response = await axios.get("http://localhost:8080/auth/");
            const userList = response.data.user;
            setUsers(userList);
        } catch (error) {
            console.log(error);
        }
    }

    const handleUserSelect = (e) => {
        const selectedId = e.target.value;
        setSelectedUserId(selectedId);

        const selectedUser = users.find((user) => user._id === selectedId);
        if (selectedUser) {
            name.current.value = selectedUser.name || "";
            email.current.value = selectedUser.email || "";
            password.current.value = selectedUser.password || "";
            photo.current.value = selectedUser.photo || "";
            role.current.value = selectedUser.role || "";
            telephone.current.value = selectedUser.telephone || "";
        }
    }

    const handleForm = async () => {
      

        const editedUserData = {
            _id: selectedUserId,
            name: name.current.value,
            email: email.current.value,
            password: password.current.value,
            photo: photo.current.value,
            role: role.current.value,
            telephone: telephone.current.value
        };

        console.log(editedUserData)
        dispatch(editUser(editedUserData))

        setSelectedUserId("");
        name.current.value = "";
        email.current.value = "";
        password.current.value = "";
        photo.current.value = "";
        role.current.value = "";
        telephone.current.value = "";
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h1 className='font-semibold text-3xl text-center my-5'>Edit User</h1>
            <form className='flex flex-col w-full' action="">
                <label className='font-semibold' htmlFor="userSelect">Select User:</label>
                <select id="userSelect" className='border border-gray-300 shadow-sm shadow-black' onChange={handleUserSelect}>
                    <option value="">Select a user</option>
                        {users.map((user) => (
                    <option key={user._id} value={user._id}>{user.email}</option>
                    ))}
                </select>
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
                <button className='w-20 rounded-full m-5 justify-center self-end border border-gray-500 bg-green-400' onClick={(e) => {
                    e.preventDefault();
                    handleForm();
                }}>Submit</button>
            </form>
        </>
    );
}

export default EditUser;