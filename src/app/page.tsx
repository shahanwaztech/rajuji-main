import React from 'react'
import HeroSlider from "@/components/HeroSlider";
import Testimonials from "@/components/Testimonials";
import Outlets from "@/components/Outlets";
import WeServe from "@/components/WeServe";
import FeatureProducts from "@/components/FeatureProducts";
import Namkeen from "../../public/SliderImage/namkeen.png";
import SinceLogo from '../../public/SINCE_LOGO1.png';
import Image from "next/image";

const SliderData = [
    {
        id: 1,
        imgSrc: Namkeen,
        imgName: 'Namkeen'
    },
    {
        id: 2,
        imgSrc: Namkeen,
        imgName: 'Namkeen'
    },
    {
        id: 3,
        imgSrc: Namkeen,
        imgName: 'Namkeen'
    },
    {
        id: 4,
        imgSrc: Namkeen,
        imgName: 'Namkeen'
    },
]

const TestimonialsData = [
    {
        id: 1,
        description: 'Inki mithaiyan ekdum zabardast hai! Unki motichoor ladoo toh bas dil jeet lete hain! Ladoo yani Rajuji',
        name: 'Rajesh Mittal',
        imgSrc: '/TestimonialImage/user1.jpg',
        rating: 4
    },
    {
        id: 2,
        description: 'Inki mithaiyan ekdum zabardast hai! Unki motichoor ladoo toh bas dil jeet lete hain! Ladoo yani Rajuji',
        name: 'Rajesh Mittal1',
        imgSrc: '/TestimonialImage/user1.jpg',
        rating: 5
    },
    {
        id: 3,
        description: 'Inki mithaiyan ekdum zabardast hai! Unki motichoor ladoo toh bas dil jeet lete hain! Ladoo yani Rajuji',
        name: 'Rajesh Mittal2',
        imgSrc: '/TestimonialImage/user1.jpg',
        rating: 3
    },
    {
        id: 4,
        description: 'Inki mithaiyan ekdum zabardast hai! Unki motichoor ladoo toh bas dil jeet lete hain! Ladoo yani Rajuji',
        name: 'Rajesh Mittal3',
        imgSrc: '/TestimonialImage/user1.jpg',
        rating: 4
    },
    {
        id: 5,
        description: 'Inki mithaiyan ekdum zabardast hai! Unki motichoor ladoo toh bas dil jeet lete hain! Ladoo yani Rajuji',
        name: 'Rajesh Mittal4',
        imgSrc: '/TestimonialImage/user1.jpg',
        rating: 4
    },
    {
        id: 6,
        description: 'Inki mithaiyan ekdum zabardast hai! Unki motichoor ladoo toh bas dil jeet lete hain! Ladoo yani Rajuji',
        name: 'Rajesh Mittal5',
        imgSrc: '/TestimonialImage/user1.jpg',
        rating: 2
    },
    {
        id: 7,
        description: 'Inki mithaiyan ekdum zabardast hai! Unki motichoor ladoo toh bas dil jeet lete hain! Ladoo yani Rajuji',
        name: 'Rajesh Mittal6',
        imgSrc: '/TestimonialImage/user1.jpg',
        rating: 4
    },
    {
        id: 8,
        description: 'Inki mithaiyan ekdum zabardast hai! Unki motichoor ladoo toh bas dil jeet lete hain! Ladoo yani Rajuji',
        name: 'Rajesh Mittal8',
        imgSrc: '/TestimonialImage/user1.jpg',
        rating: 3
    },
    {
        id: 9,
        description: 'Inki mithaiyan ekdum zabardast hai! Unki motichoor ladoo toh bas dil jeet lete hain! Ladoo yani Rajuji',
        name: 'Rajesh Mittal9',
        imgSrc: '/TestimonialImage/user1.jpg',
        rating: 2
    },
    {
        id: 10,
        description: 'Inki mithaiyan ekdum zabardast hai! Unki motichoor ladoo toh bas dil jeet lete hain! Ladoo yani Rajuji',
        name: 'Rajesh Mittal10',
        imgSrc: '/TestimonialImage/user1.jpg',
        rating: 4
    }
]
export default function Home() {
    return (
        <div className="relative flex justify-center items-center">
            <div className="w-[100%] xl:max-w-[1440px]">
                <HeroSlider SliderData={SliderData}/>
                <div className="max-w-[1440px] flex items-center justify-center my-[30px] md:my-[50px] lg:my-[100px]">
                    <Image src={SinceLogo} alt={'Since1923'} className="w-[300px] md:w-[50%]  object-fill"/>
                </div>
                <div
                    style={{
                        backgroundImage: `url('/Pattern1.svg')`,
                        backgroundRepeat: 'repeat-y',
                        maxWidth: '1440px',
                        backgroundSize: 'cover'
                    }}>
                    <Outlets/>
                    <WeServe/>
                </div>
                <FeatureProducts/>
                <Testimonials data={TestimonialsData}/>
            </div>
        </div>
    );
}
