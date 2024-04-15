import React from 'react';
import ClientImage from "@/components/ClientImage";
import Testimonials from "@/components/Testimonials";
import User from "../../../public/TestimonialImage/user1.jpg";

const TestimonialsData = [
    {
        id: 1,
        description: 'Inki mithaiyan ekdum zabardast hai! Unki motichoor ladoo toh bas dil jeet lete hain! Ladoo yani Rajuji',
        name: 'Rajesh Mittal',
        imgSrc: User,
        rating: 4
    },
    {
        id: 2,
        description: 'Inki mithaiyan ekdum zabardast hai! Unki motichoor ladoo toh bas dil jeet lete hain! Ladoo yani Rajuji',
        name: 'Rajesh Mittal1',
        imgSrc: User,
        rating: 5
    },
    {
        id: 3,
        description: 'Inki mithaiyan ekdum zabardast hai! Unki motichoor ladoo toh bas dil jeet lete hain! Ladoo yani Rajuji',
        name: 'Rajesh Mittal2',
        imgSrc: User,
        rating: 3
    },
    {
        id: 4,
        description: 'Inki mithaiyan ekdum zabardast hai! Unki motichoor ladoo toh bas dil jeet lete hain! Ladoo yani Rajuji',
        name: 'Rajesh Mittal3',
        imgSrc: User,
        rating: 4
    },
    {
        id: 5,
        description: 'Inki mithaiyan ekdum zabardast hai! Unki motichoor ladoo toh bas dil jeet lete hain! Ladoo yani Rajuji',
        name: 'Rajesh Mittal4',
        imgSrc: User,
        rating: 4
    },
    {
        id: 6,
        description: 'Inki mithaiyan ekdum zabardast hai! Unki motichoor ladoo toh bas dil jeet lete hain! Ladoo yani Rajuji',
        name: 'Rajesh Mittal5',
        imgSrc: User,
        rating: 2
    },
    {
        id: 7,
        description: 'Inki mithaiyan ekdum zabardast hai! Unki motichoor ladoo toh bas dil jeet lete hain! Ladoo yani Rajuji',
        name: 'Rajesh Mittal6',
        imgSrc: User,
        rating: 4
    },
    {
        id: 8,
        description: 'Inki mithaiyan ekdum zabardast hai! Unki motichoor ladoo toh bas dil jeet lete hain! Ladoo yani Rajuji',
        name: 'Rajesh Mittal8',
        imgSrc: User,
        rating: 3
    },
    {
        id: 9,
        description: 'Inki mithaiyan ekdum zabardast hai! Unki motichoor ladoo toh bas dil jeet lete hain! Ladoo yani Rajuji',
        name: 'Rajesh Mittal9',
        imgSrc: User,
        rating: 2
    },
    {
        id: 10,
        description: 'Inki mithaiyan ekdum zabardast hai! Unki motichoor ladoo toh bas dil jeet lete hain! Ladoo yani Rajuji',
        name: 'Rajesh Mittal10',
        imgSrc: User,
        rating: 4
    }
]
const OurClientPage = () => {
    return (
        <div className="flex justify-center items-center w-[100%]">
            <div className="w-[100%] xl:max-w-[1440px] flex flex-col items-center justify-center">
                <h1 className="text-[30px] md:text-[40px] font-extrabold text-[#212529] my-[20px] md:my-[40px] uppercase">Our
                    Clients</h1>
                <p className="text-[1re,] md:text-[1.25rem] font-normal text-[#212529] leading-normal text-justify flex flex-col gap-[15px] px-[20px] md:px-[40px]">
                <span>
                    At Bhikharam Chandmal Rajuji, every client, regardless of their size, holds
                    significant importance to us. This belief is rooted in our commitment to
                    fostering meaningful relationships that drive our business forward. Our products
                    have garnered widespread appreciation, evident in our partnerships with esteemed
                    corporations like Rashmi Mettalics, Birla Group, IRCTC, Airport Authority of India
                    and Vedanta. These collaborations underscore the trust placed in our offerings and
                    reflect the transparency and reliability of our business transactions.

                </span>
                    <span>
                    To offer a closer glimpse into our partnerships, we've attached customer feedback
                    documents showcasing the confidence our corporate clients have in us. These
                    testimonials not only validate our product quality but also emphasize the integrity
                    of our operations. Additionally, we provide a visual tour through our retail spaces
                    in the following slides, demonstrating the meticulous care and dedication we invest in
                    showcasing our products. Moreover, snippets of Google Reviews from our cherished retail
                    customers serve as a testament to the genuine satisfaction and positive experiences
                    they've had with us.
                </span>
                    <span>
                    Our dedication to excellence extends beyond product quality; it encompasses the
                    satisfaction and trust of our clients, and we eagerly anticipate nurturing and expanding
                    these meaningful partnerships.
                </span>
                </p>
                <div className="px-[40px] py-[30px] w-[100%]">
                    <ClientImage/>
                </div>
                <Testimonials data={TestimonialsData}/>
            </div>
        </div>
    )
}

export default OurClientPage;
