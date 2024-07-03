import React from 'react';
import Image from 'next/image'
import feature_shoes_image from '../../../public/Feature_Image/feature_shoes_image.png'
import feature_shoes_image_two from '../../../public/Feature_Image/feature_shoes_image(2).png'
const Feature = () => {
    return (
        //stepezly Feature code starts here 
        <div  className='max-w-7xl mx-auto lg:mt-32 md:mt-20 mt-14 lg:flex mb-28'>
            <div className='lg:ml-0 ml-4 md:ml-16 mr-4 lg:text-start'>
                 {/* stepezly Feature code text */}
                <h1 className='lg:text-[50px]  leading-none  md:text-[30px] text-2xl text-[#000] font-normal'>Step into Style Discover<span className='md:block '></span>
                    Exclusive Collection of <span className='md:block '></span>
                    Premium Footwear</h1>
                <p className='text-base font-normal   text-[#9C9C9C] mt-8 mb-8'> Shop with confidence knowing that if offer hassle free returns exchanges <span className='md:block '></span>
                    If you're not completely satisfied with your purchase, we'll make it right<span className='md:block '></span>
                    Shop with confidence knowing that we offer hassle</p>
                <div className=''>
                    <button className='w-[138px] bg-gradient-custom h-[45px] text-[#fff] mb-8  rounded-xl'>
                        Shop Now
                        
                    </button> 
                </div>
                 {/* stepezly Feature nav */}
                <div>
                <ul className="hidden absolute ml-[530px] mt-1 cursor-pointer lg:flex justify-between items-center gap-[47px] text-base text-[#18233B]  font-normal ">
                        <li className="underline underline-offset-1 text-[#000] text-base font-medium">
                        Brands and Styles
                            
                        </li>
                        <li className="underline underline-offset-1 text-[#000] text-base font-medium"
                            >
                              Competitive

                        </li>
                        <li className="underline underline-offset-1 text-[#000] text-base font-medium"
                            >
                                Exceptional

                        </li>

                        <li className="underline underline-offset-1 text-[#000] text-base font-medium"
                            >
                                Experience
                          
                        </li>

                        <li className="underline underline-offset-1 text-[#000] text-base font-medium"
                            >
                               Discounts
                     
                        </li>
                        <li className="underline underline-offset-1 text-[#000] text-base font-medium"
                            >
                              Exclusive
                     
                        </li>

                    </ul>
                </div>
            </div>
           {/* stepezly Feature Images */}
         <div className=' md:flex md:gap-6   lg:ml-2 md:ml-16 md:mr-16 flex-none'>
         <div>
                <Image className='lg:w-[370px] lg:h-[320px] md:w-[300px] md:h-[260px] w-[320px] h-[280px] mx-auto rounded-3xl' src={feature_shoes_image} ></Image>
            </div>
            <div>
                <Image className='lg:w-[300px] lg:h-[320px] md:w-[280px] md:h-[260px] w-[320px] h-[280px]  mx-auto rounded-3xl lg:mt-0 md:mt-0 mt-6  md:rounded-s-full ' src={feature_shoes_image_two} ></Image>
            </div>
         </div>
          
           {/* stepezly Feature code End */}
        </div>
    );
};

export default Feature;