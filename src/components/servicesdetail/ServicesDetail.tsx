'use client'
import BannerText from "../resuable/BannerText";
import Banner from "../resuable/Banner";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import Blur from "../resuable/Blur";

const ServicesDetail = () => {
    return (
        <>
            <Banner />

            <div className="bg-black">
                <div className="layout ">
                    <div className="py-[94px]  flex justify-evenly flex-wrap  gap-y-10">
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
                        <div className="w-[440px] ">
                            <Image alt="servicedetail-1" src={'/images/ServicesDetail.png'} className="w-full h-full object-cover" width={1000} height={1000} />
                        </div>
                    </div>
                </div>
            </div>


            <div className="relative bg-black py-[80px] overflow-hidden">
                <div className="layout ">
                    <h1 className="font-syne font-[700] home-sm:text-[30px] text-[44px] text-white text-center pb-[60px] ">What does web design include ?</h1>
                    <p className="font-dmsans font-[400] home-sm:text-[20px] text-[24px] md:text-[31px] text-[#8FA8BD] ">
                        Visual appeal and user-friendliness create engaging first impressions and user
                        interactions, fostering longer visits and higher conversion reates. Optimization for various devices and SEO increases reach and visibility. Quality assurance, relevant content,
                        and sustained maintenance keep the site error-free, updated, and responsive to evolving trends and user needs. Collectively, these factors are the cornerstones of a successfull
                        web design, ensuring it not only looks great but functions effectively and evolves with the digital landscape.
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
                                <Image src={'/images/detail1.jpg'} width={1000} height={1000}  className="w-full h-full object-cover home-sm:rotate-0 rotate-[10deg]" alt="detail-1"/>
                            </div>
                            <ul className=" flex justify-center  self-start pt-[40px] service-detail:w-full ">
                                    <div className="flex flex-col flex-wrap gap-y-3 ">
                                        <div className="flex flex-wrap  gap-x-10 gap-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                            <li className="flex items-center"><GoDotFill className="text-[#00EBFF] mr-2" /> Illustration</li>
                                        </div>
                                        <div className="flex flex-wrap  gap-x-10 gap-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                            <li className=" flex items-center"><GoDotFill className="text-[#00EBFF] mr-2" /> Prototype</li>
                                        </div>
                                        <div className="flex flex-col list-r-calc:flex-row   justify-start  gap-x-8 list-r-calc:space-y-0 space-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                            <li className=" flex items-center"><GoDotFill className="text-[#00EBFF] mr-2" /> Test</li>
                                        </div>

                                    </div>
                                </ul>
                        </div>
                        <div className="flex flex-col ">
                            <div className="flex flex-col gap-y-5">
                                    <h1 className="font-syne font-[700] text-[42px] text-white">Visual Design</h1>
                                    <p className="font-400 font-dmsans text-[16px] text-[#8FA8BD] pb-[50px]">Enhance the first impression, encourages abd ensures that <br/> users can easily find the information they seek</p>
                            </div>
                            <div className="border-[2px] border-[#00EBFF] w-[50px]"/>
                        </div>
                    </div>

                    <div className="flex justify-evenly flex-wrap gap-y-[50px] py-[80px]">
                        <div className="w-[600px] flex flex-wrap  gap-x-2">
                            <div className="max-w-[304px] min-h-[400px] mx-auto">
                                <Image src={'/images/detail2.jpg'} width={1000} height={1000}  className="w-full h-full object-cover home-sm:rotate-0 rotate-[10deg]" alt="detail-1"/>
                            </div>
                            <ul className=" flex justify-center  self-start pt-[40px] service-detail:w-full ">
                                    <div className="flex flex-col flex-wrap gap-y-3 ">
                                        <div className="flex flex-wrap  gap-x-10 gap-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                            <li className="flex items-center"><GoDotFill className="text-[#FFD55B] mr-2" /> Usability</li>
                                        </div>
                                        <div className="flex flex-wrap  gap-x-10 gap-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                            <li className=" flex items-center"><GoDotFill className="text-[#FFD55B] mr-2" /> Efficiency</li>
                                        </div>
                                        <div className="flex flex-col list-r-calc:flex-row   justify-start  gap-x-8 list-r-calc:space-y-0 space-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                            <li className=" flex items-center"><GoDotFill className="text-[#FFD55B] mr-2" /> Interactivity</li>
                                        </div>

                                    </div>
                                </ul>
                        </div>
                        <div className="flex flex-col ">
                            <div className="flex flex-col gap-y-5">
                                    <h1 className="font-syne font-[700] text-[42px] text-white">Functional</h1>
                                    <p className="font-400 font-dmsans text-[16px] text-[#8FA8BD] pb-[50px]">A responsive design ensures that the site adpats seamlessly<br/> to desktops, tablets, and mobile devices, expanding its reach to a broader <br/> audience</p>
                            </div>
                            <div className="border-[2px] border-[#00EBFF] w-[50px]"/>
                        </div>
                    </div>

                    <div className="flex justify-evenly flex-wrap gap-y-[50px] py-[90px]">
                        <div className="w-[600px] flex flex-wrap  gap-x-2">
                            <div className="max-w-[334px] min-h-[400px] mx-auto">
                                <Image src={'/images/detail3.jpg'} width={1000} height={1000}  className="w-full h-full object-cover home-sm:rotate-0 rotate-[10deg]" alt="detail-1"/>
                            </div>
                            <ul className=" flex justify-center  self-start pt-[40px] service-detail:w-full ">
                                    <div className="flex flex-col flex-wrap gap-y-3 ">
                                        <div className="flex flex-wrap  gap-x-10 gap-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                            <li className="flex items-center"><GoDotFill className="text-[#00EBFF] mr-2" /> Reliability</li>
                                        </div>
                                        <div className="flex flex-wrap  gap-x-10 gap-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                            <li className=" flex items-center"><GoDotFill className="text-[#00EBFF] mr-2" /> Efficiency</li>
                                        </div>
                                        <div className="flex flex-col list-r-calc:flex-row   justify-start  gap-x-8 list-r-calc:space-y-0 space-y-3  font-dmsans font-[400] text-[20px] text-[#CFDDE8] ">
                                            <li className=" flex items-center"><GoDotFill className="text-[#00EBFF] mr-2" /> Interactivity</li>
                                        </div>

                                    </div>
                                </ul>
                        </div>
                        <div className="flex flex-col ">
                            <div className="flex flex-col gap-y-5">
                                    <h1 className="font-syne font-[700] text-[42px] text-white">Quality</h1>
                                    <p className="font-400 font-dmsans text-[16px] text-[#8FA8BD] pb-[50px]">Long-term maintenance and updates are essential for keeping <br/> the website aligned with evolving technology, security and user <br/> expectations.</p>
                            </div>
                            <div className="border-[2px] border-[#00EBFF] w-[50px]"/>
                        </div>
                    </div>
                
                0</div>
            </div>

            <BannerText />


        </>
    )
}

export default ServicesDetail;