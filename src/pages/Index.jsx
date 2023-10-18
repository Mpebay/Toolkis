import React, { useEffect, useState } from "react";
import background from "../../public/flat-lay-of-various-technician-tools-isolated-on-white-background.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actionCart from "../../redux/actions/actionCart";
import favorite from "../../public/heart-svgrepo-com.svg";
import festbanner from "../../public/festool_orig.jpg"
import blackand from "../../public/blackadn.png"
import offchrist from "../../public/7434542ff41f01079e2b39d15894683b.png"
import { addFavorite,removeFavorite } from "../../redux/actions/actionFavorite";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";

const Index = () => {
    const [items, setItems] = useState([]);
    const { allItems } = useSelector((store) => store.itemsReducer);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentArrayIndex, setCurrentArrayIndex] = useState(0);
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
    const [sale, setSale] = useState({});
    const isMd = useMediaQuery("(max-width: 765px)")
    const isLg = useMediaQuery("(max-width: 1024px)")

  const { cart } = useSelector((store) => store.cartReducer);
  const { favorites } = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();

  const banner =[
    festbanner,
    blackand,
  ]  
  const images = [
    "../1000_F_221721790_zTZJlTtFV9CR3hTc6Csd3mhwvkKi0k7q.jpg",
    "../b&d.png",
    "../boschlogo.png",
    "../bahco-logo.png",
  ];
  useEffect(() => {
    
    const product = allItems.find(item => item.name === "Cordless Drill")
    setSale(product)

  }, [allItems])
  
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
    const marcasAll = [...new Set(allItems.map(item => item.brand))];
    console.log(marcasAll);
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
        <div className="w-full min-h-screen bg-[#f0ebe3] flex flex-col items-center gap-28 ">
          <div className="w-full border-y-2 border-[#0e4355] justify-center flex bg-[#0e4355d8]">
            <div className="w-full flex justify-center my-10 min-h-[10vh] max-h-[50vh] border-y-2 border-[#eea221]">

         
          <div  className="w-10/12 bg-[#0e4355] m-6 flex justify-around items-center  ">
          <img
                src="../arrowcarousel.png"
                className="w-6 h-6 p-1 bg-white opacity-50 rounded-full cursor-pointer rotate-180  "
                onClick={prevSlideBanner}
              />
                <img className="h-[50vh] object-fill lg:object-cover cursor-pointer w-11/12 object-top" src={banner[currentBannerIndex]} alt="banner" />
                <img
                src="../arrowcarousel.png"
                className="w-6 h-6 p-1 bg-white opacity-50 rounded-full cursor-pointer  "
                onClick={nextSlideBanner}
                />
              </div>
          </div>
              </div>

              {/* ------------------------------------------------------------------------------------------------ */}

                {/* <div className="min-h-[30vh] w-6/12 py-10 justify-center gap-5 flex bg-[#053b50a3] ">
                <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    key={sale._id}
                    className="h-[30vh] w-52 flex flex-col border border-[#053b50] rounded-md gap-2 items-center  md:h-[60vh] md:w-[20vw] justify-between md:hover:scale-105 md:transform md:duration-300 shadow-gray-600 shadow-lg bg-[#0e4355b2] p-1 "
                  >
                    <img
                      className=" h-6 fixed top-0 right-1"
                      onClick={() => handleFavorite(sale._id)}
                      src={favorite}
                      alt="favorite"
                      style={{
                        filter: favorites.some(
                          (favoriteItem) => favoriteItem._id === sale._id
                        )
                          ? "invert(50%) sepia(98%) saturate(2479%) hue-rotate(320deg) brightness(100%) contrast(101%)"
                          : "none",
                      }}
                    />
                    <h3 className="text-xs text-white font-bold pb-2">
                      {sale.name}
                    </h3>
                    <img
                      className="w-full h-32 bg-white border md:w-full md:h-40 object-contain"
                      src={sale.photo}
                      alt=""
                    />
                    <p className="text-white text-xs line-clamp-5">
                      {sale.description}
                    </p>
                    <p className="text-white w-3/4 text-end font-semibold">
                      ${sale.price}
                    </p>
                    <div className="w-full flex gap-1">
                      <Link
                        to={`/${sale._id}/details`}
                        className="w-full h-5 text-xs text-white rounded-lg text-center bg-[#053b50]"
                      >
                        See more
                      </Link>
                      <p
                        onClick={() => {
                          if (
                            !cart.find(
                              (item) => item.product._id === sale._id
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
                  </motion.div>
                  <img className=" h-[60vh]" src={offchrist} alt="christmas" />
                </div> */}

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

          

          <div className="w-full min-h-36 relative flex flex-col justify-center gap-2 items-center border-2 bg-[#0e4355b2] rounded-xl shadow-sm shadow-black p-2 border-gray-600">
            <img
              className="w-4 h-4 absolute top-1 right-1"
              src="../public/tornilloJohn.png"
              alt=""
            />
            <img
              className="w-4 h-4 absolute top-1 left-1"
              src="../public/tornilloJohn.png"
              alt=""
            />
            <img
              className="w-4 h-4 absolute bottom-1 left-1"
              src="../public/tornilloJohn.png"
              alt=""
            />
            <img
              className="w-4 h-4 absolute bottom-1 right-1"
              src="../public/tornilloJohn.png"
              alt=""
            />
            <h2 className="text-white px-2 rounded-md font-bold">
              Take a look at some of our offers!
            </h2>
            <div className="carousel w-full">
              <img
                src="../arrowcarousel.png"
                className="w-6 h-6 p-1 bg-white opacity-50 rounded-full cursor-pointer rotate-180 absolute top-[50%] left-0 md:left-10"
                onClick={prevSlide}
              />
              <img
                className="carousel-image w-full h-24 object-contain md:h-56"
                src={images[currentImageIndex]}
                alt=""
              />
              <img
                src="../arrowcarousel.png"
                className="w-6 h-6 p-1 bg-white opacity-50 rounded-full cursor-pointer absolute top-[50%] right-0 md:right-10"
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
