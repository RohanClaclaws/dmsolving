import Banner from "../resuable/Banner";
import Image from "next/image";
import BannerText from "../resuable/BannerText";

interface HeadObj{
    title:string,
    description:string
}

interface props{
   image1:string,
   image2:string,
   image3:string,
   heading1:HeadObj,
   heading2:HeadObj,
   heading3:HeadObj,
   heading4:HeadObj,
   maindescription:string
}

interface props2{
    detailObject:props
 }

const PortfolioDetail = ({detailObject}:props2) => {
    return (
        <>
            <Banner subheading="Home" heading="Portfolio"/>

            <div className="bg-black">
                <div className="layout">

                    <div className="flex justify-evenly gap-y-10 flex-wrap py-[60px]">
                        <div className="flex flex-col hover:bg-[rgba(255,255,255,0.2)]  duration-500 rounded-sm px-[30px] sm:px-10 py-[60px] sm:py-10 gap-y-3 cursor-pointer ">
                            <h1 className="font-syne font-[600] text-[21px] 2xs:text-[26px] text-[#ffffff]">About Project</h1>
                            <div className="flex flex-col font-[400] font-dmsans text-[#8FA8BD]">
                                <p className="">4 Weeks / Dec,2022 / Website</p>
                                <p className="">Development</p>
                            </div>
                        </div>
                        <div className="flex flex-col  hover:bg-[rgba(255,255,255,0.2)] duration-500  rounded-sm px-[30px] sm:px-10 py-[60px] sm:py-10 gap-y-3 cursor-pointer ">
                            <h1 className="font-syne font-[600] text-[21px] 2xs:text-[26px] text-[#ffffff]">Deliverables</h1>
                            <div className="flex flex-col font-[400] font-dmsans text-[#8FA8BD]">
                                <p className="">Wireframe, Design Systems, Dark &</p>
                                <p className="">Light mode UI design, Coding</p>
                            </div>
                        </div>
                        <div className="flex flex-col  hover:bg-[rgba(255,255,255,0.2)] duration-500  rounded-sm px-[30px] sm:px-10 py-[60px] sm:py-10 gap-y-3 cursor-pointer">
                            <h1 className="font-syne font-[600] text-[21px] 2xs:text-[26px] text-[#ffffff]">Our Role</h1>
                            <div className="flex flex-col font-[400] font-dmsans text-[#8FA8BD]">
                                <p className="">User experience user interface</p>
                                <p className="">Icongraphy, continued functionality</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-red pb-[90px]">
                        <div className=" max-w-[1004px] min-h-[400px mx-auto  ">
                            <img src={`/images/Placeholder1.png`} className="h-[400px]   sm:w-full sm:h-full  object-cover object-left pb-[62px]" alt="image-1" />

                            <p className="px-3 text-[#8fA8Bd] font-[400]  font-dmsans xs:text-[18px] sm:text-[20px]">
                                This portfolio encapsulates a website we crafted for a VR game project. Our paramount objective was to immerse users in the game&apos;s universe and highlight its distinctive features. Through a blend of captivating design elements and user-friendly navigation, our aim was to captivate users and draw them into exploring the game&apos;s allure.
                            </p>
                        </div>
                    </div>

                    <div className="bg-red pb-[90px]">
                        <div className=" max-w-[1004px] min-h-[400px mx-auto  ">
                            <h1 className="font-syne font-[600] text-[21px] 2xs:text-[26px] text-[#ffffff] pb-[30px] pl-[10px]">Structuring the site</h1>
                            <p className="px-4 text-[#8fA8Bd] font-[400]  font-dmsans xs:text-[17px] sm:text-[20px] pb-[80px]">
                                The website&apos;s architecture was meticulously designed to ensure seamless navigation and optimal user engagement. The homepage served as a gateway, featuring prominent displays of the game&apos;s key features and providing an overview of its immersive world. Sections such as &apos;About Us&apos; delved into the background story of the game&apos;s development team, while &apos;Game Overview&apos; categorically listed various aspects of gameplay, mechanics, and storyline. Additionally, the &apos;Media Center&apos; showcased an array of screenshots, videos, and other media assets to offer users a comprehensive glimpse into the game&apos;s visual appeal. Finally, the &apos;Contact Us&apos; section provided users with convenient channels to reach out and provide feedback.
                            </p>

                            <img src={`/images/Placeholder3.png`} className="h-[400px]   sm:w-full sm:h-full  object-cover object-left pb-[82px]" alt="image-2" />
                            <h1 className="font-syne font-[600] text-[21px] 2xs:text-[26px] text-[#ffffff] pb-[30px] pl-[10px]">Design System</h1>
                            <p className="px-4 text-[#8fA8Bd] font-[400]  font-dmsans xs:text-[17px] sm:text-[20px] pb-[70px]">
                                Our design system was meticulously crafted to harmonize with the game&apos;s aesthetics and enhance the overall user experience. Colors were chosen from the game&apos;s thematic palette to maintain visual consistency and evoke the game&apos;s ambiance. Fonts were carefully selected for clarity and legibility, ensuring seamless readability across various devices. Layouts were kept clean and intuitive, facilitating effortless navigation and enabling users to find information with ease.
                            </p>
                            <h1 className="font-syne font-[600] text-[21px] 2xs:text-[26px] text-[#ffffff] pb-[30px] pl-[10px]">Iconography</h1>
                            <p className="px-4 text-[#8fA8Bd] font-[400]  font-dmsans xs:text-[17px] sm:text-[20px] pb-[80px]">
                                Iconography within the website was meticulously curated to align seamlessly with the game&apos;s visual identity. Each icon was chosen with precision to represent different functionalities and features within the VR game. From navigation elements to interactive buttons, every icon was designed to be intuitive and easily recognizable, enhancing user experience and facilitating smooth interaction with the website.
                            </p>
                            {/* sidis */}
                        </div>
                    </div>

                    <div className="bg-red pb-[90px]">
                        <div className=" max-w-[1004px] min-h-[400px mx-auto  ">
                            <img src={`/images/Placeholder5.png`} className="h-[400px]   sm:w-full sm:h-full  object-cover object-left pb-[82px]" alt="image3" />
                            <h1 className="font-syne font-[600] text-[21px] 2xs:text-[26px] text-[#ffffff] pb-[30px] pl-[10px]">UI components</h1>
                            <p className="px-3 text-[#8fA8Bd] font-[400]  font-dmsans xs:text-[17px] sm:text-[20px]">
                                UI components formed the backbone of the website&apos;s user interface, providing users with intuitive tools to navigate and interact with the content. From sleek navigation menus to interactive buttons and forms, each component was meticulously designed to prioritize functionality without sacrificing aesthetics. The UI elements were crafted to complement the overall design language of the website and ensure a seamless and engaging user experience across all devices.
                            </p>
                        </div>
                    </div>

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