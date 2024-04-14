'use client'
import React from 'react';
import { Navigation,Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";

interface Props {
    id: number,
    imgSrc: any,
    imgName: string,
}

interface SliderProps {
    SliderData: Props[]
}

interface CustomStyleProperties {
    [key: string]: string;
}

const HeroSlider: React.FC<SliderProps> = ({ SliderData }) => {

    const customStyles: CustomStyleProperties = {
        "--swiper-navigation-color": "#000",
        "--swiper-navigation-size": "30px",
        "--swiper-pagination-bullet-width": "20px",
        "--swiper-pagination-bullet-border-radius": "20px",
        "--swiper-pagination-color": "#1a1a1a",
        "--swiper-pagination-bullet-inactive-color": "#eee",
        "--swiper-pagination-bullet-inactive-opacity": "0.9",
        "--swiper-pagination-bottom": "14px",
    };

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            style={customStyles}
        >
            {SliderData.map((slide: Props) => (
                <SwiperSlide key={slide.id}>
                    <Image src={slide.imgSrc} alt={slide.imgName} className="w-[100%] h-auto object-fill" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default HeroSlider;
