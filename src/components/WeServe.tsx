'use client'
import React, {useState} from 'react';
import Image from "next/image";
import Sweet from '../../public/Sweet_h.png';
import SweetHover from '../../public/Sweet.png'
import Namkeen from '../../public/Namkeen_h.png';
import NamkeenHover from '../../public/Namkeen.png'
import Cookies from '../../public/cookies_h.png';
import CookiesHover from '../../public/cookies.png'
import Snacks from '../../public/snacks_h.png';
import SnacksHover from '../../public/snacks.png';

const WeServeData = [
    {
        id: 1,
        imgSrc: Sweet,
        imgSrcHover: SweetHover,
        imgAlt: 'Sweet'
    },
    {
        id: 2,
        imgSrc: Namkeen,
        imgSrcHover: NamkeenHover,
        imgAlt: 'Namkeen'
    },
    {
        id: 3,
        imgSrc: Cookies,
        imgSrcHover: CookiesHover,
        imgAlt: 'Cookies'
    },
    {
        id: 4,
        imgSrc: Snacks,
        imgSrcHover: SnacksHover,
        imgAlt: 'Snacks'
    }
]
const WeServe = () => {
    const [isHovered, setIsHovered] = useState<number | null>(null);
    return (
        <div className="flex flex-col items-center justify-center my-[40px]">
            <h1 className="text-[3rem] font-medium text-[#783F2A]">Outlets</h1>
            <div
                className="w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[40px] px-[20px] py-[20px] md:px-[40px] md:py-[30px] lg:px-[60px] lg:py-[40px]">
                {WeServeData.map((menu) => (
                    <div
                        key={menu.id}
                        onMouseEnter={() => setIsHovered(menu.id)}
                        onMouseLeave={() => setIsHovered(null)}
                        className="w-[100%]"
                    >
                        <Image
                            src={isHovered === menu.id ? menu.imgSrcHover : menu.imgSrc} alt={menu.imgAlt}
                            className={`cursor-pointer rounded-md w-[100%] h-auto ${isHovered === menu.id && 'shadow-2xl transition-transform delay-110 scale-110'}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeServe;
