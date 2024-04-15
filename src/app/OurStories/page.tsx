import React from 'react'
import User from "../../../public/TestimonialImage/user1.jpg";
import Testimonials from "@/components/Testimonials";
import StoreCard from "@/components/StoreCard";

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

const StoreData = [
    {
        id: 1,
        title: 'Kankurgachi',
        address: 'P-39 Maniktala main road, kolkata - 700054',
        PhoneNumber: '03346 047168, 93314 33353',
        href: 'https://www.google.com/maps/search/bhikharam+chandmal+rajuji/@22.6230822,88.1791347,11z/data=!3m1!4b1?entry=ttu',
        swiggyLink: 'https://www.swiggy.com/restaurants/bhikharam-chandmal-rajuji-maniktala-main-road-kankurgachi-kolkata-157034',
        zomatoLink: 'https://www.zomato.com/kolkata/restaurants/bhikharam-chandmal-rajuji-1?category=1'
    },
    {
        id: 1,
        title: 'Bangur',
        address: '270, Bandgur a venue block-a, kolkata - 700055',
        PhoneNumber: '03346 019602, 85840 74485',
        href: 'https://www.google.com/maps/search/bhikharam+chandmal+rajuji/@22.6230822,88.1791347,11z/data=!3m1!4b1?entry=ttu',
        swiggyLink: 'https://www.swiggy.com/restaurants/bhikharam-chandmal-rajuji-burrabazar-kolkata-157019',
        zomatoLink: 'https://www.zomato.com/kolkata/restaurants/bhikharam-chandmal-rajuji-1?category=1'
    },
    {
        id: 1,
        title: 'Chinarpark',
        address: 'beside new town dhaba, service road, noapara, suka NTA, pally, rajarahat, kolkata - 700136',
        PhoneNumber: '85840 74482',
        href: 'https://www.google.com/maps/search/bhikharam+chandmal+rajuji/@22.6230822,88.1791347,11z/data=!3m1!4b1?entry=ttu',
        swiggyLink: 'https://www.swiggy.com/restaurants/bhikharam-chandmal-rajuji-atghara-chinar-park-kolkata-777398',
        zomatoLink: 'https://www.zomato.com/kolkata/restaurants/bhikharam-chandmal-rajuji-1?category=1'
    },
    {
        id: 1,
        title: 'Howrah',
        address: '36 DR. Abani dutta road, howrah - 711106',
        PhoneNumber: '8584 074483, 85840 74482',
        href: 'https://www.google.com/maps/search/bhikharam+chandmal+rajuji/@22.6230822,88.1791347,11z/data=!3m1!4b1?entry=ttu',
        swiggyLink: 'https://www.swiggy.com/restaurants/bhikharam-chandmal-rajuji-howrah-mali-panchghara-kolkata-157032',
        zomatoLink: 'https://www.zomato.com/kolkata/restaurants/bhikharam-chandmal-rajuji-1?category=1'
    },
    {
        id: 1,
        title: 'Liluah',
        address: '241/16 G.T. Road, liluah, howrah - 711204',
        PhoneNumber: '62919 05279',
        href: 'https://www.google.com/maps/search/bhikharam+chandmal+rajuji/@22.6230822,88.1791347,11z/data=!3m1!4b1?entry=ttu',
        swiggyLink: 'https://www.swiggy.com/restaurants/bhikharam-chandmal-rajuji-grand-trunk-road-liluah-bally-kolkata-414714',
        zomatoLink: 'https://www.zomato.com/kolkata/restaurants/bhikharam-chandmal-rajuji-1?category=1'
    },
    {
        id: 1,
        title: 'Burrabazar',
        address: '8/2 Jagmohan mullick lane (kalkar street), kolkata -  700007',
        PhoneNumber: '03346 000054, 93314 33352',
        href: 'https://www.google.com/maps/search/bhikharam+chandmal+rajuji/@22.6230822,88.1791347,11z/data=!3m1!4b1?entry=ttu',
        swiggyLink: 'https://www.swiggy.com/restaurants/bhikharam-chandmal-rajuji-howrah-mali-panchghara-kolkata-157032',
        zomatoLink: 'https://www.zomato.com/kolkata/restaurants/bhikharam-chandmal-rajuji-1?category=1'
    },
    {
        id: 1,
        title: 'Ram maindir',
        address: 'C.R a venue, kolkata - 700007',
        PhoneNumber: '98311 04225',
        href: 'https://www.google.com/maps/search/bhikharam+chandmal+rajuji/@22.6230822,88.1791347,11z/data=!3m1!4b1?entry=ttu',
        swiggyLink: 'https://www.swiggy.com/restaurants/bhikharam-chandmal-rajuji-burrabazar-rammandir-kolkata-460653BurrabazarRamMandir',
        zomatoLink: 'https://www.zomato.com/kolkata/restaurants/bhikharam-chandmal-rajuji-1?category=1'
    },
    {
        id: 1,
        title: 'Brabourne Road',
        address: 'Opp. city center brabourne road, kolkata - 700001',
        PhoneNumber: '93318 33355',
        href: 'https://www.google.com/maps/search/bhikharam+chandmal+rajuji/@22.6230822,88.1791347,11z/data=!3m1!4b1?entry=ttu',
        swiggyLink: 'https://www.swiggy.com/restaurants/bhikharam-chandmal-rajuji-burrabazar-rammandir-kolkata-460653BurrabazarRamMandir',
        zomatoLink: 'https://www.zomato.com/kolkata/restaurants/bhikharam-chandmal-rajuji-1?category=1'
    }
]
const OurStoriesPage = () => {
    return (
        <div className="flex justify-center items-center w-[100%]">
            <div className="w-[100%] xl:max-w-[1440px] flex flex-col items-center justify-center">
                <h1 className="text-[30px] md:text-[40px] font-extrabold text-[#783F2A] my-[20px] md:my-[40px] uppercase">Our
                    Outlets</h1>
                <div
                    className="w-[100%] px-[20px] md:px-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] mb-[40px]">
                    {StoreData.map((item) => (
                        <StoreCard
                            title={item.title}
                            address={item.address}
                            PhoneNumber={item.PhoneNumber}
                            href={item.href}
                            swiggyLink={item.swiggyLink}
                            zomatoLink={item.zomatoLink}
                        />
                    ))}
                </div>
                <div className="w-[100%] px-[20px] md:px-[40px] rounded-xl overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58943.43567507968!2d88.34922580799078!3d22.58042243897874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027671a60f9da7%3A0xad8b378553073982!2sBhikharam%20Chandmal%20Rajuji!5e0!3m2!1sen!2sin!4v1709121436397!5m2!1sen!2sin"
                        width="600" height="450"
                        style={{"border": 0, width: "100%", borderRadius: 16, marginBottom: 20}} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <Testimonials data={TestimonialsData}/>
            </div>
        </div>
    )
}

export default OurStoriesPage;
