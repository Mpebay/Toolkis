import React, {useState, useRef} from 'react'
import firebase from '../../firebase/firebase.js';
import 'firebase/storage';

const WorkWithUs = () => {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null)

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setSelectedFile(selectedFile);
      }

      const handleUpload = () => {
        if (selectedFile) {
          const storageRef = firebase.storage().ref();
          const fileRef = storageRef.child(selectedFile.name);
    
          fileRef.put(selectedFile)
            .then((snapshot) => {
              console.log('Archivo subido con éxito');
              // Aquí puedes realizar otras acciones después de subir el archivo, como guardar la URL de descarga en una base de datos.
            })
            .catch((error) => {
              console.error('Error al subir el archivo', error);
            });
        } else {
          console.error('No se ha seleccionado ningún archivo.');
        }
      }
    
      const handleButtonClick = () => {
        fileInputRef.current.click();
      }

      const handleSubmit = (event)=>{
        event.preventDefault()
      }

  return (
    <div className='w-full min-h-screen flex flex-col '>
        <div className='w-full h-12 mt-20 flex justify-center text-center '>
      <h1 className='text-5xl font-semibold text-[#053b50]'>WORK WITH US</h1>
      </div>
    <div className='flex justify-center'>
        <h1 className='text-3xl text-[#053b50] font-semibold  mt-16 md:mt-8'>Featured Job Offers</h1>
    </div>
    <div className='w-full flex flex-col md:flex-row mt-3 items-center'>
        <div className='w-full h-screen  md:w-1/3 m-2 flex flex-col rounded-xl'>
            <div className='h-1/2 rounded-t-xl'>
                <img className="object-cover h-full w-full " src="https://eurotransis.com/wp-content/uploads/2018/12/Qu%C3%A9-es-y-como-se-hace-picking.jpg" alt="" />
            </div>
            <div className='h-1/2 bg-[#053b50]' >
                <div className='h-5 w-24 bg-white font-semibold text-center text-[#053b50]'>FULLTIME</div>
                <h1 className='text-white text-xl text-center mt-6'>Do you want to be part of our family? Dispatch Assistants to work in our distribution center.</h1>
                <div className='flex flex-col items-center'>
                     <form action="/workwithus" method="post" enctype="multipart/form-data" onSubmit={handleSubmit}>
      <button onClick={handleButtonClick} className='text-[#053b50] bg-white h-8 w-36 mt-4 rounded-sm ºfont-bold'>Your CV here</button>
      <input type="file" style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileChange} />
      {selectedFile && <p className='text-white text-center'>File selected: {selectedFile.name}</p>}
      {selectedFile && <button className='text-[#053b50] bg-white p-1' onClick={handleUpload}>Upload CV</button>}
      </form> 
    </div>
            </div>
        </div>
        <div className='w-full md:w-1/3 m-2 h-screen '>
            <div className='h-1/2 '>
                <img className="object-cover h-full w-full "src="https://ferreteria-y-bricolaje.cdecomunicacion.es/wp-content/uploads/2023/04/ferreteria-medellin-1140x641.jpg" alt="" />
            </div>
            <div className='h-1/2 bg-[#053b50]'>
            <div className='h-5 w-24 bg-white font-semibold text-center text-[#053b50]'>FULLTIME</div>
                <h1 className='text-white text-xl text-center mt-6'>Do you want to be part of our family? inn salesman to work in our premises.</h1>
                <div className='flex flex-col items-center'>
      <button onClick={handleButtonClick} className='text-[#053b50] bg-white h-8 w-36 mt-4 rounded-sm font-bold'>Your CV here</button>
      <input type="file" style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileChange} />
      {selectedFile && <p className='text-white text-center'>File selected: {selectedFile.name}</p>}
      {selectedFile && <button className='text-[#053b50] bg-white p-1' onClick={handleUpload}>Upload CV</button>}
    </div>
            </div>
        </div>
        <div className=' w-full md:w-1/3 h-screen '>
            <div className='h-1/2 '>
                <img className="object-cover h-full w-full"src="https://www.metalmarchile.cl/c/43-category_default/articulos-de-limpieza.jpg" alt="" />
            </div>
            <div className='h-1/2 bg-[#053b50]'>
                <div className='h-5 w-24  bg-white font-semibold text-center text-[#053b50]'>PART TIME</div>
                <h1 className='text-white text-xl text-center mt-6'>Do you want to be part of our family? apply for cleaning staff.</h1>
                <div className='flex flex-col items-center justify-center'>
      <button onClick={handleButtonClick} className='text-[#053b50] bg-white h-8 w-36 mt-4 rounded-sm font-bold'>Your CV here</button>
      <input type="file" style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileChange} />
      {selectedFile && <p className='text-white text-center'>File selected: {selectedFile.name}</p>}
      {selectedFile && <button className='text-[#053b50] bg-white p-1' onClick={handleUpload}>Upload CV</button>}
    </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default WorkWithUs
