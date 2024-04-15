import React from 'react';
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Director from "../../../public/Director.png";
import Mission from "../../../public/Mission.png";
import Vision from "../../../public/Vision.png";
import Certificate1 from "../../../public/Certificate1.png";
import Certificate2 from "../../../public/Certificate2.png";
import Certificate3 from "../../../public/Certificate3.png";
import Certificate4 from "../../../public/Certificate4.png";

const AboutPage = () => {
    return (
        <div className="flex justify-center items-center w-[100%]">
            <div className="w-[100%] xl:max-w-[1440px] flex flex-col items-center justify-center">
                <h1 className="text-[30px] md:text-[40px] font-extrabold text-[#212529] my-[20px] md:my-[40px] uppercase">About
                    Us</h1>
                <div
                    className="w-[100%] px-[20px] md:px-[40px] mb-[20px] flex flex-col gap-[20px] lg:gap-0 lg:flex-row justify-between items-center">
                    <div className="lg:w-[50%] w-[100%] flex items-center justify-center">
                        <Image
                            src={Logo}
                            alt={'Logo'}
                            className="object-fill w-[100%] md:w-[80%] h-auto "
                        />
                    </div>
                    <div className="lg:w-[50%] w-[100%]">
                        <h1 className="text-[30px] text-center md:text-start md:text-[40px] font-extrabold text-[#212529] uppercase">Our
                            Story</h1>
                        <p className="text-[1re,] md:text-[1.25rem] font-normal text-[#212529] leading-normal text-justify">Once
                            upon a
                            time, in 1923, two spice wizards named Bhikharam and his son Chandmal concocted the
                            ultimate snack sensation in Bikaner - bhujia! This spicy treat quickly became a fan
                            favorite!
                            Next thing you know, Chandmal&apos;s son, Kishan, took the bhujia craze to Kolkata, where the
                            magic
                            continued. Fast forward to today, with the help of the wise Raj Kumar Agarwal, the brand has
                            bloomed into a full-fledged flavor fiesta. From sweet to savory, Bhikharam Chandmal Rajuji
                            has
                            been serving up yumminess while championing quality and cleanliness. Their journey from a
                            humble
                            family business to a highly respected company is a true success story!</p>
                    </div>
                </div>
                <div
                    className="w-[100%] px-[20px] md:px-[40px] mt-[20px] flex flex-col-reverse  lg:flex-row-reverse justify-between items-end">
                    <div className="lg:w-[50%] w-[100%] flex justify-center">
                        <Image
                            src={Director}
                            alt={'Director'}
                            className="object-fill w-[100%] md:w-[90%] h-auto"
                        />
                    </div>
                    <div className="lg:w-[50%] w-[100%]">
                        <h1 className="text-[30px] text-center md:text-start md:text-[40px] font-extrabold text-[#212529] uppercase">Director&apos;s
                            Desk</h1>
                        <p className="text-[1rem] md:text-[1.25rem] mb-[20px] font-normal text-[#212529] leading-normal text-justify flex flex-col gap-[15px]">Welcome
                            to
                            Bhikharam Chandmal Rajuji! Since 1923, our culinary saga began with the humble creation of
                            bhujia by Late Bhikharam and his son Late Chandmal in Bikaner. This delicacy quickly
                            captured
                            hearts, leading to our expansion into Kolkata in 1968, thanks to Late Kishan Gopal ji
                            Agarwal.
                            Guided by Shri Raj Kumar ji Agarwal, our journey of excellence has continued, maintaining
                            top-notch taste, quality, and hygiene standards
                            <span>
                        With eight outlets in Kolkata and a daily clientele exceeding 5000, we&apos;ve shared our century-old
                        experience with India. Now, we&apos;re thrilled to introduce our authentic Indian sweets and snacks
                        to the world, including favorites like Bhujiya, Tok Jhal Misti, Khasta Mix and more.<br/>
                        Our vision is simple: to make these beloved creations accessible globally while ensuring the
                        highest quality at competitive rates.<br/>
                        </span>
                            <span>
                        Thank you for being part of our extraordinary journey. We can&apos;t wait to share the joy of our
                        authentic culinary offerings with you.</span>
                            <span className="flex flex-col gap-[5px]">
                            <span>Warm regards,</span>
                            <span>Raj Kumar Agarwal</span>
                            <span>Chairman, Bhikharam Chandmal Rajuji</span>
                        </span>
                        </p>
                    </div>
                </div>
                <div className="bg-[#ecb15a]">
                    <div
                        className="w-[100%] px-[20px] md:px-[40px] my-[40px] flex flex-col gap-[20px] lg:gap-0 lg:flex-row justify-between items-center">
                        <div className="lg:w-[50%] w-[100%] flex items-center justify-center">
                            <Image
                                src={Vision}
                                alt={'Vision'}
                                className="object-fill w-[100%] md:w-[80%] h-auto"
                            />
                        </div>
                        <div className="lg:w-[50%] w-[100%]">
                            <h1 className="text-[30px] text-center md:text-start md:text-[40px] font-extrabold text-[#212529] uppercase">Our
                                Vision</h1>
                            <div
                                className="text-[1rem] md:text-[1.25rem] font-normal text-[#212529] leading-normal text-justify flex flex-col gap-[15px]">At
                                Bhikharam Chandmal Rajuji, our vision is to transcend borders and bring the rich
                                tapestry of
                                our culinary heritage to every corner of the globe. Established in 1923, our journey
                                began
                                with a family&apos;s passion for crafting exceptional flavors, starting with the beloved
                                bhujia.
                                <span>
                                With over a century of experience, we have evolved into a symbol of excellence under the
                                guidance of Shri Raj Kumar ji Agarwal. Today, our eight outlets in Kolkata serve over
                                5000 clients daily, reflecting our commitment to exceptional taste, unwavering quality,
                                and stringent hygiene standards.
                             </span>
                                <span>
                                Looking ahead, we aspire to share our authentic Indian sweets and snacks,
                                including favorites like Bhujiya, Tok Jhal Misti, Khasta Mix, Khatta Meetha,
                                Jhal Chanchur, Cornflakes Mix, Mini Kachori & Samosa, Namkeen Swali, Methi Swali,
                                Gulabjamun, Rosogolla, Anguri Petha, Soanpapdi, Rajbhog, Besan Laddu, and Lachha,
                                with the world. Our vision is to make these cherished creations accessible to all who
                                appreciate the essence of Indian cuisine.
                            </span>
                                <span>
                                As we embark on this global journey, we remain steadfast in our commitment to providing
                                the highest quality foods at the most competitive rates in the market. Thank you for being
                                part of our story and we eagerly anticipate sharing the joy of our authentic culinary
                                offerings with a global audience.
                            </span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-[100%] px-[20px] md:px-[40px] mb-[40px] flex flex-col gap-[20px] lg:gap-0 lg:flex-row-reverse justify-between items-center">
                        <div className="lg:w-[50%] w-[100%] flex justify-center items-center h-[100%]">
                            <Image
                                src={Mission}
                                alt={'Mission'}
                                className="object-fill w-[100%] md:w-[80%] h-auto"
                            />
                        </div>
                        <div className="lg:w-[50%] w-[100%]">
                            <h1 className="text-[30px] md:text-[40px] text-center md:text-start font-extrabold text-[#212529] uppercase">Our
                                Mission</h1>
                            <p className="text-[1rem] md:text-[1.25rem] font-normal text-[#212529] leading-normal text-justify flex flex-col gap-[15px]">&quot;At
                                Bhikharam Chandmal Rajuji, our mission is driven by a passion to share the authentic
                                flavors
                                of India with the
                                world. We are dedicated to creating a positive impact by:
                                <ul className="list-decimal ml-[20px] gap-[10px] flex flex-col">
                                    <li>
                                        Introducing Authentic Indian Products Globally: Our primary goal is to bring the
                                        true
                                        taste of authentic Indian products to every corner of the world, allowing people
                                        worldwide
                                        to savor the richness of our culinary heritage.
                                    </li>
                                    <li>
                                        Generating Employment Opportunities: We strive to contribute to the economic
                                        growth
                                        of
                                        the countries where we sell our products by creating more and more employment
                                        opportunities,
                                        fostering prosperity and well-being.
                                    </li>
                                    <li>
                                        Supporting Dealers with Hassle-Free Business: For our dealers, we aim to provide
                                        a
                                        hassle-free
                                        business experience by offering 0% royalty for the first two years, ensuring
                                        their
                                        success and growth.
                                    </li>
                                    <li>
                                        Expansion in Modern Retail Businesses: We aspire to register ourselves in an
                                        increasing number
                                        of modern retail businesses outside India, making it convenient for people to
                                        access
                                        our
                                        products easily.
                                    </li>
                                    <li>
                                        Ensuring a Win-Win Situation for Vendors and Dealers: We commit to maintaining a
                                        profit
                                        percentage higher than our peers, establishing a win-win situation for our
                                        vendors
                                        and
                                        dealers, fostering mutually beneficial relationships.
                                    </li>
                                </ul>
                                <span>
                                Our mission goes beyond business; it is about creating meaningful connections, fostering growth and
                                enriching lives through the joy of our products. Together, let&apos;s embark on a journey of shared
                                success and culinary delight.&quot;
                            </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-[0px] md:px-[40px] w-[100%] my-[30px]">
                    <h1 className="text-[30px] md:text-[40px] font-extrabold text-[#212529] uppercase text-center mb-[20px]">Certificates</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                        <Image src={Certificate1} alt={'certificates'} className="w-[100%] h-auto object-fill"/>
                        <Image src={Certificate2} alt={'certificates'} className="w-[100%] h-auto object-fill"/>
                        <Image src={Certificate3} alt={'certificates'} className="w-[100%] h-auto object-fill"/>
                        <Image src={Certificate4} alt={'certificates'} className="w-[100%] h-auto object-fill"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;
