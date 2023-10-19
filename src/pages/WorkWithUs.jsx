import React, { useState } from 'react'
import { uploadFile } from '../../firebase/firebase.js';


const WorkWithUs = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await uploadFile(selectedFile);
            console.log(result);
            alert("Upload successfully");
        } catch (error) {
            alert(error);
        }
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const openFileInput = () => {
        document.getElementById("fileInput").click();
    };

    return (

        <div className="w-full min-h-screen bg-[#f0ebe3] flex flex-col">
            <div className="w-full h-12 mt-8 flex justify-center text-center">
                <h1 className='text-3xl md:text-5xl font-semibold'>WORK WITH US</h1>
            </div>
            <div className="flex justify-center">
                <h1 className="text-xl text-[#053b50] font-semibold mt-4 md:mt-8">Featured Job Offers</h1>
            </div>

            <div className='flex flex-col mt-5 w-full h-48 bg-[#053b50] items-center text-base justify-center'>
                <div>
                    <h1 className='text-white'>Upload your CV and find your dream job!</h1>

                </div>

                <div className='mt-5'>
                    <button className=" h-7 text-[#053b50] bg-white font-bold rounded-md w-24" onClick={openFileInput}>Select a File</button>
                    <input
                        type="file"
                        id="fileInput"
                        accept=".pdf"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                </div>
                <button className="text-white mt-3" type="submit" onClick={handleSubmit}>Upload file selected here</button>
            </div>
            <div className="w-full flex flex-col md:flex-row p-3 md:my-10 items-center">
                <div className="max-[450px]:w-full max-md:w-1/2 h-96 bg-[#053b50] w-1/3 m-2 flex flex-col rounded-xl">
                    <div className="h-1/2 p-2">
                        <img className="object-cover rounded-xl h-full w-full" src="https://eurotransis.com/wp-content/uploads/2018/12/Qu%C3%A9-es-y-como-se-hace-picking.jpg" alt="" />
                    </div>
                    <div className="h-1/2 ">
                        <div className="w-full text-white text-xl font-bold text-center">FULL-TIME</div>
                        <h1 className="text-white text-md text-center mt-6 p-2">Do you want to be part of our family? Dispatch Assistants to work in our distribution center.</h1>
                    </div>
                </div>
                <div className="max-[450px]:w-full max-md:w-1/2 h-96 bg-[#053b50] w-1/3 m-2 flex flex-col rounded-xl">
                    <div className="h-1/2 p-2">
                        <img className="object-cover rounded-xl h-full w-full" src="https://ferreteria-y-bricolaje.cdecomunicacion.es/wp-content/uploads/2023/04/ferreteria-medellin-1140x641.jpg" alt="" />
                    </div>
                    <div className="h-1/2 ">
                        <div className="w-full text-white text-xl font-bold text-center">FULL-TIME</div>
                        <h1 className="text-white text-md text-center mt-6 p-2">Do you want to be part of our family? Inn salesman to work in our premises.</h1>
                    </div>
                </div>
                <div className="max-[450px]:w-full max-md:w-1/2 h-96 bg-[#053b50] w-1/3 m-2 flex flex-col rounded-xl">
                    <div className="h-1/2 p-2">
                        <img className="object-cover rounded-xl h-full w-full" src="https://www.metalmarchile.cl/c/43-category_default/articulos-de-limpieza.jpg" alt="" />
                    </div>
                    <div className="h-1/2 ">
                        <div className="w-full text-white text-xl font-bold text-center">PART-TIME</div>
                        <h1 className="text-white text-md text-center mt-6 p-2">Do you want to be part of our family? Apply for cleaning staff.</h1>
                    </div>
                </div>

            </div>

        </div>


    );
};

export default WorkWithUs;