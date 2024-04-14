import React from 'react';
import Image from "next/image";
import Rasgulla from '../../public/rasgulla.png';
import Bhujiya from '../../public/BHUJIYA.png';

const FeatureProducts = () => {
    return (
        <div className="max-w-[1440px] bg-[#0dae99] flex flex-col">
            <div
                className="relative z-[8] flex flex-col lg:flex-row justify-between items-center gap-[30px] lg:gap-[20px] lg:px-[60px] lg:pt-[80px] lg:pb-[30px] md:px-[40px] md:pt-[60px] md:pb-[30px] px-[20px] pt-[40px] pb-[30px]  w-[100%]">
                <div className="w-[100%] lg:w-[50%]">
                    <h1 className="text-[2.8rem] font-extrabold text-[#393535] text-center lg:text-start">Specialty For
                        Every
                        Occasion</h1>
                    <p className="text-[1.5rem] font-normal text-[#fff] text-justify">Sweets have been the part of every
                        tradition. Bhikhaaram Chandmal Rajuji has always made sure that you celebrate every occasion
                        with the best and purest sweets, creating lasting memories.</p>
                </div>
                <div className="w-[100%] lg:w-[50%]">
                    <Image
                        src={Rasgulla} alt={'Picture'}
                        className="object-fill w-[100%] md:w-[80%] lg:w-[90%] h-auto"
                    />
                </div>
            </div>
            <div
                style={{backgroundImage: `url('/rapper_effect.svg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}
                className="flex flex-col lg:flex-row-reverse justify-between items-center gap-[30px] lg:gap-[20px] lg:px-[60px] lg:pt-[80px] lg:pb-[30px] md:px-[40px] md:pt-[60px] md:pb-[30px] px-[20px] pt-[80px] pb-[30px] z-[10]">
                <div className="w-[100%] lg:w-[50%]">
                    <h1 className="text-[2.8rem] font-extrabold text-[#393535] text-center lg:text-end">The Taste of
                        Fresh Snacks</h1>
                    <p className="text-[1.5rem] font-normal text-[#fff] text-justify">Any occasion or
                        your evening
                        tea
                        time, enjoy the
                        fresh taste
                        of Bhikhaaram Chandmal Rajuji bhujia
                        and
                        snacks
                        .
                    </p>
                </div>
                <div className="w-[100%] lg:w-[50%]">
                    <Image
                        src={Bhujiya} alt={'Picture'}
                        className="object-fill w-[100%] md:w-[80%] lg:w-[90%] h-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default FeatureProducts;
