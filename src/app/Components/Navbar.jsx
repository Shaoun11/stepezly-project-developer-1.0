"use client"
import { Link } from 'react-scroll/modules';
import Image from 'next/image'
import React, { useState } from 'react';
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import navbar_logo from "../../../public/Navbar_Image/navbar_logo.svg"
import navbar_cart_Icon from "../../../public/Navbar_Image/navbar_cart_Icon.svg"
import navbar_person_Icon from "../../../public/Navbar_Image/navbar_person_icn.svg"
import navbar_search_icon from "../../../public/Navbar_Image/navbar_search_icon.svg"
import '../utils/button.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(!false);
    const [activeLink, setActiveLink] = useState(null);

    const handleClick = (linkId) => {
        setActiveLink(linkId);
    };
    return (
        //Navbar code start
        <div className="shadow-sm sticky -top-1 bg-opacity-50   backdrop-blur-3xl   lg:h-[80px] w-full  h-auto   bg-[#fffaf8]  ">
            <div className="max-w-7xl mx-auto ">
                <nav className="px-6 py-3 flex justify-between items-center">
                    <button className="flex items-center cursor-pointer px-4  py-2 rounded-lg" style={{ background: 'linear-gradient(90deg, rgba(180, 234, 238, 0.20) 0%, rgba(172, 146, 236, 0.20) 100%)' }}>
                        <Image src={navbar_logo} alt='logo' />
                        <Link to="/" smooth={true} offset={-90} className={`font-bold ${activeLink === '/' ? 'clicked' : ''}`}  onClick={() => handleClick('/')}>
                       
                            <h2 class='text-[#000] md:text-xl text-lg font-medium'>StepEzly </h2>
                        </Link>
                    </button>
                    {/* lg: device navbar    */}
                    <ul className="hidden cursor-pointer lg:flex justify-between items-center gap-8 text-base text-[#18233B]  font-normal ">
                        <li>
                            <Link to='/' smooth={true} offset={-90}
                             className={`hover:text-[#ADA2EC] active:text-[#ADA2EC] ${activeLink === 'home' ? 'clicked' : ''}`}
                             onClick={() => handleClick('home')}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="sale" smooth={true} offset={-90} 
                                className={`hover:text-[#ADA2EC] active:text-[#ADA2EC] ${activeLink === 'sale' ? 'clicked' : ''}`}
                                onClick={() => handleClick('sale')}
                            >
                                Sale And Offers
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="about" smooth={true} offset={-90} 
                                className={`hover:text-[#ADA2EC] active:text-[#ADA2EC] ${activeLink === 'about' ? 'clicked' : ''}`}
                                onClick={() => handleClick('about')}
                            >
                                About Us

                            </Link>
                        </li>
                        <li>
                            <Link
                                to="testimonial" smooth={true} offset={-90} 
                                className={`hover:text-[#ADA2EC] active:text-[#ADA2EC] ${activeLink === 'testimonial' ? 'clicked' : ''}`}
                                onClick={() => handleClick('testimonial')}
                            >
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="product" smooth={true} offset={-90} 
                                className={`hover:text-[#ADA2EC] active:text-[#ADA2EC] ${activeLink === 'product' ? 'clicked' : ''}`}
                                onClick={() => handleClick('product')}
                            >
                                Product

                            </Link>
                        </li>

                    </ul>

                    <div className="flex items-center  gap-x-3">
                        {/* Mobile device navbar */}
                        <div
                            onClick={() => setToggleMenu(!toggleMenu)}
                            className="lg:hidden order-2"
                        >
                            {toggleMenu === true ? (
                                <HiMenuAlt1 className="lg:hidden  text-3xl font-semibold text-[#18233B] cursor-pointer" />
                            ) : (
                                <IoClose className="lg:hidden text-3xl text-[#18233B] cursor-pointer" />
                            )}

                            <ul
                                className={`mt-[182px] absolute w-full h-[380px] rounded-md top-full right-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-[#FEFFFF] backdrop-blur-3xl text-[#000] p-8 z-50 flex flex-col items-center  gap-y-4 text-xl font-medium lg:hidden ${toggleMenu ? "hidden" : ""
                                    }`}
                            >
                              <li>
                            <Link to='/' smooth={true} offset={-90}
                             className={`${activeLink === 'home' ? 'clicked' : ''}`}
                             onClick={() => handleClick('home')}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="sale" smooth={true} offset={-90} 
                                className={`${activeLink === 'sale' ? 'clicked' : ''}`}
                                onClick={() => handleClick('sale')}
                            >
                                Sale And Offers
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="about" smooth={true} offset={-90} 
                                className={`${activeLink === 'about' ? 'clicked' : ''}`}
                                onClick={() => handleClick('about')}
                            >
                                About Us

                            </Link>
                        </li>
                        <li>
                            <Link
                                to="testimonial" smooth={true} offset={-90} 
                                className={` ${activeLink === 'testimonial' ? 'clicked' : ''}`}
                                onClick={() => handleClick('testimonial')}
                            >
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="product" smooth={true} offset={-90} 
                                className={`  ${activeLink === 'product' ? 'clicked' : ''}`}
                                onClick={() => handleClick('product')}
                            >
                                Product

                            </Link>
                        </li>


                                {/* lg:Navbar search */}
                                <div className=' mx-auto'>
                                    <div className="relative  md:flex items-center w-full h-10 rounded-lg focus-within:shadow-lg bg-[#F5F5F5] overflow-hidden">
                                        <div className="flex">
                                            <span className='py-2 px-4 text-[#12161F]'> All

                                            </span>
                                            <svg className='mt-2 mr-3' xmlns="http://www.w3.org/2000/svg" width="2" height="26" viewBox="0 0 2 32" fill="none">
                                                <path d="M1 1L1 31" stroke="#D9D9D9" stroke-linecap="round" />
                                            </svg>
                                        </div>

                                        <input
                                             className="peer h-full w-full outline-none text-sm bg-[#F5F5F5] text-[#BEBEBE] pr-2"
                                            type="text"
                                            id="search"
                                            placeholder="Search Product" />
                                    </div>
                                </div>
                               {/* sm: Navbar button  */}

                                <div className='flex gap-4'>

                                    <Image src={navbar_search_icon} ></Image>
                                    <Image src={navbar_person_Icon} ></Image>
                                    <Image src={navbar_cart_Icon} ></Image>
                                </div>

                            </ul>

                        </div>

                        {/* lg:Navbar search */}
                        <div  className=' mx-auto'>
                            <div  className="relative md:visible hidden md:flex items-center w-full h-10 rounded-lg focus-within:shadow-lg bg-[#F5F5F5] overflow-hidden">
                                <div  className="flex">
                                    <span className='py-2 px-4 text-[#12161F]'> All

                                    </span>
                                    <svg className='mt-2 mr-3' xmlns="http://www.w3.org/2000/svg" width="2" height="26" viewBox="0 0 2 32" fill="none">
                                        <path d="M1 1L1 31" stroke="#D9D9D9" stroke-linecap="round" />
                                    </svg>
                                </div>

                                <input
                                    className="peer h-full w-full outline-none text-sm bg-[#F5F5F5] text-[#BEBEBE] pr-2"
                                    type="text"
                                    id="search"
                                    placeholder="Search Product" />
                            </div>
                        </div>
                        {/* lg: Navbar button  */}
                        <div className='flex gap-4 md:visible invisible'>

                            <Image src={navbar_search_icon} ></Image>
                            <Image src={navbar_person_Icon} ></Image>
                            <Image src={navbar_cart_Icon} ></Image>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        //Navbar code end
    );
};

export default Navbar;