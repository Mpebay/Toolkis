import React, { useEffect, useState } from "react";
import background from "../../public/flat-lay-of-various-technician-tools-isolated-on-white-background.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actionCart from "../../redux/actions/actionCart";
import favorite from "../../public/heart-svgrepo-com.svg";
import festbanner from "../../public/festool_orig.jpg"
import blackand from "../../public/blackadn.png"
import offchrist from "../../public/pexels-laura-james-6102053.jpg"
import powertools from "../../public/360_F_386475281_QJrPiHW4o6h9oWAEBCOdLqkyUyytkjb0.jpg"
import garden from "../../public/banner-flat-lay-gardening-tools-260nw-1654190851.jpg"
import hardware from "../../public/Banner1-3.webp"
import handtools from "../../public/think-blue-handtools.png"
import salesChrismas from "../../public/sale-transparent-background-5.png"
import Swal from 'sweetalert2';
import { addFavorite,removeFavorite } from "../../redux/actions/actionFavorite";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";
import { actionSussesPayment } from "../../redux/actions/actionSussesPayment";

const Index = () => {
    const [items, setItems] = useState([]);
    const { allItems } = useSelector((store) => store.itemsReducer);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentArrayIndex, setCurrentArrayIndex] = useState(0);
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
    const [sales, setSales] = useState([]);
    const isMd = useMediaQuery("(max-width: 765px)")
    const isLg = useMediaQuery("(max-width: 1024px)")

  const { cart , alertComplete } = useSelector((store) => store.cartReducer);
  const { favorites } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();

  const showPurchaseConfirmation = () => {
    dispatch(actionSussesPayment(false))
          Swal.fire({
              icon: 'success',
              title: 'Thank you for your purchase!',
              showConfirmButton: false,
              timer: 3000, 
            });
          
          
      };
  useEffect(() => {
        
        if (alertComplete) {
          showPurchaseConfirmation()
    }
  }, [])
  

  const banner =[
    blackand,
    festbanner,
  ]  
  const images = [
    
    "../b&d.png",
    "../boschlogo.png",
    "../bahco-logo.png",
  ];
  useEffect(() => {
    
    const product1 = allItems.find(item => item.name === "Cordless Drill")
    const product2 = allItems.find(item => item.name === "Drill Press")
    const product3 = allItems.find(item => item.name === "Pressure Washer")
    
    if (isMd) {
      const product = product1
      setSales([product])
    }else if(isLg){
    const product = [product1,product2]
    setSales(product)
  }else{
    const product = [product1,product2,product3]
    setSales(product)
  }


  }, [allItems,isMd,isLg])
  
  const handleCart = (id) => {
      const favorite = allItems.find((item) => item._id === id);
    dispatch(actionCart(favorite));
  };
  
  const handleFavorite = (id) => {
      const item = allItems.find((item) => item._id === id);
      const isFavorite = favorites.some(
          (favoriteItem) => favoriteItem._id === id
          );

    if (isFavorite) {
      dispatch(removeFavorite({ _id: id }));
    } else {
      dispatch(addFavorite(item));
    }
};

useEffect(() => {
    const filtered = allItems.filter((item) => item?.stock < 12);
    const itemsChunks = [];
    const max = isMd?  1 : isLg ? 2 : 4
    for (let i = 0; i < filtered.length; i += max) {
      itemsChunks.push(filtered.slice(i, i + max));
    }
    setItems(itemsChunks);
    console.log(itemsChunks);
}, [allItems,isMd,isLg]);

const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
};
const nextSlideArray = () => {
    setCurrentArrayIndex((prevIndex) => prevIndex < items.length - 1 ? prevIndex + 1 : 0);
};
const nextSlideBanner = () => {
    setCurrentBannerIndex((prevIndex) => prevIndex < banner.length - 1 ? prevIndex + 1 : 0);
};

