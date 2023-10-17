import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const DIY = () => {
    const [keyword, setKeyword] = useState('');
    const [videos, setVideos] = useState([])
    let [counter, setCounter] = useState(0);

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3, // Define cuántos videos se muestran a la vez
      slidesToScroll: 1,
    };

    let next = () => {
      if (counter + 1 < categories.length) {
        setCounter(counter + 1);
      } else {
        setCounter(0);
      }
    };
  
    const prev = () => {
      if (counter - 1 >= 0) {
        setCounter(counter - 1);
      } else {
        setCounter(categories.length - 1);
      }
    }; 
    const apiYoutubeKey = 'AIzaSyAja3E2CFp748eeLvUITPy38ghevxMmXhc'

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
    
          setVideos(response.data.items);
        } catch (error) {
          console.error('Error al buscar videos en YouTube', error);
        }
      };

  return (
    <>
        <div className=' flex h-[80vh] w-full flex-col bg-[#f0ebe3] md:flex-row  mt-3 gap-3 p-3 items-center'>
          
            <div className='border border-black w-full h-72 md:w-1/5 md:min-h-48 bg-[#176B87] rounded-lg flex flex-col items-center '>
                <h1 className='text-white text-3xl'>Tutorials</h1>

                <h3 className='text-white'>Introduction</h3>
                <h3 className='text-white'>Send us your video</h3>
            </div>
            <div className='border border-black w-full h-96 md:w-4/5 md:min-h-48 bg-[#176B87] rounded-lg flex justify-center'>
           <div>
            <img  onClick={prev} src="../../public/ArrowL.png" className='mt-48 cursor-pointer' alt="" />
            </div>

            
                <div className=' items-center flex flex-col'>
                <label htmlFor="" id='youtube'></label>
                <input type="text" placeholder="Send a keyword" value={keyword}
                onChange={(e) => setKeyword(e.target.value)} className='mt-5' />
                <button onClick={handleSearch}>Search</button>
                </div>
                

                <div className='h-52 w-full flex flex-wrap item-center '>
        {videos.map((video) => (
          <div key={video.id.videoId} className='m-10'>
            <iframe
              title={video.snippet.title}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              allowFullScreen
            ></iframe>
          </div>
        ))}
        </div>
      
     

                <div>
                <img onClick={next} src="../../public/ArrowR.png" className='mt-48 cursor-pointer' alt="" />
                </div>
                
            
            </div>
        </div>
    </>
  )
}

export default DIY
