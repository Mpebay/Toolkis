import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import newProduct from '../../../redux/actions/actionNewProduct'
import Swal from 'sweetalert2'


const UploadItem = () => {

    const dispatch = useDispatch()

    const name = useRef()
    const brand = useRef()
    const category = useRef()
    const subcategory = useRef()
    const stock = useRef()
    const description = useRef()
    const photo = useRef()
    const price = useRef()

    const powerSupply = useRef()
    const speeds = useRef()
    const voltage = useRef()
    const amperage = useRef()
    const material = useRef()
    const itemWeight = useRef()
    const itemDimensions = useRef()

    const handleForm = async () => {
        const refName = name.current.value
        const refBrand = brand.current.value
        const refCategory = category.current.value
        const refSubcategory = subcategory.current.value
        const refStock = stock.current.value
        const refDescription = description.current.value
        const refPhoto = photo.current.value
        const refPrice = price.current.value

        const refPowerSupply = powerSupply.current.value
        const refSpeeds = speeds.current.value
        const refVoltage = voltage.current.value
        const refAmperage = amperage.current.value
        const refMaterial = material.current.value
        const refItemWeight = itemWeight.current.value
        const refItemDimensions = itemDimensions.current.value
    
        const newProductData = {
            name: refName,
            brand: refBrand,
            category: refCategory,
            subcategory: refSubcategory,
            stock: Number(refStock),
            description: refDescription,
            photo: refPhoto,
            price: Number(refPrice),
            details: {
                PowerSupply: refPowerSupply,
                Speeds: refSpeeds,
                Voltage: refVoltage,
                Amperage: refAmperage,
                Material: refMaterial,
                ItemWeight: refItemWeight,
                ItemDimensions: refItemDimensions
            }
        }
        
        try {

            const response = await dispatch(newProduct(newProductData));

            if (response && response.payload.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Product created successfully!',
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
            console.error(error);

            Swal.fire({
                icon: 'error',
                title: 'Something went wrong!',
                text: 'Please, check the data and try again later.',
            });
        }
    
    }

    


    return (
        <>
            <h1 className='font-semibold text-3xl text-center my-5'>Upload Item</h1>
            <form className='flex flex-col w-full' action="">
                <label className='font-semibold' htmlFor="">Name:</label>
                <input className='border border-gray-300 shadow-sm shadow-black' ref={name} type="text" />
                <label className='font-semibold' htmlFor="">Brand:</label>
                <input className='border border-gray-300 shadow-sm shadow-black' ref={brand} type="text" />
                <label className='font-semibold' htmlFor="">Category:</label>
                <input className='border border-gray-300 shadow-sm shadow-black' ref={category} type="text" />
                <label className='font-semibold' htmlFor="">Subcategory:</label>
                <input className='border border-gray-300 shadow-sm shadow-black' ref={subcategory} type="text" />
                <label className='font-semibold' htmlFor="">Stock:</label>
                <input className='border border-gray-300 shadow-sm shadow-black' ref={stock} type="text" />
                <label className='font-semibold' htmlFor="">Description:</label>
                <input className='border border-gray-300 shadow-sm shadow-black' ref={description} type="text" />
                <label className='font-semibold' htmlFor="">Photo:</label>
                <input className='border border-gray-300 shadow-sm shadow-black' ref={photo} type="text" />
                <label className='font-semibold' htmlFor="">Price:</label>
                <input className='border border-gray-300 shadow-sm shadow-black' ref={price} type="text" />

                <h3 className='font-semibold text-xl text-center mb-5 mt-10'>Item Details</h3>
                <label className='font-semibold' htmlFor="">Power Supply:</label>
                <input className='border border-gray-300 shadow-sm shadow-black' ref={powerSupply} type="text" />
                <label className='font-semibold' htmlFor="">Number of Speeds:</label>
                <input className='border border-gray-300 shadow-sm shadow-black' ref={speeds} type="text" />
                <label className='font-semibold' htmlFor="">Voltage:</label>
                <input className='border border-gray-300 shadow-sm shadow-black' ref={voltage} type="text" />
                <label className='font-semibold' htmlFor="">Amperage:</label>
                <input className='border border-gray-300 shadow-sm shadow-black' ref={amperage} type="text" />
                <label className='font-semibold' htmlFor="">Material:</label>
                <input className='border border-gray-300 shadow-sm shadow-black' ref={material} type="text" />
                <label className='font-semibold' htmlFor="">Item Weight:</label>
                <input className='border border-gray-300 shadow-sm shadow-black' ref={itemWeight} type="text" />
                <label className='font-semibold' htmlFor="">Item Dimensions:</label>
                <input className='border border-gray-300 shadow-sm shadow-black' ref={itemDimensions} type="text" />
                <button className='w-20 rounded-full m-5 justify-center self-end border border-gray-500 bg-green-400' onClick={(e)=>{
                    e.preventDefault(),
                    handleForm()
                }
                }>Submit</button>
            </form>
        </>
    )
}

export default UploadItem