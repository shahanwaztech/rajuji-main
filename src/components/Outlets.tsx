'use client'
import React from 'react';
import Image from "next/image";
import Location from '../../public/location.png';

const OutletsData = [
    {
        id: 1,
        name: 'kankurgachi'
    },
    {
        id: 2,
        name: 'bangur'
    },
    {
        id: 3,
        name: 'ram mandir'
    },
    {
        id: 4,
        name: 'bupra bazar'
    },
    {
        id: 5,
        name: 'howrah'
    },
    {
        id: 6,
        name: 'liluah'
    },
    {
        id: 7,
        name: 'chinar park'
    },
    {
        id: 8,
        name: 'Brabourne Road'
    }
]

const Outlets = () => {

    return (
        <div className="flex flex-col items-center justify-center my-[40px]">
            <h1 className="text-[3rem] font-medium text-[#783F2A]">Outlets</h1>
            <div
                className={`w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-[20px] px-[20px] py-[20px] md:px-[40px] md:py-[30px] lg:px-[60px] lg:py-[40px]`}>
                {OutletsData.map((outlet) => (
                    <div key={outlet.id}
                         className="featurs-item w-[100%] py-[20px] gap-[10px] hover:scale-110 delay-100 transition-transform cursor-pointer rounded-lg flex flex-col justify-center items-center">
                        <Image src={Location} alt={'location'} className="h-[100px] w-[100px] object-fill"/>
                        <h1 className="text-[#212529] text-[16px] font-semibold uppercase">{outlet.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Outlets;
