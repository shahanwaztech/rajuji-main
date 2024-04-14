'use client'
import React, {useState, useRef, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

interface DropDownLink {
    id: number;
    name: string;
    href: string;
}

const DropDownLinks: DropDownLink[] = [
    {
        id: 1,
        name: 'Sweets',
        href: 'www.google.com'
    },
    {
        id: 2,
        name: 'Namkeens',
        href: '/'
    },
    {
        id: 3,
        name: 'Snacks',
        href: '/'
    },
    {
        id: 4,
        name: 'Seasonal',
        href: '/'
    },
    {
        id: 5,
        name: 'Bakery',
        href: '/'
    },
    {
        id: 6,
        name: 'Restaurant Items',
        href: '/'
    }
];

const NavBar: React.FC = () => {
    const [isDropDown, setIsDropDown] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [navHeight, setNavHeight] = useState<number>(0);
    const dropDownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
                setIsDropDown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        handleResize();

        const handleScroll = () => {
            setNavHeight(window.scrollY);
        }

        handleScroll()

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        setIsOpen(false)
        setIsDropDown(false)
    }

    return (
        <>
            {windowWidth >= 1000 ? (
                <div
                    className={`w-[100%] py-[10px] flex flex-row justify-center gap-[40px] items-center  ${navHeight > 50 ? 'bg-white py-[15px] shadow-xl top-0 z-[999] sticky' : 'bg-white'}`}>
                    <div className="flex flex-row justify-between gap-[20px] items-center">
                        <div className="nav-link">Home</div>
                        <div className="nav-link">About Us</div>
                        <div
                            className="relative nav-link transition-transform flex flex-row items-center justify-center gap-[10px]"
                            ref={dropDownRef}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={() => setIsDropDown(!isDropDown)}
                        >
                            <div>Our Products</div>
                            <Image src={isHovered ? "/dropdowngray.png" : "/dropdownred.png"} alt={'dropdown'}
                                   width={12}
                                   height={12}/>
                            {isDropDown && (
                                <ul className="absolute transition-transform delay-105 top-10 left-4 bg-white shadow-xl border rounded-md z-[999] text-center list-none">
                                    {DropDownLinks.map((menu) => (
                                        <Link href={menu.href} key={menu.id}>
                                            <li onClick={() => setIsDropDown(false)}
                                                className="flex w-[200px] justify-center text-center text-[#6c757d] text-[18px] font-normal py-[10px] hover:bg-gray-200">
                                                {menu.name}
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    <Image src="/logo.png" alt={'logo'} width={110} height={110} className="object-contain"/>
                    <div className="flex flex-row items-center justify-between gap-[20px]">
                        <div className="nav-link">Our Clients</div>
                        <div className="nav-link">Our Stories</div>
                        <div className="nav-link">Contact Us</div>
                    </div>
                </div>
            ) : (
                <>
                    <div
                        className={` ${isOpen ? 'hidden' : 'flex flex-row'} flex-row  px-[10px] py-[15px] bg-transparent justify-between w-[100%] items-center ${navHeight > 50 ? 'bg-white py-[20px] shadow-xl sticky top-0 z-[9999]' : ''}`}>
                        <Image className="cursor-pointer" src='/logo.png' alt={'logo'} width={60} height={60}/>
                        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                            <Image src='/menu.svg' alt={'hemburgermenu'} width={35} height={35}/>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="bg-white w-[100vw] z-[9999] h-[100vh] fixed">
                            <div className="flex flex-col justify-between gap-[30px] my-[30px] items-center">
                                <div onClick={handleClick} className="nav-link">Home</div>
                                <div onClick={handleClick} className="nav-link">About Us</div>
                                <div
                                    className="relative nav-link transition-transform flex flex-cols items-center justify-center gap-[10px]"
                                    ref={dropDownRef}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    onClick={() => setIsDropDown(!isDropDown)}
                                >
                                    <div>Our Products</div>
                                    <Image src={isHovered ? "/dropdowngray.png" : "/dropdownred.png"} alt={'dropdown'}
                                           width={12}
                                           height={12}/>
                                </div>
                                {isDropDown && (
                                    <ul className="relative transition-transform  text-center my-[-20px] list-none">
                                        {DropDownLinks.map((menu) => (
                                            <Link href={menu.href} key={menu.id}>
                                                <li onClick={() => setIsDropDown(false)}
                                                    className="flex w-[200px] justify-center text-center text-black py-[10px] font-normal text-[18px] hover:bg-gray-200">
                                                    {menu.name}
                                                </li>
                                            </Link>
                                        ))}
                                    </ul>
                                )}
                                <div onClick={handleClick} className="nav-link">Our Clients</div>
                                <div onClick={handleClick} className="nav-link">Our Stories</div>
                                <div onClick={handleClick} className="nav-link">Contact Us</div>
                            </div>
                            <div onClick={() => setIsOpen(false)}
                                 className="border border-[#000] rounded-full cursor-pointer absolute top-[20px] right-[10px]">
                                <Image src='/close.svg' alt={'close icon'} width={26} height={26}/>
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default NavBar;
