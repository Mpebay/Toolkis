import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import userIcon from "../../../public/user-circle-svgrepo-com.svg";
import burguerMenu from "../../../public/menu-alt-03-svgrepo-com.svg";
import searchIcon from "../../../public/search-svgrepo-com.svg";
import SearchInput from "../../components/inputs/SearchInput";
import MobileSearchInput from "../../components/inputs/MobileSearchInput";
import Display from "../../components/navBar/Display";
import DisplayWeb from "../../components/navBar/DisplayWeb";
import arrowR from "../../../public/arrow-down-svgrepo-com.svg"
import favorite from "../../../public/heart-svgrepo-com.svg"
import cart from "../../../public/cart-large-svgrepo-com.svg"
import { Link } from "react-router-dom";

const NavBar = () => {
    const [search, setSearch] = useState(false);
    const [show, setShow] = useState(false);
    const [categories,setCategories] =useState([])
    const [isVisible, setIsVisible] = useState(true);
    const [isFooter , setIsFooter] = useState(true)
  const [subMenu , setSubMenu] = useState(false)
     useEffect(()=>{
      const catData = [
        {
          id: 165464,
          name: "products 1",
          subProducts: ["pro1", "pro2", "pro3"],
          state: false,
        },
        { id: 27465, name: "products 2",subProducts: ["pro4", "pro5", "pro6"], state: false },
        {
          id: 3564654,
          name: "products 3",
          subProducts: ["pro7", "pro8", "pro9"],
          state: false,
        },
        {
          id: 464566544554,
          name: "products 4",
          subProducts: ["pro10", "pro11", "pro12"],
          state: false},
        {
          id: 464566456554,
          name: "products 4",
          subProducts: ["pro10", "pro11", "pro12"],
          state: false},
        {
          id: 46456654654,
          name: "products 4",
          subProducts: ["pro10", "pro11", "pro12"],
          state: false},
        {
          id: 4645664545654,
          name: "products 4",
          subProducts: ["pro10", "pro11", "pro12"],
          state: false},
        {
          id: 4645646545654,
          name: "products 4",
          subProducts: ["pro10", "pro11", "pro12"],
          state: false},
        {
          id: 464554656654,
          name: "products 4",
          subProducts: ["pro10", "pro11", "pro12"],
          state: false},
        {
          id: 4645654534,
          name: "products 4",
          subProducts: ["pro10", "pro11", "pro12"],
          state: false},
      ];
      setCategories(catData)
    },[])
    const handleList = (id) => {
      setCategories((prevCategories) => {
        return prevCategories.map((category) => {
          if (category.id === id) {
            return { ...category, state: !category.state };
          }
          return category;
        });
      });
    };

    useEffect(()=>{
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const scrollFromBottom = scrollHeight - (scrollY + clientHeight);
        const scrollThresholdFromBottom = 200;
  
        setIsFooter(scrollFromBottom > scrollThresholdFromBottom);
        setIsVisible(scrollY <= 200); 
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    },[])
  return (
    <>
    <motion.div className=" bg-[#053b50] pb-3 w-full fixed z-20 top-0 border-b-2 border-[#eea221]">
        <motion.div animate={{y:!isVisible?"-100%":0}} className={`${isVisible?"flex":"hidden"} text-sm items-center gap-2 justify-center lg:justify-start py-2 lg:px-3`}>
          <motion.img
          transition={{delay:1}}
            animate={{opacity:[0,0.5,1]}}
            className=" h-16"
            src="../public/png-clipart-computer-icons-others-miscellaneous-desktop-wallpaper.png"
            alt=""
          />
          <motion.h1 initial={{x:"-100%"}} animate={{x:0}}  className=" flex text-6xl items-center text-cyan-50 ">
            <span className="text-[#eea221] font-extrabold text-6xl">T</span>
            oolki<span className="text-[#eea221] ">s.</span>
          </motion.h1>
        </motion.div>
        <div className="w-full min-h-32  text-xl text-white p-3 justify-between items-center flex ">
          <img
            className="h-12 cursor-pointer lg:hidden "
            onClick={() => setShow(!show)}
            src={burguerMenu}
            alt="menu"
          />
          <motion.img
          whileHover={{scale:1.3}}
            className="h-10 cursor-pointer"
            onClick={() => setSearch(!search)}
            src={searchIcon}
            alt="search"
            />
            <AnimatePresence>
            {search ? (
              <SearchInput/>
              ) : null}
              </AnimatePresence>
              <div className="flex gap-4">
                <motion.img src={favorite} whileHover={{scale:1.3}} className="h-10 cursor-pointer " alt="Favorites" />
          <motion.img whileHover={{scale:1.3}} className="h-10 cursor-pointer " src={userIcon} alt="user icon" />

              </div>
        </div>
        <AnimatePresence>
        {search ? (
          <MobileSearchInput/>
          ) : null}
          </AnimatePresence>
          <div className="bg-[#053b50] hidden lg:flex text-white font-medium tracking-widest justify-start gap-5 px-5 relative z-20">
            <p onClick={()=> setShow(!show)} className=" hover:text-[#eea221] cursor-pointer flex">Categories <img className={`h-6 ${show? "rotate-180":""}`}  src={arrowR} alt="colapse" /></p>
            <Link className=" hover:text-[#eea221] cursor-pointer">Section</Link>
            <Link className=" hover:text-[#eea221] cursor-pointer">Section</Link>
            <Link className=" hover:text-[#eea221] cursor-pointer">DIY</Link>
            <Link className=" hover:text-[#eea221] cursor-pointer">Hot Sales</Link>
            <Link className=" hover:text-[#eea221] cursor-pointer">Contact Us</Link>
          </div>
      <AnimatePresence>
      {show && <DisplayWeb key={"DisplayWeb"}/>}
      {show && <Display key={"Display"} categories={categories} show={show} subMenu={subMenu} setSubMenu={setSubMenu}setShow={setShow} handleList={handleList} /> }
      {isFooter && <motion.img className="fixed bottom-[15px] right-[10px] h-14 cursor-pointer " whileHover={{scale:1.3}} initial={{x:"50%"}} animate={{x:0}} exit={{x:"200%"}} src={cart} alt="cart" />}
      </AnimatePresence>
      </motion.div>
      <div className="h-[23vh] bg-[#f0ebe3] w-full">
        {/* ---------------------------------------------------------------------- */}
      </div>
    </>
  )
}

export default NavBar