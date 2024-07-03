import React from 'react';
import Image from 'next/image'
import Shoes_1 from '../../../public/Card_Image/shoes_1.png'
import Shoes_2 from '../../../public/Card_Image/shoes_2.png'
import Shoes_3 from '../../../public/Card_Image/shoes_3.png'
import Shoes_4 from '../../../public/Card_Image/shoes_4.png'
import Shoes_5 from '../../../public/Card_Image/shoes_5.png'
const Card = () => {
    return (
         // stepezly  card section code start 
        <div id='product' className='max-w-7xl mx-auto mt-32 mb-32'>
            {/* stepezly  card section button */}
            <div className='flex justify-between lg:ml-0 md:ml-28 md:mr-24 ml-4 mr-4'>
                <div className=''>
                    <button className='w-[138px] bg-gradient-custom h-[45px] text-[#fff]  rounded-xl'>
                        Get Started
                    </button>
                </div>
                <div>
                    <button className='w-[138px] bg-gradient-custom h-[45px] text-[#fff] rounded-xl'>
                        All Product
                    </button>
                </div>
            </div>

            {/* stepezly Card start */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
                {/*stepezly First(1st) card */}
                <div>
                    <div className="bg-[#FFF] lg:w-[398px] md:w-[278px] w-[340px]  lg:h-[433px]  md:h-[333px] h-[433px]  mx-auto rounded-3xl lg:mt-8  md:0 mt-8 shadow-xl">
                        <figure className="px-10 pt-10">
                            <Image
                                src={Shoes_1}
                                alt="Shoes"
                                className=" " />
                            <div className=" absolute lg:-mt-[349px] lg:ml-[275px] md:-mt-[229px] -mt-[289px] ml-[220px] md:ml-[165px]  px-2 py-1 m-2 rounded-md text-sm font-medium">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="25" cy="25" r="24" stroke="#BEBEBE" stroke-width="2" />
                                    <path d="M15.6854 25.3425C14.6049 24.2118 13.9999 22.6936 14 21.1125C14 17.7363 16.7084 15 20.05 15C22.096 15 23.9049 16.025 25 17.5963C25.5627 16.791 26.3056 16.1351 27.1668 15.6834C28.0279 15.2318 28.9822 14.9975 29.95 15C33.2916 15 36 17.7363 36 21.1113C36.0001 21.9325 35.8368 22.7452 35.5202 23.4998C35.2035 24.2545 34.7401 24.9355 34.1581 25.5013L25 35L15.6854 25.3425Z" fill="#D52727" />
                                </svg>

                            </div>
                        </figure>

                        <div className="card-actions">
                            <button className='w-full ml-12 mr-12 bg-gradient-custom h-[45px] text-[#fff] rounded-xl'>
                                Add to cart
                            </button>
                        </div>

                    </div>
                    <div className='md:text-start text-center lg:ml-2 md:ml-12 md:mr-0 ml-4 mr-4'>
                        <div className='lg:flex gap-28 lg:mt-8 md:mt-4 mt-3'>
                            <h1 className='font-medium text-xl text-[#000]'>Nike Air Max 270</h1>
                            <h1 className='font-medium text-xl text-[#000]'>Price: $150</h1>
                        </div>
                        <p className='lg:text-base md:text-sm font-normal mt-1 text-[#9C9C9C]'>Unparalleled Comfort and Style With The Nike Air Max  <span className='md:block '></span>  Featuring a Large Air Unit in The Heel for Ultimate </p>
                    </div>
                </div>

                {/*stepezly second(2nd) card */}
                <div >
                    <div className=" lg:w-[398px] md:w-[278px] w-[340px]  lg:h-[433px]  md:h-[333px]  mx-auto  h-[433px] lg:mt-8  md:0 mt-8 ">
                        <div>
                            <h1 className='lg:text-[50px]  md:text-[35px] text-[45px] font-normal text-[#000]' >comfort and style with the Nike Air Max </h1>
                            <svg className='mt-7 lg:w-[190px] lg:h-[50px] md:w-[150px] md:h-[40px] w-[150px] h-[40px]' width="190" height="50" viewBox="0 0 190 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25" r="25" fill="url(#paint0_linear_0_1)" />
                                <ellipse cx="72.5" cy="25" rx="12.5" ry="25" fill="#AC92EC" />
                                <ellipse cx="107.5" cy="25" rx="12.5" ry="25" fill="#B4EAEE" />
                                <ellipse cx="142.5" cy="25" rx="12.5" ry="25" fill="#AC92EC" />
                                <ellipse cx="177.5" cy="25" rx="12.5" ry="25" fill="#B4EAEE" />
                                <defs>
                                    <linearGradient id="paint0_linear_0_1" x1="25" y1="0" x2="25" y2="50" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#AC92EC" />
                                        <stop offset="1" stop-color="#B4EAEE" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>

                        <div className="card-actions md:mt-11 mt-6">
                            <svg className='lg:w-[150px] lg:h-[70px] md:w-[130px] md:h-[60px] w-[120px] h-[50px]' xmlns="http://www.w3.org/2000/svg" width="150" height="70" viewBox="0 0 210 90" fill="none">
                                <circle cx="45" cy="45" r="45" fill="#AC92EC" />
                                <circle cx="165" cy="45" r="43" stroke="#AC92EC" stroke-width="4" />
                                <path d="M58 47C59.1046 47 60 46.1046 60 45C60 43.8954 59.1046 43 58 43L58 47ZM30.5858 43.5858C29.8047 44.3668 29.8047 45.6332 30.5858 46.4142L43.3137 59.1421C44.0948 59.9232 45.3611 59.9232 46.1421 59.1421C46.9232 58.3611 46.9232 57.0948 46.1421 56.3137L34.8284 45L46.1421 33.6863C46.9232 32.9052 46.9232 31.6389 46.1421 30.8579C45.3611 30.0768 44.0948 30.0768 43.3137 30.8579L30.5858 43.5858ZM58 43L32 43L32 47L58 47L58 43Z" fill="white" />
                                <path d="M152 43C150.895 43 150 43.8954 150 45C150 46.1046 150.895 47 152 47L152 43ZM179.414 46.4142C180.195 45.6332 180.195 44.3668 179.414 43.5858L166.686 30.8579C165.905 30.0768 164.639 30.0768 163.858 30.8579C163.077 31.6389 163.077 32.9052 163.858 33.6863L175.172 45L163.858 56.3137C163.077 57.0948 163.077 58.3611 163.858 59.1421C164.639 59.9232 165.905 59.9232 166.686 59.1421L179.414 46.4142ZM152 47L178 47L178 43L152 43L152 47Z" fill="#AC92EC" />
                            </svg>
                        </div>

                    </div>
                    
                </div>

                {/* stepezly third(3rd) card */}
                <div>
                    <div className=" bg-[#FFF] lg:w-[398px] md:w-[278px] w-[340px]  lg:h-[433px]  md:h-[333px] h-[433px] mx-auto rounded-3xl lg:mt-8 md:mt-0 -mt-20 shadow-xl">
                        <figure className="px-10 pt-10">
                            <Image
                                src={Shoes_2}
                                alt="Shoes"
                                className=" " />
                            <div className=" absolute lg:-mt-[349px] lg:ml-[275px] md:-mt-[229px] -mt-[289px] ml-[220px] md:ml-[165px]  px-2 py-1 m-2 rounded-md text-sm font-medium">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="25" cy="25" r="24" stroke="#BEBEBE" stroke-width="2" />
                                    <path d="M15.6854 25.3425C14.6049 24.2118 13.9999 22.6936 14 21.1125C14 17.7363 16.7084 15 20.05 15C22.096 15 23.9049 16.025 25 17.5963C25.5627 16.791 26.3056 16.1351 27.1668 15.6834C28.0279 15.2318 28.9822 14.9975 29.95 15C33.2916 15 36 17.7363 36 21.1113C36.0001 21.9325 35.8368 22.7452 35.5202 23.4998C35.2035 24.2545 34.7401 24.9355 34.1581 25.5013L25 35L15.6854 25.3425Z"  stroke="#D52727" stroke-width="2" />
                                </svg>

                            </div>
                        </figure>

                        <div className="card-actions">
                            <button className='w-full ml-12 mr-12 bg-gradient-custom h-[45px] text-[#fff] rounded-xl'>
                                Add to cart
                            </button>
                        </div>

                    </div>
                    <div className='md:text-start text-center lg:ml-2 md:ml-12 md:mr-0 ml-4 mr-4'>
                        <div className='lg:flex gap-28 md:mt-4 mt-3'>
                            <h1 className='font-medium text-xl  text-[#000]'>Adidas Ultraboost</h1>
                            <h1 className='font-medium text-xl text-[#000]'>Price: $180</h1>

                        </div>
                        <p className='text-base font-normal mt-1  text-[#9C9C9C]'>Unparalleled Comfort and Style With The Nike Air Max <span className='md:block '></span>  Featuring a Large Air Unit in The Heel for Ultimate </p>
                    </div>
                </div>
                {/*stepezly fourth(4th) card */}
                <div>
                    <div className="bg-[#FFF] lg:w-[398px] md:w-[278px] w-[340px]  lg:h-[433px]  md:h-[333px] h-[433px] rounded-3xl  mx-auto lg:mt-8 md:mt-0 mt-8  shadow-xl">
                        <figure className="px-10 pt-10">
                            <Image
                                src={Shoes_3}
                                alt="Shoes"
                                className=" lg:mt-[94px] md:mt-[24px] mt-[94px]" />
                            <div className=" absolute lg:-mt-[305px] lg:ml-[275px] md:-mt-[165px] -mt-[260px] ml-[220px] md:ml-[165px]  px-2 py-1 m-2 rounded-md text-sm font-medium">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="25" cy="25" r="24" stroke="#BEBEBE" stroke-width="2" />
                                    <path d="M15.6854 25.3425C14.6049 24.2118 13.9999 22.6936 14 21.1125C14 17.7363 16.7084 15 20.05 15C22.096 15 23.9049 16.025 25 17.5963C25.5627 16.791 26.3056 16.1351 27.1668 15.6834C28.0279 15.2318 28.9822 14.9975 29.95 15C33.2916 15 36 17.7363 36 21.1113C36.0001 21.9325 35.8368 22.7452 35.5202 23.4998C35.2035 24.2545 34.7401 24.9355 34.1581 25.5013L25 35L15.6854 25.3425Z"  stroke="#D52727" stroke-width="2" />
                                </svg>

                            </div>
                        </figure>

                        <div className="card-actions">
                            <button className='w-full ml-12 mr-12 mt-11 bg-gradient-custom h-[45px] text-[#fff] rounded-xl'>
                                Add to cart
                            </button>
                        </div>

                    </div>
                    <div className='md:text-start text-center lg:ml-2 md:ml-12 md:mr-0 ml-4 mr-4'>
                        <div className='lg:flex gap-28  md:mt-4 mt-3'>
                            <h1 className='font-medium text-xl text-[#000]'> 1460 Original Boots</h1>
                            <h1 className='font-medium text-xl text-[#000]'>Price: $170</h1>

                        </div>
                        <p className='text-base font-normal mt-1 text-[#9C9C9C]'>Unparalleled Comfort and Style With The Nike Air Max  <span className='md:block '></span>  Featuring a Large Air Unit in The Heel for Ultimate </p>
                    </div>
                </div>
                {/*stepezly fifth(5th) card */}
                <div>
                    <div className=" bg-[#FFF]  lg:w-[398px] md:w-[278px] w-[340px]  lg:h-[433px]  md:h-[333px] h-[433px] mx-auto rounded-3xl  mt-8  shadow-xl">
                        <figure className="px-10 pt-10">
                            <Image
                                src={Shoes_4}
                                alt="Shoes"
                                className="" />
                            <div className=" absolute lg:-mt-[242px] lg:ml-[274px] md:-mt-[165px] -mt-[195px] ml-[220px] md:ml-[165px] px-2 py-1 m-2 rounded-md text-sm font-medium">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="25" cy="25" r="24" stroke="#BEBEBE" stroke-width="2" />
                                    <path d="M15.6854 25.3425C14.6049 24.2118 13.9999 22.6936 14 21.1125C14 17.7363 16.7084 15 20.05 15C22.096 15 23.9049 16.025 25 17.5963C25.5627 16.791 26.3056 16.1351 27.1668 15.6834C28.0279 15.2318 28.9822 14.9975 29.95 15C33.2916 15 36 17.7363 36 21.1113C36.0001 21.9325 35.8368 22.7452 35.5202 23.4998C35.2035 24.2545 34.7401 24.9355 34.1581 25.5013L25 35L15.6854 25.3425Z"  stroke="#D52727" stroke-width="2" />
                                </svg>

                            </div>
                        </figure>

                        <div className="card-actions">
                            <button className='w-full ml-12 mr-12 lg:mt-[105px] md:mt-[65px] mt-[105px] bg-gradient-custom h-[45px] text-[#fff] rounded-xl'>
                                Add to cart
                            </button>
                        </div>

                    </div>
                    <div className='md:text-start text-center lg:ml-2 md:ml-12 md:mr-0 ml-4 mr-4'>
                        <div className='lg:flex gap-28  md:mt-4 mt-3'>
                            <h1 className='font-medium text-xl text-[#000]'>New Balance 990v5</h1>
                            <h1 className='font-medium text-xl text-[#000]'>Price: $130</h1>

                        </div>
                        <p className='text-base font-normal mt-1 text-[#9C9C9C]'>Unparalleled Comfort and Style With The Nike Air Max  <span className='md:block '></span>  Featuring a Large Air Unit in The Heel for Ultimate </p>
                    </div>
                </div>

                {/*stepezly sixth (6th) card */}
                <div>
                    <div className=" bg-[#FFF] lg:w-[398px] md:w-[278px] w-[340px]  lg:h-[433px]  md:h-[333px] rounded-3xl mx-auto h-[433px] mt-8  shadow-xl">
                        <figure className="px-10 pt-10">
                            <Image
                                src={Shoes_5}
                                alt="Shoes"
                                className="lg:w-[378.358px] lg:h-[273.484px] md:w-[230px] md:h-[175px]"  />
                            <div className=" absolute lg:-mt-[304px] lg:ml-[274px] md:-mt-[205px] -mt-[260px] ml-[220px] md:ml-[165px] px-2 py-1 m-2 rounded-md text-sm font-medium">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="25" cy="25" r="24" stroke="#BEBEBE" stroke-width="2" />
                                    <path d="M15.6854 25.3425C14.6049 24.2118 13.9999 22.6936 14 21.1125C14 17.7363 16.7084 15 20.05 15C22.096 15 23.9049 16.025 25 17.5963C25.5627 16.791 26.3056 16.1351 27.1668 15.6834C28.0279 15.2318 28.9822 14.9975 29.95 15C33.2916 15 36 17.7363 36 21.1113C36.0001 21.9325 35.8368 22.7452 35.5202 23.4998C35.2035 24.2545 34.7401 24.9355 34.1581 25.5013L25 35L15.6854 25.3425Z"  stroke="#D52727" stroke-width="2" />
                                </svg>

                            </div>
                        </figure>

                        <div className="card-actions">
                            <button className='w-full ml-12 mr-12 lg:mt-11 mt-11 md:mt-4 bg-gradient-custom h-[45px] text-[#fff] rounded-xl'>
                                Add to cart
                            </button>
                        </div>

                    </div>
                    <div className='md:text-start text-center lg:ml-0 md:ml-12 md:mr-10 ml-4 mr-4'>
                        <div className='lg:flex gap-28  md:mt-4 mt-3'>
                            <h1 className='font-medium text-xl text-[#000]'>Puma RS-X3 </h1>
                            <h1 className='font-medium text-xl text-[#000]'>Price: $190</h1>

                        </div>
                        <p className='text-base font-normal mt-1 text-[#9C9C9C]'>Unparalleled Comfort and Style With The Nike Air <span className='md:block '></span>  Featuring a Large Air Unit in The Heel for Ultimate </p>
                    </div>
                </div>
            </div>
        </div>
        // stepezly  card section code End
    );
};

export default Card;