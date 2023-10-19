import React, { useState } from 'react';
import axios from 'axios';
import { uploadFile } from '../../firebase/firebase.js';

const DIY = () => {
    const [keyword, setKeyword] = useState('');
    const [videoUrl, setVideoUrl] = useState('');

    const apiYoutubeKey = 'AIzaSyAja3E2CFp748eeLvUITPy38ghevxMmXhc'
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

    const handleSearch = async () => {
      try {
          const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
              params: {
                  q: keyword,
                  type: 'video',
                  part: 'snippet',
                  key: apiYoutubeKey,
              },
          });

          if (response.data.items.length > 0) {
              const videoId = response.data.items[0].id.videoId;
              setVideoUrl(`https://www.youtube.com/embed/${videoId}`);
          } else {
              setVideoUrl('');
          }
      } catch (error) {
          console.error('Error al buscar videos en YouTube', error);
      }
  };
  return (
    <>

    
    <div className='w-full h-full bg-[#f0ebe3]'>
          
          <div className="flex flex-col justify-center items-center">
              <h1 className='text-xl md:text-5xl font-semibold mt-8'>WELCOME TO DO IT YOURSELF!</h1>
              <h1 className="text-xl text-center text-[#053b50] font-semibold mt-4 md:mt-8">A space when you can watch and upload your own way to do something. All related with hardware.</h1>
          </div>
        <div className=' flex min-h-full w-full flex-col gap-3 p-3 items-center'>
          <div className='flex flex-col md:flex-row justify-around items-center'>
            <div className='border p-4 border-black w-full min-h-72 md:w-1/3 md:h-1/3  gap-3 bg-[#176B87] rounded-lg flex flex-col items-center '>

                <h3 className='text-white text-2xl'>How to upload a video</h3>

                <p className='text-white text-start w-full'>
                    •Click on our "Select a file" button 
                    </p>
                <p className='text-white text-start w-full'>
                •Choose a video file from your pc
                    </p>
                <p className='text-white text-start w-full'>
                •Press "Upload video" (you should receive a success or an error message regarding the upload)
                    </p>
                <p className='text-white text-start w-full'>
                •As a tip: remember to upload practical videos! Make sure they are not longer than 5 minutes, to keep it short, fresh and simple!
                    </p>
            </div>
        
            <div className='flex flex-col w-full p-4 mt-4 md:w-48 md:h-1/3 bg-[#176B87] items-center text-base justify-center rounded-md'>
            <div>
              <h1 className='text-white'>Upload your video</h1>
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
          </div>

            <div className='w-11/12 rounded-md h-full p-5 bg-[#176B87]'>
            <div className=' items-center flex flex-col'>
                <label htmlFor="" id='youtube'></label>
                <input type="text" placeholder="Send a keyword" value={keyword}
                onChange={(e) => setKeyword(e.target.value)} className='mt-5' />
                <button onClick={handleSearch}>Search</button>
                </div>
                

                <div className='h-52 md:min-h-[50vh] w-full flex justify-center item-center'>
                {videoUrl && (
                    <div className=''>
                        <iframe
                            title="Video"
                            className='md:w-[80vw] max-md:w-[80vw] h-48 md:h-full'
                            src={videoUrl}
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div> 
      
        </div>
          
        </div>
        
        </div>
    </>
  )
}

export default DIY