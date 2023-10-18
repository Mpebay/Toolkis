import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import editProduct from '../../../redux/actions/actionEditProduct';
import { useParams } from 'react-router-dom';



const EditItem = () => {
    const dispatch = useDispatch();
    const {id} = useParams()
    console.log(id)
    const product = useSelector(store => store.itemsReducer.allItems.find(item => item._id === id));
    console.log(product)
    const [formData, setFormData] = useState({
        name: '',
        brand: '',
        category: '',
        subcategory: '',
        stock: 0,
        description: '',
        photo: '',
        price: 0,
        powerSupply: '',
        numSpeeds: 0,
        voltage: '',
        amperage: '',
        material: '',
        itemWeight: '',
        itemDimensions: '',
    });

    useEffect(() => {
        console.log(product)
        if (product) {
            setFormData({
                name: product.name,
                brand: product.brand,
                category: product.category,
                subcategory: product.subcategory,
                stock: product.stock,
                description: product.description,
                photo: product.photo,
                price: product.price,
                powerSupply: product.details.PowerSupply,
                numSpeeds: product.details.Speeds,
                voltage: product.details.Voltage,
                amperage: product.details.Amperage,
                material: product.details.Material,
                itemWeight: product.details.ItemWeight,
                itemDimensions: product.details.ItemDimensions,
            });
        } else {
            axios.get(`http://localhost:8080/products/${id}`)
                .then((response) => {
                    console.log(response.data)
                    setFormData({
                        name: response.data.name,
                        brand: response.data.brand,
                        category: response.data.category,
                        subcategory: response.data.subcategory,
                        stock: response.data.stock,
                        description: response.data.description,
                        photo: response.data.photo,
                        price: response.data.price,
                        powerSupply: response.data.details.powerSupply,
                        numSpeeds: response.data.numSpeeds,
                        voltage: response.data.voltage,
                        amperage: response.data.amperage,
                        material: response.data.material,
                        itemWeight: response.data.itemWeight,
                        itemDimensions: response.data.itemDimensions,
                    });
                })
                .catch((error) => {
                    console.error('Error al obtener datos del producto', error);
                });
        }
    }, [id, product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editProduct({ _id: product._id, ...formData }));
    };

    if (!product) {
        return <div className='h-screen mt-20 text-black w-full'>
                    <h1 className='font-bold bg-red-500'>
                        Loading...
                    </h1>
                </div>;
    }

    return (
        <div className='w-full min-h-screen my-10 p-3 flex flex-col items-center justify-center'>
            <h1 className='font-semibold text-3xl text-center my-5'>Edit Item</h1>
            <form className='flex flex-col w-full md:w-1/2' onSubmit={handleSubmit}>
                <label className='font-semibold' htmlFor="name">Name:</label>
                <input
                    className='border border-gray-300 shadow-sm shadow-black'
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label className='font-semibold' htmlFor="brand">Brand:</label>
                <input
                    className='border border-gray-300 shadow-sm shadow-black'
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                />
                <label className='font-semibold' htmlFor="category">Category:</label>
                <input
                    className='border border-gray-300 shadow-sm shadow-black'
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                />
                <label className='font-semibold' htmlFor="subcategory">Subcategory:</label>
                <input
                    className='border border-gray-300 shadow-sm shadow-black'
                    type="text"
                    name="subcategory"
                    value={formData.subcategory}
                    onChange={handleChange}
                />
                <label className='font-semibold' htmlFor="stock">Stock:</label>
                <input
                    className='border border-gray-300 shadow-sm shadow-black'
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                />
                <label className='font-semibold' htmlFor="description">Description:</label>
                <input
                    className='border border-gray-300 shadow-sm shadow-black'
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <label className='font-semibold' htmlFor="photo">Photo:</label>
                <input
                    className='border border-gray-300 shadow-sm shadow-black'
                    type="text"
                    name="photo"
                    value={formData.photo}
                    onChange={handleChange}
                />
                <label className='font-semibold' htmlFor="price">Price:</label>
                <input
                    className='border border-gray-300 shadow-sm shadow-black'
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                />
                <h3 className='font-semibold text-xl text-center mb-5 mt-10'>Item Details</h3>
                <label className='font-semibold' htmlFor="powerSupply">Power Supply:</label>
                <input
                    className='border border-gray-300 shadow-sm shadow-black'
                    type="text"
                    name="powerSupply"
                    value={formData.powerSupply}
                    onChange={handleChange}
                />
                <label className='font-semibold' htmlFor="numSpeeds">Number of speeds:</label>
                <input
                    className='border border-gray-300 shadow-sm shadow-black'
                    type="number"
                    name="numSpeeds"
                    value={formData.numSpeeds}
                    onChange={handleChange}
                />
                <label className='font-semibold' htmlFor="voltage">Voltage:</label>
                <input
                    className='border border-gray-300 shadow-sm shadow-black'
                    type="text"
                    name="voltage"
                    value={formData.voltage}
                    onChange={handleChange}
                />
                <label className='font-semibold' htmlFor="amperage">Amperage:</label>
                <input
                    className='border border-gray-300 shadow-sm shadow-black'
                    type="text"
                    name="amperage"
                    value={formData.amperage}
                    onChange={handleChange}
                />
                <label className='font-semibold' htmlFor="material">Material:</label>
                <input
                    className='border border-gray-300 shadow-sm shadow-black'
                    type="text"
                    name="material"
                    value={formData.material}
                    onChange={handleChange}
                />
                <label className='font-semibold' htmlFor="itemWeight">Item weight:</label>
                <input
                    className='border border-gray-300 shadow-sm shadow-black'
                    type="text"
                    name="itemWeight"
                    value={formData.itemWeight}
                    onChange={handleChange}
                />
                <label className='font-semibold' htmlFor="itemDimensions">Item dimensions:</label>
                <input
                    className='border border-gray-300 shadow-sm shadow-black'
                    type="text"
                    name="itemDimensions"
                    value={formData.itemDimensions}
                    onChange={handleChange}
                />
                <button className='w-48 md: rounded-full m-5 justify-center self-end border border-gray-500 bg-green-400' onClick={(e) => {
                    e.preventDefault();
                    handleForm();
                }}>Save changes</button>
            </form>
        </div>
    );
};

export default EditItem;