import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import userIcon from "../../../public/user-circle-svgrepo-com.svg";
import burguerMenu from "../../../public/menu-alt-03-svgrepo-com.svg";
import searchIcon from "../../../public/search-svgrepo-com.svg";
import SearchInput from "../../components/inputs/SearchInput";
import MobileSearchInput from "../../components/inputs/MobileSearchInput";
import Display from "../../components/navBar/Display";
import DisplayWeb from "../../components/navBar/DisplayWeb";
import arrowR from "../../../public/arrow-down-svgrepo-com.svg";
import favorite from "../../../public/heart-svgrepo-com.svg";
import cartIcon from "../../../public/cart-large-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import allCategories from "../../../redux/actions/actionCategories";
import ModalCart from "../cart/modalCart";
import allProducts from "../../../redux/actions/actionProducts";
import { logout } from "../../../redux/actions/actionLogout";
import Swal from "sweetalert2";

const NavBar = () => {
  const [search, setSearch] = useState(false);
  const [show, setShow] = useState(false);
  const [categoriesAndSub, setCategoriesAndSub] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [isFooter, setIsFooter] = useState(true);
  const [subMenu, setSubMenu] = useState(false);
  const [cartShow, setCartShow] = useState(false);
  const [quantityCart, setQuantityCart] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { categories, allItems } = useSelector((store) => store.itemsReducer);
  const { cart } = useSelector(store => store.cartReducer);
  const { email, role } = useSelector(store => store.userReducer.user);
  console.log(email);
  const dispatch = useDispatch();

  const performLogout = () => {
    dispatch(logout());
    
  };

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Log out',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        performLogout(); 
      }
    });
  };

  useEffect(() => {
    if (cart.length > 0) {
      const quantity = cart.length;
      setQuantityCart(quantity);
    } else {
      setQuantityCart(0);
    }
  }, [cart]);

  useEffect(() => {
    if (allItems.length === 0) {
      dispatch(allProducts());
    }
  }, []);

  useEffect(() => {
    if (categoriesAndSub.length === 0) {
      dispatch(allCategories());
      const categoryArrayShow = categories.map(category => {
        const cat = {
          name: category.category,
          id: category.id,
          sub: category.sub,
          show: false
        };
        return cat;
      });
      setCategoriesAndSub(categoryArrayShow);
    }
  }, [dispatch, categories]);

  const handleList = (id) => {
    setCategoriesAndSub((prevCategories) => {
      return prevCategories.map((category) => {
        if (category.id === id) {
          return { ...category, show: !category.show };
        }
        return category;
      });
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollFromBottom = scrollHeight - (scrollY + clientHeight);
      const scrollThresholdFromBottom = 300;

      setIsFooter(scrollFromBottom > scrollThresholdFromBottom);
      setIsVisible(scrollY <= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.div className=" bg-[#053b50] pb-3 w-full fixed z-20 top-0 border-b-2 border-[#eea221]">
        <motion.div animate={{ y: !isVisible ? "-100%" : 0 }} className={`${isVisible ? "flex" : "hidden"} text-sm items-center gap-2 justify-center lg:justify-start py-2 lg:px-3`}>
          <Link to={"/"}>
            <motion.img transition={{ delay: 1 }} animate={{ opacity: [0, 0.5, 1] }} className="h-16" src="../public/png-clipart-computer-icons-others-miscellaneous-desktop-wallpaper.png" alt="Logo" />
          </Link>
          <Link to={"/"}>
            <motion.h1 initial={{ x: "-100%" }} animate={{ x: 0 }} className="flex text-6xl items-center text-cyan-50">
              <span className="text-[#eea221] font-extrabold text-6xl">T</span>
              oolki<span className="text-[#eea221] ">s.</span>
            </motion.h1>
          </Link>
        </motion.div>
        <div className="w-full min-h-32 text-xl text-white p-3 justify-between items-center flex">
          <img className="h-12 cursor-pointer lg:hidden" onClick={() => setShow(!show)} src={burguerMenu} alt="menu" />
          <motion.img whileHover={{ scale: 1.3 }} className="h-10 cursor-pointer" onClick={() => setSearch(!search)} src={searchIcon} alt="search" />
          <AnimatePresence>
            {search ? <SearchInput isVisible={isVisible} /> : null}
          </AnimatePresence>
          <div className="flex gap-4">
            <Link to={"/favorite"}><motion.img src={favorite} whileHover={{ scale: 1.3 }} className="h-10 cursor-pointer " alt="Favorites" /></Link>
            <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="h-10 cursor-pointer">
              <motion.img whileHover={{ scale: 1.3 }} className="h-10 cursor-pointer" src={userIcon} alt="user icon" />
              {isMenuOpen && (
                <div className="absolute right-0 mt-4 bg-white shadow-md z-50">
                  {email ? (
                    <>
                      <Link to="/" onClick={handleLogout} className="block px-4 py-2 text-gray-800 hover-bg-gray-200">Logout</Link>
                      {role === 2 && (
                        <Link to="/adminpanel" className="block px-4 py-2 text-gray-800 hover-bg-gray-200">Admin Panel</Link>
                      )}
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="block px-4 py-2 text-gray-800 hover-bg-gray-200">Login</Link>
                      <Link to="/register" className="block px-4 py-2 text-gray-800 hover-bg-gray-200">Register</Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <AnimatePresence>
          {search ? <MobileSearchInput isVisible={isVisible} /> : null}
        </AnimatePresence>
        <div className="bg-[#053b50] hidden lg:flex text-white font-medium tracking-widest justify-start gap-5 px-5 relative z-20">
          <p onClick={() => setShow(!show)} className="hover-text-[#eea221] cursor-pointer flex">Categories <img className={`h-6 ${show ? "rotate-180" : ""}`} src={arrowR} alt="colapse" /></p>
          <Link to={"/"} className="hover-text-[#eea221] cursor-pointer">Home</Link>
          <Link to={"/products"} className="hover-text-[#eea221] cursor-pointer">All Products</Link>
          <Link to={"/diy"} className="hover-text-[#eea221] cursor-pointer">DIY</Link>
          <Link className="hover-text-[#eea221] cursor-pointer">Hot Sales</Link>
          <Link to={"/contact"} className="hover-text-[#eea221] cursor-pointer">Contact Us</Link>
          <Link to={"/workwithus"} className="hover-text-[#eea221] cursor-pointer">Work With Us</Link>
        </div>
        <AnimatePresence>
          {cartShow && <ModalCart key={"modalCart"} setCartShow={setCartShow} cartShow={cartShow} />}
          {show && <DisplayWeb categoriesAndSub={categoriesAndSub} setShow={setShow} show={show} key={"DisplayWeb"} />}
          {show && <Display key={"Display"} categoriesAndSub={categoriesAndSub} show={show} subMenu={subMenu} setSubMenu={setSubMenu} setShow={setShow} handleList={handleList} />}
          {isFooter && (
            <motion.div onClick={() => setCartShow(!cartShow)} className="fixed bottom-[15px] right-[10px] h-14 cursor-pointer " whileHover={{ scale: 1.3 }} initial={{ x: "50%" }} animate={{ x: 0 }} exit={{ x: "200%" }}>
              <p className="rounded-full flex items-center justify-center absolute z-20 left-[35px] bg-red-600 text-white font-bold w-5 h-5">{quantityCart}</p>
              <img className="h-14 relative" src={cartIcon} alt="cart" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <div className="h-[23vh] bg-[#f0ebe3] w-full">
        {/* ---------------------------------------------------------------------- */}
      </div>
    </>
  );
};

export default NavBar;