const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
    prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
};
const prevSlideArray = () => {
    setCurrentArrayIndex((prevIndex) =>
    prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
};
const prevSlideBanner = () => {
    setCurrentBannerIndex((prevIndex) =>
    prevIndex === 0 ? banner.length - 1 : prevIndex - 1
    );
};

useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlideArray();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentArrayIndex]);
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlideBanner();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentBannerIndex]);

  return (
    <>
      <div className="w-full min-h-screen">
        <div className="w-full min-h-screen bg-[#f0ebe3] flex flex-col items-center gap-5 ">
          <div className="w-full border-y-2 md:border-[#0e4355] justify-center flex md:bg-[#0e4355d8]">
            <div className="w-full flex justify-center md:my-10  md:min-h-[10vh] md:max-h-[50vh] md:border-y-2 md:border-[#eea221]">

         
          <div  className="w-full md:w-10/12 bg-[#0e4355] md:m-6 flex justify-around items-center">
          <img
                src="../arrowcarousel.png"
                className="w-6 h-6 p-1 bg-white hidden md:flex opacity-50 rounded-full cursor-pointer rotate-180  "
                onClick={prevSlideBanner}
              />
                <img className="md:h-[50vh] h-[25vh] object-fill lg:object-cover cursor-pointer md:border-x-2 border-[#eea221] w-full md:w-11/12 object-top" src={banner[currentBannerIndex]} alt="banner" />
                <img
                src="../arrowcarousel.png"
                className="w-6 h-6 p-1 bg-white hidden md:flex opacity-50 rounded-full cursor-pointer  "
                onClick={nextSlideBanner}
                />
              </div>
          </div>
              </div>

              

              {/* ------------------------------------------------------------------------------------------------ */}

                <div style={{backgroundImage: `url(${offchrist})`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`}} className="h-[50vh] w-full items-center justify-center gap-5 flex flex-col sm:flex-row  ">
                <div className=" w-full md:w-2/5 h-full flex items-center justify-center border-b-2 sm:border-b-0 sm:border-r-2  border-[#eea221] bg-[#0e435586]">
                  <p className="text-6xl 2xl:text-9xl text-center font-bold text-white">Christmas 
                    Sales
                  </p>
                </div>
                <div className="md:w-3/5 flex gap-8 justify-center my-5 sm:my-0">
                {sales.map(sale => {
                    return (<motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    key={sale?._id}
                    className="h-[30vh] w-52 flex flex-col border border-[#053b50] rounded-md gap-2 items-center  md:h-[40vh] md:w-[15vw] justify-between md:hover:scale-105 md:transform md:duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 "
                  >
                    <img className="lg:flex absolute hidden top-0 left-0 h-20" src={salesChrismas} alt="" />
                    <img
                      className=" h-6 fixed top-0 right-1"
                      onClick={() => handleFavorite(sale?._id)}
                      src={favorite}
                      alt="favorite"
                      style={{
                        filter: favorites.some(
                          (favoriteItem) => favoriteItem._id === sale?._id
                        )
                          ? "invert(50%) sepia(98%) saturate(2479%) hue-rotate(320deg) brightness(100%) contrast(101%)"
                          : "none",
                      }}
                    />
                    <h3 className="text-xs text-white font-bold pb-2">
                      {sale?.name}
                    </h3>
                    <img
                      className="w-full h-32 bg-white border rounded-md md:w-full md:h-40 object-contain"
                      src={sale?.photo}
                      alt=""
                    />
                    <p className="text-white text-xs line-clamp-3">
                      {sale?.description}
                    </p>
                    <p className="text-white w-3/4 text-end font-semibold">
                      ${sale?.price}
                    </p>
                    <div className="w-full flex gap-1">
                      <Link
                        to={`/${sale?._id}/details`}
                        className="w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]"
                      >
                        See more
                      </Link>
                      <p
                        onClick={() => {
                          if (
                            !cart.find(
                              (item) => item.product._id === sale?._id
                            )
                          ) {
                            handleCart(sale?._id);
                          }
                        }}
                        className={`px-5 cursor-pointer h-5 text-xs text-white rounded-lg text-center ${
                          !cart.find(
                            (item) => item.sale?._id === sale._id
                          )
                            ? "bg-[#053b50]"
                            : "bg-[#43626e56]"
                        }`}
                      >
                        Add
                      </p>
                    </div>
                  </motion.div>)})}
                  </div>
                </div>

              {/* ------------------------------------------------------------------------------------------------ */}
                
              <AnimatePresence>

              <div className="w-full flex items-center flex-col lg:flex-row justify-center gap-3 px-2 my-4">
                  <div style={{backgroundImage: `url(${powertools})`, backgroundSize:"cover"}} className="w-[90vw] md:w-[60vw] lg:w-[25vw] h-28 rounded-lg items-center justify-center flex ">
                <Link to={"/category/power tools"}>
                    <motion.p whileHover={{scale:1.1}} className=" text-white font-bold text-5xl text-center  w-full">Power Tools</motion.p>
                  </Link>
                  </div>
                  <div style={{backgroundImage: `url(${garden})`, backgroundSize:"cover"}} className="w-[90vw] md:w-[60vw] lg:w-[25vw] h-28 rounded-lg items-center justify-center flex ">
                <Link to={"/category/home and garden"}>
                    <motion.p whileHover={{scale:1.1}} className=" text-white font-bold text-5xl text-center  w-full">Home & Garden</motion.p>
                  </Link>
                  </div>
                  <div style={{backgroundImage: `url(${hardware})`, backgroundSize:"cover" , backgroundPosition:"bottom"}} className="w-[90vw] md:w-[60vw] lg:w-[25vw] h-28 rounded-lg items-center justify-center flex ">
                <Link to={"/category/hardware"}>
                    <motion.p whileHover={{scale:1.1}} className=" text-white font-bold text-5xl text-center w-full">Hardware</motion.p>
                  </Link>
                  </div>
                  <div style={{backgroundImage: `url(${handtools})`, backgroundSize:"cover"}} className="w-[90vw] md:w-[60vw] lg:w-[25vw] h-28 rounded-lg items-center justify-center flex ">
                <Link to={"/category/hand tools"}>
                    <motion.p whileHover={{scale:1.1}} className=" text-white font-bold text-5xl text-center  w-full">Hand Tools</motion.p>
                  </Link>
                  </div>
                  
                  
                  
                </div>
              </AnimatePresence>

            {/* ------------------------------------------------------------------------------------------------ */}

          <div
            style={{
              backgroundImage: `url(${background})`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `cover`,
              backgroundPosition:`center`
            }}
            className="w-full min-h-[60vh] relative border-y-2 border-[#0e4355] bg-[#0e4355b2] flex flex-col justify-center items-center"
          >
            <div className="bg-[#0e43557e] w-full border-y-2 border-[#eea221] py-5">
              <h2 className="text-white mb-5 bg-[#0e4355ca] text-4xl text-center font-bold">
                Few units left!
              </h2>
              <AnimatePresence>

              <div className="flex gap-3 md:gap-20 justify-center">
              <img
                src="../arrowcarousel.png"
                className="w-6 h-6 p-1 bg-white opacity-50 rounded-full cursor-pointer rotate-180 absolute top-[50%] left-0 md:left-10"
                onClick={prevSlideArray}
              />
                {items[currentArrayIndex]?.map((product) => (
                  <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    key={product._id}
                    className="h-72 w-52 flex flex-col border border-[#053b50] rounded-md gap-2 items-center md:w-52 md:h-80 justify-between md:hover:scale-105 md:transform md:duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 "
                  >
                    <img
                      className=" h-6 fixed top-0 right-1"
                      onClick={() => handleFavorite(product._id)}
                      src={favorite}
                      alt="favorite"
                      style={{
                        filter: favorites.some(
                          (favoriteItem) => favoriteItem._id === product._id
                        )
                          ? "invert(50%) sepia(98%) saturate(2479%) hue-rotate(320deg) brightness(100%) contrast(101%)"
                          : "none",
                      }}
                    />
                    <h3 className="text-xs text-white font-bold pb-2">
                      {product.name}
                    </h3>
                    <img
                      className="w-full h-32 bg-white border md:w-full md:h-40 object-contain"
                      src={product.photo}
                      alt=""
                    />
                    <p className="text-white text-xs line-clamp-3">
                      {product.description}
                    </p>
                    <p className="text-white w-3/4 text-end font-semibold">
                      ${product.price}
                    </p>
                    <div className="w-full flex gap-1">
                      <Link
                        to={`/${product._id}/details`}
                        className="w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]"
                      >
                        See more
                      </Link>
                      <p
                        onClick={() => {
                          if (
                            !cart.find(
                              (item) => item.product._id === product._id
                            )
                          ) {
                            handleCart(product?._id);
                          }
                        }}
                        className={`px-5 cursor-pointer h-5 text-xs text-white rounded-lg text-center ${
                          !cart.find(
                            (item) => item.product?._id === product._id
                          )
                            ? "bg-[#053b50]"
                            : "bg-[#43626e56]"
                        }`}
                      >
                        Add
                      </p>
                    </div>
                  </motion.div>
                ))}
                <img
                src="../arrowcarousel.png"
                className="w-6 h-6 p-1 bg-white opacity-50 rounded-full cursor-pointer absolute top-[50%] right-0 md:right-10"
                onClick={nextSlideArray}
                />
              </div>
                </AnimatePresence>
            </div>
          </div>

          

          <div className="w-full min-h-36 relative flex flex-col justify-center gap-2 items-center ">
            <div className="carousel w-full">
              <img
                src="../arrowcarousel.png"
                className="w-6 hidden h-6 p-1 bg-white opacity-50 rounded-full cursor-pointer rotate-180 absolute top-[50%] left-0 md:left-10"
                onClick={prevSlide}
              />
              <img
                className="carousel-image w-full h-24 object-contain md:h-56"
                src={images[currentImageIndex]}
                alt=""
              />
              <img
                src="../arrowcarousel.png"
                className="w-6 hidden h-6 p-1 bg-white opacity-50 rounded-full cursor-pointer absolute top-[50%] right-0 md:right-10"
                onClick={nextSlide}
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 items-center w-full md:flex-row md:items-center md:justify-center">
            <div className="bg-[#053b50] border-2 border-gray-400 rounded-xl shadow-md shadow-black w-full md:w-96 h-64 flex flex-col gap-5 items-center justify-center">
              <h1 className="text-2xl text-white">Free shipping</h1>
              <img
                className="max-w-1/2 h-1/2 bg-white p-2 rounded-full"
                src="../public/shipping.png"
                alt=""
              />
              <h3 className="text-xl text-white">
                At your door in{" "}
                <span className="text-xl text-white font-bold underline decoration-1 decoration-slate-400 decoration-double">
                  24hs or less!
                </span>
              </h3>
            </div>

            <div className="bg-[#053b50] border-2 border-gray-400 rounded-xl shadow-md shadow-black w-full md:w-96 h-64 flex flex-col gap-5 items-center justify-center">
              <h1 className="text-2xl text-white text-center">We accept</h1>
              <img
                className="max-w-1/2 h-1/2 bg-white p-2 rounded-full"
                src="../public/payment.png"
                alt=""
              />
              <h3 className="text-xl text-white">
                Credit, debit, PayPal and cash
              </h3>
            </div>
          </div>
          <div className="bg-gray-500 w-full py-5 md:w-full min-h-32 md:h-16 flex flex-col md:flex-row gap-5 items-center justify-center">
            <img
              className="max-w-2/3 max-h-20 md:max-h-12 "
              src="../public/b&d.png"
              alt=""
            />
            <img
              className="max-w-2/3 max-h-20 md:max-h-12 "
              src="../public/bahco-logo.png"
              alt=""
            />
            <img
              className="max-w-2/3 max-h-10 md:max-h-8 "
              src="../public/boschlogo.png"
              alt=""
            />
            <img
              className="max-w-2/3 max-h-20 md:max-h-12 "
              src="../public/craftsmanlogo.png"
              alt=""
            />
          </div>
        </div>
        </div>
    </>
  );
};

export default Index;
