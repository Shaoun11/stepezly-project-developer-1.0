/*
This file is made by DevGenius (2024)
Project Name:TravelAqsa landing page
*/
import React from 'react';
import Image from 'next/image'
import navbar_logo from "../../../public/Navbar_Image/navbar_logo.svg"
import Link from 'next/link';
const Footer = () => {
    return (
        //stepezly Footer section code start
        <div className="bg-gradient-to-r shadow-md border bg-[#FFF]">
            <div className="  px-4 py-6  sm:px-6 lg:px-1">
                <div className="grid max-w-7xl py-6 mx-auto grid-cols-1 gap-x-28 lg:grid-cols-2">
                    <div>
                        {/*stepezly Footer section text */}
                        <button className="flex items-center cursor-pointer px-4  py-2 rounded-lg" style={{ background: 'linear-gradient(90deg, rgba(180, 234, 238, 0.20) 0%, rgba(172, 146, 236, 0.20) 100%)' }}>
                        <Image src={navbar_logo} alt='logo' />
                        <Link href='/' className=" font-bold">
                            <h2 class='text-[#000] md:text-xl text-lg font-medium'>StepEzly </h2>
                        </Link>
                    </button>
                        <p className=" mt-4 md:text-[60px]  text-[40px]  text-[#000] font-semibold">
                        let’s help your space come to life
                        </p>

                        {/*stepezly Footer section icon end */}
                    </div>
                    {/*stepezly Footer section Nav */}
                    <div className="grid grid-cols-2 lg:ml-0 md:ml-[200px] ml-9 ">
                        <div>
                            <p className=" text-[#0B0951] font-medium text-xl">
                            resources
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2  text-base text-[#000] font-normal">
                                <a className="hover:opacity-75" href> features</a>
                                <a className="hover:opacity-75" href> integration </a>
                                <a className="hover:opacity-75" href> changelog</a>
                               
                            </nav>
                        </div>
                        <div>
                            <p className="text-[#0B0951] font-medium text-xl">
                                Support
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2   text-base text-[#000] font-normal">
                                <a className="hover:opacity-75" href>faq </a>
                                <a className="hover:opacity-75" href> customer care </a>
                                <a className="hover:opacity-75" href> try for free </a>
                            </nav>
                        </div>


                        
                    </div>
                    {/*stepezly Footer section nav end */}
                </div>
                <hr/>
                <div>
                  
                    <p className='text-[#8E8E8E] mt-8  max-w-7xl mx-auto text-base font-normal'>
                    Gear up for your next adventure with our durable travel shoes. Designed for exploration and long journeys, our footwear combines robustness with style, keeping you comfor fashionable wherever you go Say goodbye to generic fits and hello to personalized comfort. Our customizable shoes are tailored to your unique preferences, ensuring the perfe and maximum comfort for every foot shape and size Say goodbye to generic fits and hello to personalized comfort. Our customizable shoes are tailored to your unique preferences, ensuring the perfect
                    </p>
                   
                </div>
               
            </div>
            {/*stepezly sub Footer */}
            <footer className="footer footer-center p-4 text-[15px] bg-[#FFF] border-t text-[#000]">
                <aside>
                    <a target='_blank' href='https://www.devgenius.app/'>© 2024 StepEzly! - Created by DevGenius Technologies Ltd.</a>
                </aside>
            </footer>
        </div>

        //stepezly Footer section code End

    );
};

export default Footer;