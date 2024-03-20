'use client'
import BannerText from "../resuable/BannerText";
import Banner from "../resuable/Banner";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

const ServicesDetail = () => {
    return (
        <>
            <Banner />
            <div className="bg-black">
                <div className="layout ">
                    <div className="py-[74px]  flex justify-evenly flex-wrap  gap-y-10">
                        <div className=" flex flex-col  gap-y-5 px-3 max-w-[750px]">
                            <h1 className="font-syne font-[700] text-white home-sm:text-[24px] text-[30px] sm:text-[35px] md:text-[43px] lg:text-[54px]">Web Design</h1>
                            <p className="font-syne font-[600] text-white home-sm:text-[22px] text-[27px] sm:text-[32px] md:text-[40px] "> An influential website design agency that keeps perfect balance of creative design, inventive strategies, and advanced technology to boost your business.
                            </p>

                            <div className="pt-[40px] ">
                                <ul className=" flex justify-center">
                                    <div className="flex flex-col gap-y-3 ">
                                        <div className="flex flex-wrap  gap-x-10 gap-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                            <li className="flex items-center"> <GoDotFill className="text-[#00EBFF] mr-2" /> Research</li>
                                            <li className="flex items-center"><GoDotFill className="text-[#FFD55B] mr-2" /> Illustration</li>
                                        </div>
                                        <div className="flex flex-wrap  gap-x-10 gap-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                            <li className=" flex items-center"> <GoDotFill className="text-[#00EBFF] mr-2" /> UI Design</li>
                                            <li className=" flex items-center"><GoDotFill className="text-[#FFD55B] mr-2" /> Prototype</li>
                                        </div>
                                        <div className="flex flex-col list-r-calc:flex-row   justify-start  gap-x-8 list-r-calc:space-y-0 space-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                            <li className=" flex items-center"> <GoDotFill className="text-[#00EBFF] mr-2" /> UX Design</li>
                                            <li className=" flex items-center"><GoDotFill className="text-[#FFD55B] mr-2" /> Test</li>
                                        </div>
                                        
                                    </div>
                                </ul>
                            </div>

                        </div>
                        <div className="w-[440px] h-[358px bg-green-400">
                            <Image alt="servicedetail-1" src={'/images/ServicesDetail.png'} className="w-full h-full object-cover" width={1000} height={1000} />
                        </div>
                    </div>
                </div>
            </div>
            <BannerText />
        </>
    )
}

export default ServicesDetail;