import React from "react";
import Image from "next/image";
import AmbhujaCement from "../../public/Ambuja_cement.png";
import AsianPaints from "../../public/Asian-Paints.png";
import BlueStar from "../../public/BlueStar.png";
import Britania from "../../public/britania.png";
import GRSE from "../../public/GRSE.png";
import IRCTC from "../../public/IRCTC.png";
import JSW from "../../public/jsw.png";
import LG from "../../public/LG.png";
import ApanGhar from "../../public/Shyam_steel.png";
import StarCement from "../../public/Star-Cement.png";
import IndianOil from "../../public/Indian_oil.png";

const ClientData = [
    {
        id: 1,
        imgSrc: AmbhujaCement,
        imgAlt: 'AmbujaCement'
    },
    {
        id: 2,
        imgSrc: AsianPaints,
        imgAlt: 'AsianPaints'
    },
    {
        id: 3,
        imgSrc: BlueStar,
        imgAlt: 'BlueStar'
    },
    {
        id: 4,
        imgSrc: Britania,
        imgAlt: 'Britania'
    },
    {
        id: 5,
        imgSrc: GRSE,
        imgAlt: 'GRSE'
    },
    {
        id: 6,
        imgSrc: IRCTC,
        imgAlt: 'IRCTC'
    },
    {
        id: 7,
        imgSrc: JSW,
        imgAlt: 'JSW'
    },
    {
        id: 8,
        imgSrc: LG,
        imgAlt: 'LG'
    },
    {
        id: 9,
        imgSrc: ApanGhar,
        imgAlt: 'ApnaGhar'
    },
    {
        id: 10,
        imgSrc: StarCement,
        imgAlt: 'StarCement'
    },
    {
        id: 11,
        imgSrc: IndianOil,
        imgAlt: 'IndianOil'
    }
]
const ClientImage = () => {
    return (
        <div className="w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
            {ClientData.map((item) => (
                <div key={item.id} className="w-[100%] cursor-pointer">
                    <Image src={item.imgSrc} alt={item.imgAlt} className="w-[100%] h-auto object-fill transition-transform delay-100 hover:scale-110"/>
                </div>
            ))}
        </div>
    )
}

export default ClientImage;
