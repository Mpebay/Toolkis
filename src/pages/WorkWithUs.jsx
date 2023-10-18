import React, {useState, useRef} from 'react'
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

      <div className="w-full min-h-screen flex flex-col bg-[#f0ebe3]">
          <div className="w-full h-12 flex justify-center text-center">
              <h1 className="text-xl mt-8 md:text-5xl">WORK WITH US</h1>
          </div>
          <div className="flex justify-center">
              <h1 className="text-3xl text-[#053b50] font-semibold mt-16 md:mt-8">Featured Job Offers</h1>
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
          <div className="w-full flex flex-col md:flex-row mt-3 items-center">
              <div className="w-full h-screen md:w-1/3 m-2 flex flex-col rounded-xl">
                  <div className="h-1/2 rounded-t-xl">
                      <img className="object-cover h-full w-full" src="https://eurotransis.com/wp-content/uploads/2018/12/Qu%C3%A9-es-y-como-se-hace-picking.jpg" alt="" />
                  </div>
                  <div className="h-1/2 bg-[#053b50]">
                      <div className="h-5 w-24 bg-white font-semibold text-center text-[#053b50]">FULLTIME</div>
                      <h1 className="text-white text-xl text-center mt-6">Do you want to be part of our family? Dispatch Assistants to work in our distribution center.</h1>
                  </div>
              </div>
              <div className="w-full md:w-1/3 m-2 h-screen">
                  <div className="h-1/2">
                      <img className="object-cover h-full w-full" src="https://ferreteria-y-bricolaje.cdecomunicacion.es/wp-content/uploads/2023/04/ferreteria-medellin-1140x641.jpg" alt="" />
                  </div>
                  <div className="h-1/2 bg-[#053b50]">
                      <div className="h-5 w-24 bg-white font-semibold text-center text-[#053b50]">FULLTIME</div>
                      <h1 className="text-white text-xl text-center mt-6">Do you want to be part of our family? inn salesman to work in our premises.</h1>
                  </div>
              </div>
              <div className="w-full md:w-1/3 h-screen">
                  <div className="h-1/2">
                      <img className="object-cover h-full w-full" src="https://www.metalmarchile.cl/c/43-category_default/articulos-de-limpieza.jpg" alt="" />
                  </div>
                  <div className="h-1/2 bg-[#053b50]">
                      <div className="h-5 w-24 bg-white font-semibold text-center text-[#053b50]">PART TIME</div>
                      <h1 className="text-white text-xl text-center mt-6">Do you want to be part of our family? apply for cleaning staff.</h1>
                  </div>
              </div>
              
          </div>
          
</div>
              
     
  );
};

export default WorkWithUs;

