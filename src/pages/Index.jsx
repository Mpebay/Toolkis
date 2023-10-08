import React, { useEffect, useState } from "react";
import userIcon from "../../public/user-circle-svgrepo-com.svg";
import burguerMenu from "../../public/menu-alt-03-svgrepo-com.svg";
import searchIcon from "../../public/search-svgrepo-com.svg";
import cross from "../../public/cross-small-svgrepo-com.svg"
import { AnimatePresence, motion } from "framer-motion";

const Index = () => {
  const [search, setSearch] = useState(false);
  const [show, setShow] = useState(false);
  const [categories,setCategories] =useState([])
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
        id: 4645654,
        name: "products 4",
        subProducts: ["pro10", "pro11", "pro12"],
        state: false,
      },
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
  
  return (
    <div className="w-full h-screen">
      <div className="bg-[#053b50] py-3 relative">
        <div className="flex text-sm items-center gap-2 justify-center">
          <img
            className=" h-16"
            src="../public/png-clipart-computer-icons-others-miscellaneous-desktop-wallpaper.png"
            alt=""
          />
          <h1 className=" flex text-6xl items-center text-cyan-50 ">
            <span className="text-[#eea221] font-extrabold text-6xl">T</span>
            oolki<span className="text-[#eea221] ">s.</span>
          </h1>
        </div>
        <div className="w-full min-h-32  text-xl text-white p-3 justify-between items-center flex  ">
          <img
            className="h-12 cursor-pointer "
            onClick={() => setShow(!show)}
            src={burguerMenu}
            alt="menu"
          />
          <img
            className="h-10"
            onClick={() => setSearch(!search)}
            src={searchIcon}
            alt="search"
          />
          <img className="h-10 cursor-pointer " src={userIcon} alt="user icon" />
        </div>
        {search ? (
          <motion.div animate={{y:[-15,0]}} className="justify-center flex gap-2 px-2  items-center w-full">
            <input className="w-9/12 h-5" type="text" />
            <p className="font-bold text-[#eea221] border border-[#eea221] p-1 cursor-pointer">
              search
            </p>
          </motion.div>
        ) : null}
      </div>
      <div className="w-full min-h-screen bg-[#f0ebe3] flex justify-center"></div>
      <AnimatePresence>
      {show ? (
        <div className="fixed w-full z-50 top-0 flex">
          <motion.div
          initial={{x:-400}}
            animate={{ x: 0}}
            transition={{ type: "spring", stiffness: 500, damping: 50 }} 
            exit={{x:-400}}
            className="bg-[#053b50] h-screen w-full sm:w-10/12 px-3 py-2"
          >
            <div className=" flex justify-end">
              <img className="h-8" onClick={() => setShow(!show)} src={cross} alt="close menu" />
            </div>
            <ul className="text-white font-bold text-2xl flex flex-col gap-4">
                <AnimatePresence>
                  {categories?.map(cat=>
                  {
                    return <div key={cat.id}>
                              <p className="cursor-pointer" onClick={()=> handleList(cat.id)}>{cat.name}</p>
                                <motion.div
                                initial={{y:null}}
                                animate={{y:10}}
                                exit={{y:null}}
                                className="font-normal text-lg flex flex-col gap-2 ">
                                  {cat.state && cat.subProducts && cat.subProducts?.map(sub=>{
                                    return <p className="cursor-pointer" key={sub}>{sub}</p>
                                  })
                                  }
                                </motion.div>
                        </div>
                  })
                  }
                </AnimatePresence>
            </ul>
          </motion.div>
          <motion.div
            animate={{ opacity: [0, 0.5, 1] }}
            onClick={() => setShow(!show)}
            className="bg-[#00000042] hidden sm:flex h-screen w-full"
            ></motion.div>
        </div>
      ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Index;
