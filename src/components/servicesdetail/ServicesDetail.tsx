'use client'
import BannerText from "../resuable/BannerText";
import Banner from "../resuable/Banner";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import {motion} from "framer-motion"

interface HeadingObj {
    title: string,
    para: string,
}

interface SectionObj {
    image: string,
    title: string,
    para: string,
    bullet1: string,
    bullet2: string,
    bullet3: string,
    bullet4: string
}

interface MainObj {
    heading1: HeadingObj,
    heading2: HeadingObj,
    section1: SectionObj,
    section2: SectionObj,
    section3: SectionObj,
    mainImage: string,
    bullet1: string,
    bullet2: string,
    bullet3: string,
    bullet4: string,
    bullet5: string,
    bullet6: string,
    bannerImage?:string

}

interface propMain {
    detailObject: MainObj
}

const ServicesDetail = ({ detailObject }: propMain) => {
    return (
        <>
            <Banner heading="Services" subheading="Home" image={detailObject.bannerImage}/>

            <div className="bg-black">
                <div className="layout ">
                    <div className="py-[94px]  flex justify-evenly flex-wrap  gap-y-10">
                        <motion.div className=" flex flex-col  gap-y-5 px-3 max-w-[750px] "
                         initial={{ opacity: 0, x: -100 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration:0.4, ease: 'easeInOut' }}
                        >
                            <h1 className="font-syne font-[700] text-white home-sm:text-[24px] text-[30px] sm:text-[35px] md:text-[43px] lg:text-[54px]">{detailObject.heading1.title}</h1>
                            <p className="font-syne font-[600] text-white home-sm:text-[22px] text-[27px] sm:text-[32px] md:text-[40px] ">
                                {detailObject.heading1.para}
                            </p>

                            <div className="pt-[40px] ">
                                <ul className=" flex justify-start">
                                    <div className="flex flex-col gap-y-3 ">
                                        <div className="flex flex-wrap  gap-x-10 gap-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                            <li className="flex items-center"> <GoDotFill className="text-white mr-2" /> {detailObject.bullet1}</li>
                                            <li className="flex items-center"><GoDotFill className="text-white mr-2" /> {detailObject.bullet2}</li>
                                        </div>
                                        <div className="flex flex-wrap  gap-x-8 gap-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                            <li className=" flex items-center"> <GoDotFill className="text-white mr-2" /> {detailObject.bullet3}</li>
                                            <li className=" flex items-center"><GoDotFill className="text-white mr-2" /> {detailObject.bullet4}</li>
                                        </div>
                                        <div className="flex flex-col list-r-calc:flex-row   justify-start  gap-x-8 list-r-calc:space-y-0 space-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                            <li className=" flex items-center"> <GoDotFill className="text-white mr-2" /> {detailObject.bullet5}</li>
                                            <li className=" flex items-center"><GoDotFill className="text-white mr-2" /> {detailObject.bullet6}</li>
                                        </div>

                                    </div>
                                </ul>
                            </div>

                        </motion.div>
                        <motion.div className="w-[440px] "
                          initial={{ opacity: 0, x: 200 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration:0.4, ease: 'easeInOut' }}
                        >
                            <Image alt="servicedetail-1" src={detailObject.mainImage} className="w-full h-full object-cover" width={1000} height={1000} />
                        </motion.div>
                    </div>
                </div>
            </div>


            <div className="relative bg-black py-[80px] overflow-hidden">
                <div className="layout ">
                    <h1 className="font-syne font-[700] home-sm:text-[30px] text-[44px] text-white text-center pb-[60px] ">{detailObject.heading2.title}</h1>
                    <p className="font-dmsans font-[400] home-sm:text-[20px] text-[24px] md:text-[31px] text-[#8FA8BD] text-center ">
                        {detailObject.heading2.para}
                    </p>
                </div>


                <div className="hidden h-full absolute right-[-270px]  top-0  overflow-hidden animate-pulse blur-r-hide:block ">
                    <Image src={'/images/home/blur.png'} alt="" width={1000} height={1000} className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="bg-black">
                <div className="layout py-[70px]">
                    <div className="flex justify-evenly flex-wrap gap-y-[50px] py-[40px]">

                        <div className="w-[600px] flex flex-wrap  gap-x-2">
                            <div className="max-w-[304px] min-h-[400px] mx-auto">
                                <Image src={detailObject.section1.image} width={1000} height={1000} className="w-full h-full object-cover home-sm:rotate-0 rotate-[0deg] duration-100 cursor-pointer hover:rotate-[10deg]" alt="detail-1" />
                            </div>
                            <ul className=" flex justify-center  self-start pt-[40px] service-detail:w-full ">
                                <div className="flex flex-col flex-wrap gap-y-3 ">
                                    <div className="flex flex-wrap  gap-x-10 gap-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                        <li className="flex items-center"><GoDotFill className="text-[#00EBFF] mr-2" /> {detailObject.section1.bullet1}</li>
                                    </div>
                                    <div className="flex flex-wrap  gap-x-10 gap-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                        <li className=" flex items-center"><GoDotFill className="text-[#00EBFF] mr-2" /> {detailObject.section1.bullet2}</li>
                                    </div>
                                    <div className="flex flex-col list-r-calc:flex-row   justify-start  gap-x-8 list-r-calc:space-y-0 space-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                        <li className=" flex items-center"><GoDotFill className="text-[#00EBFF] mr-2" /> {detailObject.section1.bullet3}</li>
                                    </div>
                                    <div className="flex flex-col list-r-calc:flex-row   justify-start  gap-x-8 list-r-calc:space-y-0 space-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                        <li className=" flex items-center"><GoDotFill className="text-[#00EBFF] mr-2" /> {detailObject.section1.bullet4}</li>
                                    </div>

                                </div>
                            </ul>
                        </div>
                        <div className="flex flex-col max-w-[486px]">
                            <div className="flex flex-col gap-y-5">
                                <h1 className="font-syne font-[700] text-[42px] text-white">{detailObject.section1.title}</h1>
                                <p className="font-400 font-dmsans text-[16px] text-[#8FA8BD] pb-[50px]">
                                {detailObject.section1.para}
                                </p>
                            </div>
                            <div className="border-[2px] border-[#00EBFF] w-[50px]" />
                        </div>
                    </div>

                    <div className="flex justify-evenly flex-wrap gap-y-[50px] py-[80px]">
                        <div className="w-[600px] flex flex-wrap  gap-x-2">
                            <div className="max-w-[304px] min-h-[400px] mx-auto">
                                <Image src={detailObject.section2.image} width={1000} height={1000} className="w-full h-full object-cover home-sm:rotate-0 rotate-[0deg] duration-100 cursor-pointer hover:rotate-[10deg]" alt="detail-1" />
                            </div>
                            <ul className=" flex justify-center  self-start pt-[40px] service-detail:w-full ">
                                <div className="flex flex-col flex-wrap gap-y-3 ">
                                    <div className="flex flex-wrap  gap-x-10 gap-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                        <li className="flex items-center"><GoDotFill className="text-[#00EBFF] mr-2" /> {detailObject.section2.bullet1}</li>
                                    </div>
                                    <div className="flex flex-wrap  gap-x-10 gap-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                        <li className=" flex items-center"><GoDotFill className="text-[#00EBFF] mr-2" /> {detailObject.section2.bullet2}</li>
                                    </div>
                                    <div className="flex flex-col list-r-calc:flex-row   justify-start  gap-x-8 list-r-calc:space-y-0 space-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                        <li className=" flex items-center"><GoDotFill className="text-[#00EBFF] mr-2" /> {detailObject.section2.bullet3}</li>
                                    </div>

                                </div>
                            </ul>
                        </div>
                        <div className="flex flex-col max-w-[486px] ">
                            <div className="flex flex-col gap-y-5">
                                <h1 className="font-syne font-[700] text-[42px] text-white">{detailObject.section2.title}</h1>
                                <p className="font-400 font-dmsans text-[16px] text-[#8FA8BD] pb-[50px]">
                                    {detailObject.section2.para}
                                </p>
                            </div>
                            <div className="border-[2px] border-[#00EBFF] w-[50px]" />
                        </div>
                    </div>

                    <div className="flex justify-evenly flex-wrap gap-y-[50px] py-[90px]">
                        <div className="w-[600px] flex flex-wrap  gap-x-2">
                            <div className="max-w-[334px] min-h-[400px] mx-auto">
                                <Image src={detailObject.section3.image} width={1000} height={1000} className="w-full h-full object-cover home-sm:rotate-0 rotate-[0deg] duration-100 cursor-pointer hover:rotate-[10deg]" alt="detail-1" />
                            </div>
                            <ul className=" flex justify-center  self-start pt-[40px] service-detail:w-full ">
                                <div className="flex flex-col flex-wrap gap-y-3 ">
                                    <div className="flex flex-wrap  gap-x-10 gap-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                        <li className="flex items-center"><GoDotFill className="text-[#00EBFF] mr-2" /> {detailObject.section3.bullet1}</li>
                                    </div>
                                    <div className="flex flex-wrap  gap-x-10 gap-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                        <li className=" flex items-center"><GoDotFill className="text-[#00EBFF] mr-2" /> {detailObject.section3.bullet2}</li>
                                    </div>
                                    <div className="flex flex-col list-r-calc:flex-row   justify-start  gap-x-8 list-r-calc:space-y-0 space-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                        <li className=" flex items-center"><GoDotFill className="text-[#00EBFF] mr-2" /> {detailObject.section3.bullet3}</li>
                                    </div>

                                </div>
                            </ul>
                        </div>
                        <div className="flex flex-col  max-w-[486px] ">
                            <div className="flex flex-col gap-y-5">
                                <h1 className="font-syne font-[700] text-[42px] text-white">{detailObject.section3.title}</h1>
                                <p className="font-400 font-dmsans text-[16px] text-[#8FA8BD] pb-[50px]">
                                    {detailObject.section3.para}
                                </p>
                            </div>
                            <div className="border-[2px] border-[#00EBFF] w-[50px]" />
                        </div>
                    </div>

                    0</div>
            </div>

            <BannerText />


        </>
    )
}

export default ServicesDetail;