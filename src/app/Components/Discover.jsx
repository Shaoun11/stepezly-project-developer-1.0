import React from 'react';
import Image from 'next/image'
import Star_Image from '../../../public/Discover_Image/Star_Image.svg'
import Dollar_Image from '../../../public/Discover_Image/Dollar_Image.svg'
import Label_Image from '../../../public/Discover_Image/Label_Image.svg'
import Person_Image from '../../../public/Discover_Image/Person_Image.svg'



const Discover = () => {
    return (
        // stepezly Discover section code
        <div id='testimonial' className=' max-w-7xl mx-auto mt-24 '>
            <div>
                {/*stepezly Discover section text */}
                <div className='lg:ml-0 ml-4 md:ml-16 mr-4'>
                    <h1 className='lg:text-[50px]  leading-none lg:text-center md:text-[30px] text-2xl text-[#000] font-normal'>Discover Your Perfect Fit Premium Quality
                        <span className='md:block '></span>  Shoes for Every Occasion</h1>
                    <p className='text-base font-normal  lg:text-center text-[#9C9C9C] mt-8 mb-8'> Step into a world where comfort meets style. Explore our extensive collection of shoes tailored for every event, from casual outings to form gatherings  <span className='md:block '></span> Find your perfect pair today and walk with confidence Step into a world where comfort meets style. Explore our extensive collection of shoes</p>
                </div>
                {/*stepezly Discover card code start */}
                <div className='grid ml-2 lg:grid-cols-4 md:grid-cols-2 mb-20  '>

                    {/*stepezly Discover first(1st) card */}
                    <div>
                        <svg className='md:w-[378px] w-[328px] h-[468px] mx-auto' xmlns="http://www.w3.org/2000/svg" width="378" height="468" viewBox="0 0 378 468" fill="none">
                            <g filter="url(#filter0_d_8_215)">
                                <path d="M313 381.329C313 393.298 302.584 403 289.736 403L68.2639 403C55.4156 403 45 393.298 45 381.329L45 232.235C45 210.692 63.7481 193.228 86.875 193.228L271.125 193.228C294.252 193.228 313 210.692 313 232.235L313 381.329Z" fill="#B4EAEE" />
                                <path d="M313 154.22C313 175.763 294.252 193.228 271.125 193.228L86.875 193.228C63.7481 193.228 45 175.763 45 154.22L45 66.6707C45 54.7023 55.4156 45 68.2639 45L289.736 45C302.584 45 313 54.7023 313 66.6707L313 154.22Z" fill="#B4EAEE" />
                            </g>

                            <defs>
                                <filter id="filter0_d_8_215" x="0" y="0" width="378" height="468" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="10" dy="10" />
                                    <feGaussianBlur stdDeviation="27.5" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_215" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_215" result="shape" />
                                </filter>
                            </defs>

                        </svg>

                        <p className='  absolute -mt-[320px] ml-[105px] text-[16px] text-[#000] font-medium'>High Quality Footwear</p>
                        <p className='text-[#5A5A5A] absolute -mt-[240px] ml-[105px]  text-base font-normal '>
                            Our shoes a made from <br />  premium matt ensuring <br /> durability and comfort <br /> Whether you need
                        </p>

                        <Image className='object-top md:-mt-[400px] -mt-[385px] md:ml-[150px] sm:ml-[150px] ml-[160px]' src={Star_Image} />
                    </div>

                    {/*stepezly Discover second(2nd) card */}
                    <div className=' lg:mt-0 mt-[250px]'>

                        <svg className='md:w-[378px] w-[328px] h-[468px] mx-auto' xmlns="http://www.w3.org/2000/svg" width="378" height="468" viewBox="0 0 378 468" fill="none">
                            <g filter="url(#filter0_d_8_235)">
                                <path d="M313 381.329C313 393.298 302.584 403 289.736 403L68.2639 403C55.4156 403 45 393.298 45 381.329L45 232.235C45 210.692 63.7481 193.228 86.875 193.228L271.125 193.228C294.252 193.228 313 210.692 313 232.235L313 381.329Z" fill="white" />
                                <path d="M313 154.22C313 175.763 294.252 193.228 271.125 193.228L86.875 193.228C63.7481 193.228 45 175.763 45 154.22L45 66.6707C45 54.7023 55.4156 45 68.2639 45L289.736 45C302.584 45 313 54.7023 313 66.6707L313 154.22Z" fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_d_8_235" x="0" y="0" width="378" height="468" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="10" dy="10" />
                                    <feGaussianBlur stdDeviation="27.5" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_235" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_235" result="shape" />
                                </filter>
                            </defs>
                        </svg>

                        <p className='  absolute -mt-[320px] ml-[105px] text-[16px] text-[#000] font-medium'>Competitive Pricing</p>
                        <p className='text-[#5A5A5A] absolute -mt-[240px] ml-[105px]  text-base font-normal '>
                            Our shoes a made from <br />  premium matt ensuring <br /> durability and comfort <br /> Whether you need
                        </p>

                        <Image className='object-top md:-mt-[400px] -mt-[385px] ml-[150px]' src={Label_Image} />
                    </div>

                    {/*stepezly Discover third(3rd) card */}
                    <div className='lg:mt-0 md:mt-0 mt-[250px]'>

                        <svg className='md:w-[378px] w-[328px] h-[468px] mx-auto' xmlns="http://www.w3.org/2000/svg" width="378" height="468" viewBox="0 0 378 468" fill="none">
                            <g filter="url(#filter0_d_8_215)">
                                <path d="M313 381.329C313 393.298 302.584 403 289.736 403L68.2639 403C55.4156 403 45 393.298 45 381.329L45 232.235C45 210.692 63.7481 193.228 86.875 193.228L271.125 193.228C294.252 193.228 313 210.692 313 232.235L313 381.329Z" fill="#B4EAEE" />
                                <path d="M313 154.22C313 175.763 294.252 193.228 271.125 193.228L86.875 193.228C63.7481 193.228 45 175.763 45 154.22L45 66.6707C45 54.7023 55.4156 45 68.2639 45L289.736 45C302.584 45 313 54.7023 313 66.6707L313 154.22Z" fill="#B4EAEE" />
                            </g>

                            <defs>
                                <filter id="filter0_d_8_215" x="0" y="0" width="378" height="468" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="10" dy="10" />
                                    <feGaussianBlur stdDeviation="27.5" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_215" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_215" result="shape" />
                                </filter>
                            </defs>

                        </svg>

                        <p className='  absolute -mt-[320px] ml-[105px] text-[16px] text-[#000] font-medium'>Exceptional Customer</p>
                        <p className='text-[#5A5A5A] absolute -mt-[240px] ml-[105px]  text-base font-normal '>
                            Our shoes a made from <br />  premium matt ensuring <br /> durability and comfort <br /> Whether you need
                        </p>

                        <Image className='object-top md:-mt-[400px] -mt-[385px] ml-[150px]' src={Person_Image} />
                    </div>

                    {/*stepezly Discover fourth(4th) card */}
                    <div className='lg:mt-0 mt-[250px]'>

                        <svg className='md:w-[378px] w-[328px] h-[468px] mx-auto' xmlns="http://www.w3.org/2000/svg" width="378" height="468" viewBox="0 0 378 468" fill="none">
                            <g filter="url(#filter0_d_8_235)">
                                <path d="M313 381.329C313 393.298 302.584 403 289.736 403L68.2639 403C55.4156 403 45 393.298 45 381.329L45 232.235C45 210.692 63.7481 193.228 86.875 193.228L271.125 193.228C294.252 193.228 313 210.692 313 232.235L313 381.329Z" fill="white" />
                                <path d="M313 154.22C313 175.763 294.252 193.228 271.125 193.228L86.875 193.228C63.7481 193.228 45 175.763 45 154.22L45 66.6707C45 54.7023 55.4156 45 68.2639 45L289.736 45C302.584 45 313 54.7023 313 66.6707L313 154.22Z" fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_d_8_235" x="0" y="0" width="378" height="468" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="10" dy="10" />
                                    <feGaussianBlur stdDeviation="27.5" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_235" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_235" result="shape" />
                                </filter>
                            </defs>
                        </svg>

                        <p className='  absolute -mt-[320px] ml-[105px] text-[16px] text-[#000] font-medium'> Shopping Experience</p>
                        <p className='text-[#5A5A5A] absolute -mt-[240px] ml-[105px]  text-base font-normal '>
                            Our shoes a made from <br />  premium matt ensuring <br /> durability and comfort <br /> Whether you need
                        </p>

                        <Image className='object-top md:-mt-[400px] -mt-[385px] ml-[150px]' src={Dollar_Image} />
                    </div>
                    {/*stepezly Discover card code end */}
                </div>

            </div>
            {/*stepezly Discover Get Started button */}
            <div className='lg:mt-[220px] lg:visible md:visible invisible mt-[290px] md:mb-36 md:mt-[150px] md:text-start lg:text-center lg:ml-60'>
                <button className='w-[138px] bg-gradient-custom h-[45px] text-[#fff] md:mt-1 ml-4 mt-2 md:ml-16 lg:mt-[132px] lg:-ml-[230px] rounded-xl'>
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Discover;