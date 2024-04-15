'use client'
import React from 'react';
import {useParams} from 'next/navigation';
import Image from "next/image";
import SlugData from "../../../data/product.json";

interface Card {
    title: string;
    description: string;
    imgSrc?: string;
}

interface CardContent {
    title: string;
    Card: Card[];
}

interface Product {
    title: string;
    slug: string;
    heroImage: string;
    CardContent: CardContent[];
}

const OurProducts = () => {
    const {slug} = useParams();
    const product: Product | undefined = SlugData.find(item => item.slug === slug);

    if (!product) {
        return <div>No product found for this slug.</div>;
    }

    return (
        <div className="flex justify-center items-center w-[100%]">
            <div className="w-[100%] xl:max-w-[1440px]">
                <div>
                    {product && (
                        <Image
                            src={product.heroImage}
                            alt={'HeroImage'}
                            width={1000}
                            height={1000}
                            className="object-fill w-[100%] h-auto"
                            style={{width: "100%", height: 'auto'}}
                        />
                    )}
                </div>
                <div className="w-[100%] gap-[20px] flex flex-col mt-[20px] mb-[40px]">
                    {product && product.CardContent.map((item, index) => (
                        <div key={index} className="px-[20px] md:px-[40px] w-[100%]">
                            <h1 className={`text-[#212529] ${index % 2 === 0 ? 'font-extrabold text-[30px] md:text-[50px]' : 'font-medium text-[25px] md:text-[30px]'} my-[20px] text-center md:text-start flex items-center justify-center md:justify-start md:items-start`}>{item.title}</h1>
                            <div className="w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
                                {item.Card.map((cardItem, index) => (
                                    <div
                                        key={index}
                                        className="w-[100%] overflow-hidden rounded-lg border border-[#ddd] transition-transform delay-100 hover:scale-110 hover:shadow-xl cursor-pointer">
                                        {cardItem.imgSrc && (
                                            <Image src={cardItem.imgSrc} alt={'CardImage'} width={1000} height={1000}
                                                   className="object-fill w-[100%] h-[100%]"
                                                   style={{width: "100%", height: "auto"}}/>
                                        )}
                                        <div className="p-[15px] flex flex-col gap-[5px]">
                                            <h1 className="text-[#212529] text-[1rem] md:text-[1.20rem] font-semibold uppercase">{cardItem.title}</h1>
                                            <p className="text-[#212529] font-normal text-[14px] md:text-[16px] capitalize">{cardItem.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurProducts;
