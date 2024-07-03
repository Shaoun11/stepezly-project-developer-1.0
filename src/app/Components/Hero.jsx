import React from 'react';
import Image from 'next/image'
import '../../app/utils/button.css';
import hero_image_shoes from '../../../public/Hero_Image/shoes_main_image.png'
const Hero = () => {


    return (
        // stepezly hero section code start
        <div id='/' className='max-w-7xl  2xl:ml-[190px] md:ml-0 ml-0 flex lg:flex-row flex-col-reverse lg:min-h-[calc(100vh-78px)] ' >
            {/* stepezly hero section gradiant background */}
            <svg className='lg:w-[442px] lg:h-[724px] md:w-[400px] md:h-[710px] lg:ml-12 lg:mt-4 md:mt-20 mt-24  ml-8 md:ml-20 w-[318px] h-[424px]  ' viewBox="0 0 462 744" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="442" height="724" rx="231" fill="url(#paint0_linear_6_84)" />
                <defs>
                    <linearGradient id="paint0_linear_6_84" x1="231" y1="0" x2="231" y2="744" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#B4EAEE" />
                        <stop offset="1" stop-color="#AC92EC" />
                    </linearGradient>
                </defs>
            </svg>
            {/* stepezly hero section shoes image */}
            <div className='m-8 ' >
                <Image className=' absolute  lg:-ml-[450px] md:ml-[80px] ml-[10px]  lg:mt-5 md:mt-[180px] mt-[180px] lg:w-[863px] lg:h-[593px] md:w-[620px] md:h-[490px]  w-[302px] h-[254px]' src={hero_image_shoes} alt='hero_image' />
            </div>
           <div>
             {/* stepezly hero section text and svg */}
             <div className='lg:mb-0 m-9 mb-24 lg:ml-0 md:ml-24' >
                <p className='lg:text-[15px] text-sm  absolute lg:mt-1 md:-mt-4 mt-14 font-medium text-[#000]'>Elevate Every Step Where Art Meets Footwear <br /> Crafting Timeless Elegance</p>
                <h1 className='lg:text-[160px] md:text-[80px] -mt-6 md:mt-6  text-[40px] md:ml-0  lg:-ml-16 lg:mt-4 font-medium text-[#28282A]'>STEPEZLY</h1>
                <p className='text-[15px] lg:ml-[350px] lg:-mt-6 md:-mt-2 mt-12 font-medium text-[#000]'>Where Art Meets Footwear, Crafting Timeless <span className='md:block '></span> Elegance and Unmatched Comfort</p>
                <div className='md:ml-[380px] md:visible invisible'>
                {/* stepezly hero section svg */}
                    <svg className='absolute lg:-mt-[60px] lg:-ml-52 md:-mt-[190px] lg:w-[177px] lg:h-[125px] md:w-[247px] md:h-[125px]' width="247" height="125" viewBox="0 0 247 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="100" r="25" fill="#AC92EC" fill-opacity="0.47" />
                        <circle cx="24.5" cy="99.5" r="17.5" fill="#AC92EC" fill-opacity="0.53" />
                        <path d="M25 100H237V8" stroke="#AC92EC" stroke-width="1.3" />
                        <circle cx="24.5" cy="99.5" r="6.5" fill="#AC92EC" />
                        <circle cx="237" cy="10" r="10" fill="#AC92EC" />
                    </svg>

                </div>
            </div>
            {/* stepezly hero section 1st card and button */}
            <div className=' -mt-16 absolute  lg:mt-[190px] lg:ml-[410px] md:ml-24 m-2 flex gap-3' >
                <svg className='lg:w-[70px] lg:h-[70px] w-[46px] h-[46px]' viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="url(#paint0_linear_0_1)" />
                    <mask id="mask0_0_1" maskUnits="userSpaceOnUse" x="17" y="17" width="35" height="35">
                        <rect x="17" y="17" width="35" height="35" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_0_1)">
                        <path d="M24.875 30.8541C25.8229 30.8541 26.7222 31.0243 27.5729 31.3646C28.4236 31.7048 29.2014 32.2031 29.9063 32.8594L43.8333 46.1666H44.7083C45.1215 46.1666 45.4679 46.0269 45.7474 45.7474C46.0269 45.4679 46.1667 45.1215 46.1667 44.7083C46.1667 44.5139 46.1484 44.3073 46.112 44.0885C46.0755 43.8698 45.9479 43.651 45.7292 43.4323L39.0573 36.7604L36.4688 28.9583L33.7708 29.6146C32.8472 29.8576 32.0087 29.6875 31.2552 29.1041C30.5017 28.5208 30.125 27.7552 30.125 26.8073V23.7448L29.1042 23.2344L23.4896 30.7448C23.4653 30.7691 23.4531 30.7873 23.4531 30.7995C23.4531 30.8116 23.441 30.8298 23.4167 30.8541H24.875ZM24.875 33.7708H23.1979C23.2708 33.941 23.362 34.0989 23.4714 34.2448C23.5807 34.3906 23.7083 34.5243 23.8542 34.6458L35.6667 45.401C35.934 45.6684 36.2379 45.8628 36.5781 45.9844C36.9184 46.1059 37.2708 46.1666 37.6354 46.1666H39.6042L27.9011 34.9739C27.4879 34.5607 27.02 34.2569 26.4974 34.0625C25.9748 33.868 25.434 33.7708 24.875 33.7708ZM37.6354 49.0833C36.9063 49.0833 36.2136 48.9496 35.5573 48.6823C34.9011 48.4149 34.2934 48.0382 33.7344 47.5521L21.8854 36.7969C20.7674 35.776 20.1415 34.5243 20.0078 33.0416C19.8741 31.559 20.257 30.2101 21.1563 28.9948L26.7708 21.4844C27.184 20.9253 27.737 20.5547 28.4297 20.3724C29.1224 20.1901 29.7847 20.2691 30.4167 20.6094L31.4375 21.1198C31.9479 21.3871 32.3429 21.7517 32.6224 22.2135C32.9019 22.6753 33.0417 23.1857 33.0417 23.7448V26.8073L35.7396 26.1146C36.4688 25.9201 37.1736 26.0113 37.8542 26.388C38.5347 26.7647 38.9965 27.3055 39.2396 28.0104L41.6094 35.1562L47.8073 41.3541C48.2934 41.8403 48.6276 42.3628 48.8099 42.9219C48.9922 43.4809 49.0833 44.0764 49.0833 44.7083C49.0833 45.9236 48.658 46.9566 47.8073 47.8073C46.9566 48.658 45.9236 49.0833 44.7083 49.0833H37.6354Z" fill="#FEFFFF" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_0_1" x1="35" y1="1.34652e-06" x2="-10.1818" y2="82.0909" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#AC92EC" />
                            <stop offset="1" stop-color="#B4EAEE" />
                        </linearGradient>
                    </defs>
                </svg>
                <div >
                    <h1 className='md:text-[20px] font-normal text-[#000]'>Step into a World of Elegance and Comfort</h1>
                    <p className='#9C9C9C text-[16px] font-normal'>Crafted with Passion and Precision for Your Journey</p>
                    {/* stepezly hero section button order now and see vedio */}
                    <div className='flex gap-7 md:mt-0  md:-ml-28 -ml-4 mt-20 lg:-ml-10'>
                        <div className=''>
                            <button className='w-[138px]  h-[45px] border-0 bg-gradient-custom  text-[#fff] md:mt-10 md:ml-16  rounded-xl' >
                                Order Now
                            </button>
                        </div>


                        <div className='flex lg:mt-10 md:mt-10  gap-3'>
                            <div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22.5" cy="22.5" r="21.8" stroke="black" stroke-width="1.4" />
                                    <path d="M27.5 21.634C28.1667 22.0189 28.1667 22.9811 27.5 23.366L20.75 27.2631C20.0833 27.648 19.25 27.1669 19.25 26.3971L19.25 18.6029C19.25 17.8331 20.0833 17.352 20.75 17.7369L27.5 21.634Z" fill="black" />
                                </svg>

                            </div>
                            <p className='mt-[9px] text-xl font-medium text-[#000]'>See Vedio</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* stepezly hero section 2nd card */}
            <div className='lg:mt-[340px] m-2 md:mt-[100px]  absolute lg:ml-[0px] md:ml-24 flex gap-3' >
                <svg className='lg:w-[70px] lg:h-[70px] w-[40px] h-[40px]' viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="url(#paint0_linear_0_1)" />
                    <mask id="mask0_0_1" maskUnits="userSpaceOnUse" x="17" y="17" width="35" height="35">
                        <rect x="17" y="17" width="35" height="35" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_0_1)">
                        <path d="M24.875 30.8541C25.8229 30.8541 26.7222 31.0243 27.5729 31.3646C28.4236 31.7048 29.2014 32.2031 29.9063 32.8594L43.8333 46.1666H44.7083C45.1215 46.1666 45.4679 46.0269 45.7474 45.7474C46.0269 45.4679 46.1667 45.1215 46.1667 44.7083C46.1667 44.5139 46.1484 44.3073 46.112 44.0885C46.0755 43.8698 45.9479 43.651 45.7292 43.4323L39.0573 36.7604L36.4688 28.9583L33.7708 29.6146C32.8472 29.8576 32.0087 29.6875 31.2552 29.1041C30.5017 28.5208 30.125 27.7552 30.125 26.8073V23.7448L29.1042 23.2344L23.4896 30.7448C23.4653 30.7691 23.4531 30.7873 23.4531 30.7995C23.4531 30.8116 23.441 30.8298 23.4167 30.8541H24.875ZM24.875 33.7708H23.1979C23.2708 33.941 23.362 34.0989 23.4714 34.2448C23.5807 34.3906 23.7083 34.5243 23.8542 34.6458L35.6667 45.401C35.934 45.6684 36.2379 45.8628 36.5781 45.9844C36.9184 46.1059 37.2708 46.1666 37.6354 46.1666H39.6042L27.9011 34.9739C27.4879 34.5607 27.02 34.2569 26.4974 34.0625C25.9748 33.868 25.434 33.7708 24.875 33.7708ZM37.6354 49.0833C36.9063 49.0833 36.2136 48.9496 35.5573 48.6823C34.9011 48.4149 34.2934 48.0382 33.7344 47.5521L21.8854 36.7969C20.7674 35.776 20.1415 34.5243 20.0078 33.0416C19.8741 31.559 20.257 30.2101 21.1563 28.9948L26.7708 21.4844C27.184 20.9253 27.737 20.5547 28.4297 20.3724C29.1224 20.1901 29.7847 20.2691 30.4167 20.6094L31.4375 21.1198C31.9479 21.3871 32.3429 21.7517 32.6224 22.2135C32.9019 22.6753 33.0417 23.1857 33.0417 23.7448V26.8073L35.7396 26.1146C36.4688 25.9201 37.1736 26.0113 37.8542 26.388C38.5347 26.7647 38.9965 27.3055 39.2396 28.0104L41.6094 35.1562L47.8073 41.3541C48.2934 41.8403 48.6276 42.3628 48.8099 42.9219C48.9922 43.4809 49.0833 44.0764 49.0833 44.7083C49.0833 45.9236 48.658 46.9566 47.8073 47.8073C46.9566 48.658 45.9236 49.0833 44.7083 49.0833H37.6354Z" fill="#FEFFFF" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_0_1" x1="35" y1="1.34652e-06" x2="-10.1818" y2="82.0909" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#AC92EC" />
                            <stop offset="1" stop-color="#B4EAEE" />
                        </linearGradient>
                    </defs>
                </svg>
                <div >
                    <h1 className='lg:text-[20px] text-sm font-normal lg:mt-4 text-[#000]'>Step into a World of Elegance and Comfort</h1>
                    <p className='#9C9C9C lg:text-[16px] text-sm font-normal'>Crafted with Passion and Precision for Your Journey</p>

                </div>
            </div>
           </div>
            {/* stepezly hero section code end */}
        </div>
    );
};

export default Hero;