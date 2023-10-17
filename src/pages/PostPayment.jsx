import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';



const PostPayment = () => {

    const showPurchaseConfirmation = () => {
        Swal.fire({
            icon: 'success',
            title: 'Thank you for your purchase!',
            showConfirmButton: false,
            timer: 3000, 
        });
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const images = [
        "../1000_F_221721790_zTZJlTtFV9CR3hTc6Csd3mhwvkKi0k7q.jpg",
        "../b&d.png",
        "../boschlogo.png",
        "../bahco-logo.png"
    ]

    const nextSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 4000);
    
        return () => {
          clearInterval(interval);
        };
      }, [currentImageIndex]);

      useEffect(()=>{
        showPurchaseConfirmation()
      }, [])

    return (
        <>
            <div className='w-full min-h-screen'>
                <div className='w-full min-h-screen bg-[#f0ebe3] flex flex-col gap-10 p-3'>

                    <div className='w-full min-h-36 relative flex flex-col justify-center gap-2 items-center border-2 bg-[#0e4355b2] rounded-xl shadow-sm shadow-black p-2 border-[#053b50]'>
                        <img className='w-32 lg:absolute top-0 left-2' src="../public/limited2.png" alt="" />
                        <img className='w-4 h-4 absolute top-1 right-1' src="../public/tornilloJohn.png" alt="" />
                        <img className='w-4 h-4 absolute top-1 left-1' src="../public/tornilloJohn.png" alt="" />
                        <img className='w-4 h-4 absolute bottom-1 left-1' src="../public/tornilloJohn.png" alt="" />
                        <img className='w-4 h-4 absolute bottom-1 right-1' src="../public/tornilloJohn.png" alt="" />
                        <h3 className='flex flex-col md:flex-row justify-center items-center text-white font-bold md:text-2xl'>Don't let it spook you! It's our <span><img className='w-48 h-14' src="../public/hallospecial.png" alt="" /></span> special!</h3>
                        <div className='h-25 w-36 flex flex-col border border-gray-400 rounded-md gap-2 items-center md:w-52 md:h-64 justify-between hover:scale-110 transform duration-300 shadow-white shadow-sm bg-[#F0EBE3] p-1 '>
                            <h3 className='text-xs text-gray-600 font-bold pb-2'>Item 1</h3>
                            <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/pumpkintools.jpg" alt="" />
                            <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-slate-600'>See more</button>
                        </div>
                    </div>

                    <div className='w-full min-h-36 relative flex flex-col justify-center gap-2 items-center border-2 bg-[#0e4355b2] rounded-xl shadow-sm shadow-black p-2 border-gray-600'>
                        <img className='w-4 h-4 absolute top-1 right-1' src="../public/tornilloJohn.png" alt="" />
                        <img className='w-4 h-4 absolute top-1 left-1' src="../public/tornilloJohn.png" alt="" />
                        <img className='w-4 h-4 absolute bottom-1 left-1' src="../public/tornilloJohn.png" alt="" />
                        <img className='w-4 h-4 absolute bottom-1 right-1' src="../public/tornilloJohn.png" alt="" />
                        <h2 className='text-white px-2 rounded-md font-bold'>Take a look at some of our offers!</h2>
                        <div className="carousel w-full">
                            <img src='../arrowcarousel.png' className='w-6 h-6 p-1 bg-white opacity-50 rounded-full cursor-pointer rotate-180 absolute top-[50%] left-0 md:left-10' onClick={prevSlide}/>
                            <img
                                className="carousel-image w-full h-24 object-contain md:h-56"
                                src={images[currentImageIndex]}
                                alt=""
                            />
                            <img src='../arrowcarousel.png' className='w-6 h-6 p-1 bg-white opacity-50 rounded-full cursor-pointer absolute top-[50%] right-0 md:right-10' onClick={nextSlide}/>
                        </div>
                    </div>

                    <div className='w-full min-h-64 relative border-2 bg-[#0e4355b2] rounded-xl shadow-sm shadow-black p-2 flex flex-col items-center border-gray-600'>
                        <img className='w-4 h-4 absolute top-1 right-1' src="../public/tornilloJohn.png" alt="" />
                        <img className='w-4 h-4 absolute top-1 left-1' src="../public/tornilloJohn.png" alt="" />
                        <img className='w-4 h-4 absolute bottom-1 left-1' src="../public/tornilloJohn.png" alt="" />
                        <img className='w-4 h-4 absolute bottom-1 right-1' src="../public/tornilloJohn.png" alt="" />
                        <h2 className='text-white px-2 rounded-md mb-5 font-bold'>Check out this combo!</h2>
                        <div className='flex flex-wrap justify-center gap-6'>
                            <div className='h-25 w-36 flex flex-col border border-gray-400 rounded-md gap-2 items-center md:w-52 md:h-64 justify-between hover:scale-110 transform duration-300 shadow-white shadow-sm bg-[#F0EBE3] p-1 '>
                                <h3 className='text-xs text-gray-600 font-bold pb-2'>Item 1</h3>
                                <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/hammer.avif" alt="" />
                                <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-slate-600'>See more</button>
                            </div>
                            <div className='h-25 w-36 flex flex-col border border-gray-400 rounded-md gap-2 items-center md:w-52 md:h-64 justify-between hover:scale-110 transform duration-300 shadow-white shadow-sm bg-[#F0EBE3] p-1 '>
                                <h3 className='text-xs text-gray-600 font-bold pb-2'>Item 2</h3>
                                <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/screwdriver.jpg" alt="" />
                                <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-slate-600'>See more</button>
                            </div>
                            <div className='h-25 w-36 flex flex-col border border-gray-400 rounded-md gap-2 items-center md:w-52 md:h-64 justify-between hover:scale-110 transform duration-300 shadow-white shadow-sm bg-[#F0EBE3] p-1 '>
                                <h3 className='text-xs text-gray-600 font-bold pb-2'>Item 3</h3>
                                <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/drill.jpg" alt="" />
                                <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-slate-600'>See more</button>
                            </div>
                            {/* <div className='h-25 w-36 flex flex-col border border-gray-400 rounded-md gap-2 items-center md:w-52 md:h-64 justify-between hover:scale-110 transform duration-300 shadow-white shadow-sm bg-[#F0EBE3] p-1 '>
                                <h3 className='text-xs text-gray-600 font-bold pb-2'>Manu's favorite!</h3>
                                <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/specialdrill.jpg" alt="" />
                                <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-slate-600'>See more</button>
                            </div> */}
                            <div className='h-25 w-36 flex flex-col border border-gray-400 rounded-md gap-2 items-center md:w-52 md:h-64 justify-between hover:scale-110 transform duration-300 shadow-white shadow-sm bg-[#F0EBE3] p-1 '>
                                <h3 className='text-xs text-gray-600 font-bold pb-2'>Item 4</h3>
                                <img className='w-full h-2/3 border md:w-full md:h-2/3 border-gray-300' src="../public/nail.jpg" alt="" />
                                <button className='w-full h-5 text-xs text-white rounded-lg text-center bg-slate-600'>See more</button>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5 items-center w-full md:flex-row md:items-center md:justify-center'>
                        <div className='bg-[#053b50] border-2 border-gray-400 rounded-xl shadow-md shadow-black w-full md:w-96 h-64 flex flex-col gap-5 items-center justify-center'>
                            <h1 className='text-2xl text-white'>Free shipping</h1>
                            <img className='max-w-1/2 h-1/2 bg-white p-2 rounded-full' src="../public/shipping.png" alt="" />
                            <h3 className='text-xl text-white'>At your door in <span className='text-xl text-white font-bold underline decoration-1 decoration-slate-400 decoration-double'>24hs or less!</span></h3>
                        </div>

                        <div className='bg-[#053b50] border-2 border-gray-400 rounded-xl shadow-md shadow-black w-full md:w-96 h-64 flex flex-col gap-5 items-center justify-center'>
                            <h1 className='text-2xl text-white text-center'>We accept</h1>
                            <img className='max-w-1/2 h-1/2 bg-white p-2 rounded-full' src="../public/payment.png" alt="" />
                            <h3 className='text-xl text-white'>Credit, debit, PayPal and cash</h3>
                        </div>

                    </div>
                    <div className='bg-gray-500 w-full py-5 md:w-full min-h-32 md:h-16 flex flex-col md:flex-row gap-5 items-center justify-center'>
                        <img className='max-w-2/3 max-h-20 md:max-h-12 ' src="../public/b&d.png" alt="" />
                        <img className='max-w-2/3 max-h-20 md:max-h-12 ' src="../public/bahco-logo.png" alt="" />
                        <img className='max-w-2/3 max-h-10 md:max-h-8 ' src="../public/boschlogo.png" alt="" />
                        <img className='max-w-2/3 max-h-20 md:max-h-12 ' src="../public/craftsmanlogo.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostPayment

