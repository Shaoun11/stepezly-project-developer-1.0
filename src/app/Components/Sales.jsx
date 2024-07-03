import React from 'react';
import Image from 'next/image'
import sales_shoes_image from '../../../public/Sales_Image/sales_shoes_image.png'
const Sales = () => {
    return (
        // stepezly sales section code section
        <div id='sale' className='max-w-7xl lg:mt-28 mt-20 mb-20 mx-auto lg:flex gap-8 '>
           {/* stepezly card 1  */}
            <div className='md:w-[600px] w-[360px] mx-auto rounded-3xl md:h-[300px] p-8 bg-[#fff]'>
                <div className='flex justify-between'>
                    <div >
                        <h1 className='md:text-xl text-base font-normal text-[#000]'>Lightweight Running Shoes</h1>
                        <p className='text-[#9C9C9C] md:text-base text-sm mt-2 font-normal'>Achieve your fitness goals with our Lightweight Running Shoes</p>

                    </div>
                    <div>
                        <h1 className='text-[40px] -mt-6 text-[#000]'>...</h1>
                    </div>
                </div>
                <div>
                    <div className='mt-10 flex gap-6'>
                        <div>
                            <h1 className='md:text-lg text-base font-normal text-[#000]'>Brand</h1>
                            <div className='flex gap-2 mt-6 mb-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="20" viewBox="0 0 58 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.9935 7.51596L18.996 10.1413C15.4653 11.0176 12.3769 12.1848 9.40084 11.163C5.35544 9.4104 5.42794 4.85065 8.44386 0C3.11162 4.41431 -6.48351 18.5299 6.49366 19.9553C8.14662 20.1735 11.09 19.5917 14.2872 18.2427L28.9935 12.1884L58 0.290893L32.5966 6.56692L28.9935 7.51596Z" fill="#263238" />
                                </svg>
                                <p className='text-base font-normal text-[#000]'>Nike</p>
                                <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                    <mask id="mask0_7_137" maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="19">
                                        <rect width="19" height="19" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_7_137)">
                                        <path d="M9.5 12.1916L4.75 7.44165L5.85833 6.33331L9.5 9.97498L13.1417 6.33331L14.25 7.44165L9.5 12.1916Z" fill="#1C1B1F" />
                                    </g>
                                </svg>
                            </div>
                            <p className='text-[#9C9C9C] font-normal md:text-base text-sm'>Running Shoes</p>
                        </div>
                        <div>
                            <h1 className='md:text-lg text-base font-normal text-[#000]'>Prices</h1>
                            <div className='flex gap-2 mt-6 mb-6'>

                                <p className='text-base font-normal text-[#000]'>USD</p>
                                <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                    <mask id="mask0_7_137" maskUnits="userSpaceOnUse" x="0" y="0" width="19" height="19">
                                        <rect width="19" height="19" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_7_137)">
                                        <path d="M9.5 12.1916L4.75 7.44165L5.85833 6.33331L9.5 9.97498L13.1417 6.33331L14.25 7.44165L9.5 12.1916Z" fill="#1C1B1F" />
                                    </g>
                                </svg>
                                <p className='md:text-xl text-base font-normal text-[#000]'>$150.00</p>
                            </div>
                            <p className='text-[#9C9C9C] md:text-base text-sm font-normal '>Running Shoes</p>
                          
                        </div>
                        <div className=''>
                            <button className='w-[138px] bg-gradient-custom  h-[45px] text-[#fff] md:mt-10 md:ml-16 mt-[132px] -ml-[230px] rounded-xl'>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* stepezly card 2 */}
            <div className='w-[300px] mx-auto h-[300px] lg:mt-0 md:mt-8 mt-8  p-8 rounded-3xl bg-[#fff] text-center'>
                <div >
                    <h1 className='text-xl font-normal text-center text-[#000]'>Adidas Ultra 22</h1>
                    <p className='text-[#9C9C9C] mt-2 text-center font-normal'>running technology combining </p>

                </div>
                <div className='flex justify-center'>
                    <Image className='mt-10 w-[158px] h-[132px] object-center' src={sales_shoes_image} alt='sales_shoes_image' />
                </div>
                <svg className='ml-[90px]' xmlns="http://www.w3.org/2000/svg" width="70" height="10" viewBox="0 0 70 10" fill="none">
                    <circle cx="5" cy="5" r="5" fill="#AC92EC" fill-opacity="0.25" />
                    <circle cx="25" cy="5" r="5" fill="#AC92EC" fill-opacity="0.25" />
                    <circle cx="45" cy="5" r="5" fill="#AC92EC" />
                    <circle cx="65" cy="5" r="5" fill="#AC92EC" fill-opacity="0.25" />
                </svg>
            </div>

            {/*stepezly card 3 */}
            <div className='lg:ml-8 md:ml-[256px] mx-auto ml-14 lg:mt-0 md:mt-8 mt-8' >
                <h1 className='text-xl font-normal  text-[#000]'>Versatile Shoes <br /> for Modern <br /> Lifestyles</h1>
                <p className='text-[#9C9C9C] mt-6 font-normal'>Navigate your day with ei and <br /> style  versatile shoe collection <br /> caters to every aspect </p>
                <div>
                <button className='w-[138px] h-[45px] bg-gradient-custom text-[#fff] mt-[72px] rounded-xl'>
                Order Now
                </button>
            </div>
            </div>
            

        </div>
    );
};

export default Sales;