import React, { useEffect, useState } from 'react'
import { DROPDOWN_DATA, NAV_DATA } from '../utils/Helper';
import mainlogo from '../assets/image/webp/logo.webp';
import Icons from '../common/Icons';


const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const [show, setShow] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        document.body.style.overflow = show ? "" : "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, [show]);
  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (window.innerWidth < 992) {
      setShow(!show);
    } else {
      e.preventDefault();
    }
  };
  return (
    <>
      <div className='container relative z-[2]'>
        <div className={`${!show ? "min-h-screen" : ""} `}>
          <div className="flex justify-between items-center bg-transparent py-1.5">
            <a href="/">
              <img className='pointer-events-none w-[68px]' src={mainlogo} alt="#" />
            </a>
            <div
              className={`flex flex-col lg:flex-row items-center gap-7 lg:gap-6 max-lg:fixed max-lg:justify-center duration-300 ease-linear top-0 max-lg:-right-full max-lg:bg-dark-blue max-lg:z-[90] max-lg:h-screen max-lg:w-full ${show ? "" : " !right-0"
                }`}
            >
              {NAV_DATA.map((items, index) => (
                <a key={index} href={`/${items.url}`} onClick={(e) => handleClick(e, items.url.substring(1))} className='font-machice_regular lg:text-base text-lg leading-5 text-white duration-300 hover:underline ease-linear  '>{items.text}</a>
              ))}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="font-machice_regular lg:text-base text-lg leading-5 text-white flex items-center space-x-1">
                  <span>More</span>
                  <Icons iconName="downIcon" isDropdownOpen={isDropdownOpen} />
                </button>

              </div>
              <button className='sm:p-[13px_32px] p-[12px_24px] lg:hidden border lg:text-lite-blue text-white lg:border-lite-blue border-white rounded-lg font-machice_regular text-base leading-4 hover:bg-lite-blue hover:text-white   '>
                <span className="relative z-20">Enter App</span>
              </button>
            </div>
            <button className='sm:p-[13px_32px] p-[12px_24px] hidden lg:block border lg:text-lite-blue text-white lg:border-lite-blue border-white rounded-lg font-machice_regular text-base leading-4 hover:bg-lite-blue hover:text-white '>
              <span className="relative z-20">Enter App</span>
            </button>
            <button
              aria-label='Toggle Navigation Menu'
              className="cursor-pointer relative w-8 h-7 z-[90] lg:hidden"
              onClick={() => setShow(!show)}>
              {[...Array(3)].map((_, i) => (
                <span key={i} className={`w-full h-1 rounded-xl bg-white block duration-300 ease-linear absolute ${i === 0 ? "top-0 left-0" : i === 1 ? "top-1/2 -translate-y-1/2" : "bottom-0 left-0"} ${i === 0 && !show ? "rotate-45 top-1/2 -translate-y-1/2" : ""} ${i === 2 && !show ? "-rotate-45 top-1/2 -translate-y-1/2 bottom-auto" : ""} ${i === 1 && !show ? "hidden" : "flex"}`}></span>
              ))}
            </button>
          </div>
          <div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header