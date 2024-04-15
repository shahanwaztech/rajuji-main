'use client'
import React, {useState, ChangeEvent, FormEvent} from 'react';
import Image from "next/image";

interface FormParams {
    name: string;
    email: string;
    message: string;
}

const ContactUsPage = () => {
    const [params, setParams] = useState<FormParams>({
        name: '',
        email: '',
        message: ''
    })
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const {name, value} = e.target;
        setParams(prevParams => ({
            ...prevParams,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log(params);
    };

    return (
        <div className="flex justify-center items-center w-[100%]">
            <div className="w-[100%] xl:max-w-[1440px] flex flex-col items-center justify-center">
                <h1 className="text-[30px] md:text-[40px] font-extrabold text-[#212529] my-[20px] md:my-[40px] uppercase">Contact
                    Us</h1>
                <div
                    className="flex flex-col  py-[30px] gap-[20px] lg:gap-0 lg:flex-row justify-between px-[20px] md:px-[40px] w-[100%]">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-[10px] w-[100%] lg:w-[60%]">
                        <div>
                            <label htmlFor="name" className="block text-[#212529] font-bold mb-2">Name</label>
                            <input type="text" value={params.name} id="name" name="name"
                                   onChange={handleChange}
                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-[#212529] font-bold mb-2">Email</label>
                            <input type="email" id="email" value={params.email} name="email"
                                   onChange={handleChange}
                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-[#212529] font-bold mb-2">Message</label>
                            <textarea id="message" name="message"
                                      value={params.message} onChange={handleChange}
                                      rows={5}
                                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div>
                            <button type="submit"
                                    className="bg-blue-500 w-[100%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit
                            </button>
                        </div>
                    </form>
                    <div
                        className="flex flex-col justify-start gap-[30px] lg:justify-around py-[10px] w-[100%] lg:w-[38%]">
                        <div className="flex flex-row gap-[15px] items-center justify-start cursor-pointer">
                            <Image src="/location.svg" alt={'Icon'} width={30} height={30}/>
                            <p className="text-[#212529] font-medium">3B, Brijodulal street , Kolkata - 700 006</p>
                        </div>
                        <div className="flex flex-row gap-[15px] items-center justify-start cursor-pointer">
                            <Image src="/mail.svg" alt={'Icon'} width={30} height={30}/>
                            <p className="text-[#212529] font-medium">info@bhikharamchandmalrajuji.com</p>
                        </div>
                        <div className="flex flex-row gap-[15px] items-center justify-start cursor-pointer">
                            <Image src="/phone.svg" alt={'Icon'} width={30} height={30}/>
                            <p className="text-[#212529] font-medium">98319 93251</p>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] px-[20px] md:px-[40px] rounded-xl overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58943.43567507968!2d88.34922580799078!3d22.58042243897874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027671a60f9da7%3A0xad8b378553073982!2sBhikharam%20Chandmal%20Rajuji!5e0!3m2!1sen!2sin!4v1709121436397!5m2!1sen!2sin"
                        width="600" height="450"
                        style={{"border": 0, width: "100%", borderRadius: 16, marginBottom: 20}}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default ContactUsPage;
