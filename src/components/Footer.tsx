'use client'
import React, {useState} from 'react';
import {useRouter} from "next/navigation";
import FaceBook from '../../public/socialmedia/facebook.svg';
import FaceBookHover from '../../public/socialmedia/facebook_h.svg';
import Instagram from '../../public/socialmedia/instagram.svg'
import InstagramHover from '../../public/socialmedia/instagram_h.svg'
import Linkedin from '../../public/socialmedia/linkedin.svg';
import LinkedinHover from '../../public/socialmedia/linkedin_h.svg';
import Swiggy from '../../public/socialmedia/swiggy.png';
import SwiggyHover from '../../public/socialmedia/swiggy_h.png';
import Zomato from '../../public/socialmedia/zomato.svg';
import ZomatoHover from '../../public/socialmedia/zomato_h.svg';
import FeedBack from '../../public/Feedback_QR.jpeg';
import Image from "next/image";

const socialMediaData = [
    {
        id: 1,
        imgSrc: FaceBook,
        imgHoverSrc: FaceBookHover,
        imgAlt: 'Facebook',
        href: 'https://www.facebook.com/BhikharamChandmalRajuji/'
    },
    {
        id: 2,
        imgSrc: Instagram,
        imgHoverSrc: InstagramHover,
        imgAlt: 'Instagram',
        href: 'https://www.instagram.com/bhikharamchandmalrajuji/'
    },
    {
        id: 3,
        imgSrc: Linkedin,
        imgHoverSrc: LinkedinHover,
        imgAlt: 'Linkedin',
        href: 'https://www.linkedin.com/company/bhikharam-chandmal-sweets-&-snacks-private-limited/'
    },
    {
        id: 4,
        imgSrc: Swiggy,
        imgHoverSrc: SwiggyHover,
        imgAlt: 'Swiggy',
        href: 'https://www.swiggy.com/restaurants/bhikharam-chandmal-rajuji-maniktala-main-road-kankurgachi-kolkata-157034'
    },
    {
        id: 5,
        imgSrc: Zomato,
        imgHoverSrc: ZomatoHover,
        imgAlt: 'Zomato',
        href: 'https://www.zomato.com/kolkata/restaurants/bhikharam-chandmal-rajuji-1?category=1'
    }
]

const Footer = () => {
    const router = useRouter();
    const [isHovered, setIsHovered] = useState<number | null>(null);
    return (
        <div className="w-[100%] bg-[#0dae982c] pt-[40px]">
            <div
                className="max-w-[1440px] mx-auto flex flex-col gap-[30px] lg:gap-0 lg:flex-row justify-between items-center pb-[20px] px-[20px] md:px-[40px]">
                <div className="w-[100%] lg:w-[390px]">
                    <h1 className="text-[22px] md:text-[2rem] mb-[5px] font-semibold text-[#212529]">CELEBRATE THE
                        TASTE</h1>
                    <p className="text-[16px] font-extrabold uppercase" style={{color: 'rgba(0,0,0,0.5)'}}>Celebrate
                        every occasion with the purity of sweet and snacks from the house of
                        <span className="text-[#212529]"> BHIKHARAM CHANDMAL RAJUJI</span>
                    </p>
                </div>
                <div>
                    <Image src={FeedBack} alt={'feedback'} className="h-[150px] w-[150px] object-fill rounded-md"
                    />
                </div>
                <div className="w-[100%] lg:w-[350px] flex flex-col gap-[3px] items-start justify-start">
                    <h1 className="text-[22px] font-semibold text-[#212529]">CONTACT US</h1>
                    <p className="text-[16px] font-normal text-[#000000DD]">HO: 3B, Brijodulal Street, Kolkata -
                        700006</p>
                    <p className="text-[16px] font-normal text-[#000000DD] cursor-pointer"
                       onClick={() => router.push('mailto:info@bhikharamchandmalrajuji.com')}>info@bhikharamchandmalrajuji.com</p>
                    <p className="text-[16px] font-normal text-[#A84F1BCC] cursor-pointer"
                       onClick={() => router.push('mailto:marketing@bhikharamchandmalrajuji.com')}>marketing@bhikharamchandmalrajuji.com</p>
                    <p className="text-[16px] font-normal text-[#000000DD]">Phone: <span
                        className="text-[#A84F1BCC]"><span className="cursor-pointer"
                                                           onClick={() => router.push('tel:+9103346036414')}>033 4603 6414</span>, <span
                        onClick={() => router.push('tel:+918100425131')}
                        className="cursor-pointer">+91 81004 25131</span></span>
                    </p>
                    <button onClick={() => router.push('https://g.page/r/CQVNn-QIi3p-EAI/review')}
                            className="text-[16px] underline text-[#0D6EFD] mt-[5px]">Drop your valuable Feedback
                    </button>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-[20px] py-[20px] pb-[20px] lg:py-0 lg:pb-[10px]">
                {socialMediaData.map((menu) => (
                    <div
                        key={menu.id}
                        onClick={() => router.push(`${menu.href}`)}
                        onMouseLeave={() => setIsHovered(null)}
                        onMouseEnter={() => setIsHovered(menu.id)}
                        className={`${isHovered === menu.id && 'bg-[#212529] transition-all delay-100'} h-[40px] w-[40px] border border-[#000] rounded-full flex items-center justify-center cursor-pointer`}>
                        <Image src={isHovered === menu.id ? menu.imgHoverSrc : menu.imgSrc} alt={menu.imgAlt}
                               className="object-fill h-auto w-auto p-[7px]"/>
                    </div>
                ))}
            </div>
            <div
                className="bg-[#0dae99] w-[100%] py-[15px] font-extrabold text-center text-[16px] text-[#212529]">Copyright
                @ Bhikharam Chandmal Rajuji | Developed with <span
                    className="text-red-700">&#10084; </span>
                <button onClick={() => router.push('https://markcos.agency/')}> by MarkCos Agency</button>
            </div>
        </div>
    )
}

export default Footer;
