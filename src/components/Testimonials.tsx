'use client'
import React from 'react'
import Image from "next/image";
import {Autoplay, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Props {
    id: number,
    description: string,
    name: string,
    imgSrc: string,
    rating: number
}

interface TestimonialsProps {
    data: Props[]
}

interface CustomStyleProperties {
    [key: string]: string;
}
const Testimonials: React.FC<TestimonialsProps> = ({data}) => {
    const customStyles: CustomStyleProperties = {
        "--swiper-pagination-bullet-inactive-color": "#fff",
        "--swiper-pagination-bottom": "0px",
    }
    return (
        <div style={{
            backgroundImage: `url('/bg_Kolkata.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            maxWidth: '100%',
            height: '100%'
        }}
             className="lg:px-[40px] md:px-[30px] px-[20px] lg:py-[60px] md:py-[40px] py-[40px]"
        >
            <div
                className="w-[100%] flex flex-col gap-[20px] md:gap-[40px] lg:gap-0 lg:flex-row justify-around items-center">
                <div className="flex flex-col gap-[10px] items-center justify-center">
                    <h1 className="text-[#48e6d1] text-[2rem] font-extrabold text-center">FOR CORPORATE INQUIRIES</h1>
                    <p className="text-[#fff] text-[1.5rem] font-normal text-center">Contact Us : 81004 25129</p>
                </div>
                <div className="flex flex-col gap-[10px] items-center justify-center">
                    <h1 className="text-[#48e6d1] text-[2rem] font-extrabold text-center">FOR WHOLESALE INQUIRIES</h1>
                    <p className="text-[#fff] text-[1.5rem] font-normal text-center">Contact Us : 81004 25132</p>
                </div>
            </div>
            <h1 className="text-[2.5rem] py-[20px] md:py-[40px] uppercase text-center text-[#fff] font-extrabold">
                Customer Feedbacks
            </h1>
            <div>
                <Swiper
                    breakpoints={{
                        700: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        760: {
                            slidesPerView: 2,
                            spaceBetween: 25
                        },
                        1020: {
                            slidesPerView: 3,
                            spaceBetween: 50
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    style={customStyles}
                >
                    {data.map((customerData) => (
                        <SwiperSlide key={customerData.id}>
                            <div
                                className="w-[100%] md:w-[320px] lg:w-[340px]  flex flex-col px-[15px] py-[15px] border border-[#fff] rounded-lg items-center justify-center">
                                <p className="text-white text-[20px] text-justify font-medium">
                                <span
                                    className="text-[28px] text-yellow-400 pr-[5px]">&ldquo;</span>{customerData.description}<span
                                    className="text-[28px] text-yellow-400 pl-[5px]">&rdquo;</span>
                                </p>
                                <div className="h-[1.4px] w-[95%] bg-[#ddd] my-[10px]"/>
                                <div className="w-[100%] flex flex-row justify-start items-center gap-[10px]">
                                    <Image src={customerData.imgSrc} alt={'UserImage'} width={100} height={100}
                                           className='object-fill rounded-full'/>
                                    <div className="flex flex-col gap-[10px]">
                                        <h1 className="text-white font-bold text-[22px] uppercase">{customerData.name}</h1>
                                        <div className="flex flex-row items-center">
                                            {[...Array(customerData.rating)].map((i: any) => (
                                                <Image key={i} src="/rating.svg" alt={'YellowStar'} height={20}
                                                       width={20}/>
                                            ))}
                                            {[...Array(Math.max(0, 5 - customerData.rating))].map((d: any) => (
                                                <Image key={d} src="/rating1.svg" alt={'GreyStar'} height={20}
                                                       width={20}/>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials;
