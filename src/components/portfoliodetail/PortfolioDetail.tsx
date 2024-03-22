import Banner from "../resuable/Banner";
import Image from "next/image";
import BannerText from "../resuable/BannerText";

interface HeadObj {
    title: string,
    description: string
}

interface props {
    image1: string,
    image2: string,
    image3: string,
    heading1: HeadObj,
    heading2: HeadObj,
    heading3: HeadObj,
    heading4: HeadObj,
    maindescription: string
}

interface DeliveryObj{
    title:string
    para1:string,
    para2:string
}

interface Deliverables{
 section1:DeliveryObj,
 section2:DeliveryObj,
 section3:DeliveryObj
}

interface props2 {
    detailObject: props,
    delivery:Deliverables,
    children?: React.ReactNode
}

const PortfolioDetail = ({ detailObject,delivery, children }: props2) => {
    return (
        <>
            <Banner subheading="Home" heading="Portfolio" />

            <div className="bg-black">
                <div className="layout">

                    <div className="flex justify-evenly gap-y-10 flex-wrap py-[60px]">
                        <div className="flex flex-col hover:bg-[rgba(255,255,255,0.2)]  duration-500 rounded-sm px-[30px] sm:px-10 py-[60px] sm:py-10 gap-y-3 cursor-pointer ">
                            <h1 className="font-syne font-[600] text-[21px] 2xs:text-[26px] text-[#ffffff]">{delivery.section1.title}</h1>
                            <div className="flex flex-col font-[400] font-dmsans text-[#8FA8BD]">
                                <p className="">{delivery.section1.para1}</p>
                                <p className="">{delivery.section1.para2}</p>
                            </div>
                        </div>
                        <div className="flex flex-col  hover:bg-[rgba(255,255,255,0.2)] duration-500  rounded-sm px-[30px] sm:px-10 py-[60px] sm:py-10 gap-y-3 cursor-pointer ">
                            <h1 className="font-syne font-[600] text-[21px] 2xs:text-[26px] text-[#ffffff]">{delivery.section2.title}</h1>
                            <div className="flex flex-col font-[400] font-dmsans text-[#8FA8BD]">
                                <p className="">{delivery.section2.para1}</p>
                                <p className="">{delivery.section2.para2}</p>
                            </div>
                        </div>
                        <div className="flex flex-col  hover:bg-[rgba(255,255,255,0.2)] duration-500  rounded-sm px-[30px] sm:px-10 py-[60px] sm:py-10 gap-y-3 cursor-pointer">
                            <h1 className="font-syne font-[600] text-[21px] 2xs:text-[26px] text-[#ffffff]">{delivery.section3.title}</h1>
                            <div className="flex flex-col font-[400] font-dmsans text-[#8FA8BD]">
                                <p className="">{delivery.section3.para1}</p>
                                <p className="">{delivery.section3.para2}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-red pb-[90px]">
                        <div className=" max-w-[1004px] min-h-[400px mx-auto  ">
                            <img src={detailObject.image1} className="h-[400px]   sm:w-full sm:h-full  object-cover object-left pb-[62px]" alt="image-1" />

                            <p className="px-3 text-[#8fA8Bd] font-[400]  font-dmsans xs:text-[18px] sm:text-[20px]">
                                {detailObject.maindescription}
                            </p>
                        </div>
                    </div>

                    <div className="bg-red pb-[90px]">
                        <div className=" max-w-[1004px] min-h-[400px mx-auto  ">
                            <h1 className="font-syne font-[600] text-[21px] 2xs:text-[26px] text-[#ffffff] pb-[30px] pl-[10px]">{detailObject.heading1.title}</h1>
                            <p className="px-4 text-[#8fA8Bd] font-[400]  font-dmsans xs:text-[17px] sm:text-[20px] pb-[80px]">
                                {detailObject.heading1.description}
                            </p>

                            <img src={detailObject.image2} className="h-[400px]   sm:w-full sm:h-full  object-cover object-left pb-[82px]" alt="image-2" />
                            <h1 className="font-syne font-[600] text-[21px] 2xs:text-[26px] text-[#ffffff] pb-[30px] pl-[10px]">{detailObject.heading2.title}</h1>
                            <p className="px-4 text-[#8fA8Bd] font-[400]  font-dmsans xs:text-[17px] sm:text-[20px] pb-[70px]">
                                {
                                    detailObject.heading2.description
                                }
                            </p>
                            <h1 className="font-syne font-[600] text-[21px] 2xs:text-[26px] text-[#ffffff] pb-[30px] pl-[10px]">{detailObject.heading3.title}</h1>
                            <p className="px-4 text-[#8fA8Bd] font-[400]  font-dmsans xs:text-[17px] sm:text-[20px] pb-[80px]">
                                {
                                    detailObject.heading3.description
                                }
                            </p>
                        </div>
                    </div>

                    <div className="bg-red pb-[90px]">
                        <div className=" max-w-[1004px] min-h-[400px mx-auto  ">
                            <img src={detailObject.image3} className="h-[400px]   sm:w-full sm:h-full  object-cover object-left pb-[82px]" alt="image3" />
                            <h1 className="font-syne font-[600] text-[21px] 2xs:text-[26px] text-[#ffffff] pb-[30px] pl-[10px]">{detailObject.heading4.title}</h1>
                            <p className="px-3 text-[#8fA8Bd] font-[400]  font-dmsans xs:text-[17px] sm:text-[20px]">
                                {detailObject.heading4.description}
                            </p>
                        </div>
                    </div>
                    {children}
                    <div className=" pt-[30px] pb-[80px]">
                        <div className="flex gap-x-4 gap-y-4 justify-center flex-wrap">
                            <div className="flex justify-center items-center w-[165px] aspect-square rounded-full  border-[1px] border-[#0C464E] ">
                                <h1 className="font-[600] font-syne text-[18px] text-[#CFDDE8]">
                                    ⬅ Previos
                                </h1>
                            </div>
                            <div className="flex justify-center items-center w-[165px] aspect-square rounded-full  border-[1px] border-[#0C464E] ">
                                <h1 className="font-[600] font-syne text-[18px] text-[#CFDDE8]">
                                    Next ➡
                                </h1>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            

            <BannerText />




        </>
    )
}

export default PortfolioDetail;