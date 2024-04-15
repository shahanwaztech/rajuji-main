'use client'
import React from "react";
import Image from "next/image";
import Location from '../../public/location.png';
import Zomato from "../../public/Zomato_icon.jpg";
import Swiggy from "../../public/Logo_swiggy.jpg";
import {useRouter} from "next/navigation";

interface Props {
    title: string,
    address: string,
    PhoneNumber: string,
    href: string,
    swiggyLink:string,
    zomatoLink:string,
}

const StoreCard: React.FC<Props> = ({title, address, PhoneNumber, href,swiggyLink,zomatoLink}) => {
    const router = useRouter();
    return (
        <div onClick={() => router.push(`${href}`)}
             className="flex-col  rounded-xl px-[15px] py-[25px] flex justify-center items-center delay-100 cursor-pointer transition-transform hover:scale-110 hover:shadow-2xl"
             style={{
                 boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
             }}
        >
            <Image src={Location} alt={'location'} className="h-[60px] w-[60px] object-fill"/>
            <h1 className="text-center mt-[20px] uppercase text-[#212529] text-[20px] md:text-[25px] font-semibold">{title}</h1>
            <p className="text-center mt-[10px] text-[#212529] text-[14px] md:text-[18px] font-normal">{address}</p>
            <p className="text-center mt-[10px]">{PhoneNumber}</p>
            <div className="flex mt-[10px] flex-row justify-around items-center w-[100%]">
                <Image src={Swiggy} alt={'Swiggy'} width={70} height={30} onClick={() => router.push(`${swiggyLink}`)} className="cursor-pointer"/>
                <Image src={Zomato} alt={'Zomato'} width={70} height={30} onClick={() => router.push(`${zomatoLink}`)} className="cursor-pointer"/>
            </div>
        </div>
    )
}

export default StoreCard;
