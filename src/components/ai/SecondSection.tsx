import Image from "next/image"

const SecondSection = () => {
    return (
        <>
            <section className="bg-black ">
                <div className="bg-red-00 py-[20px] mt-[100px flex items-center justify-evenly">
                    <div className=" px-2 py-2">
                        <Image src={'/images/SVG-home.png'} alt="" width={1000} height={10000} className="w-[140px] h-auto" />
                    </div>
                    <div className=" px-2 py-2">
                        <Image src={'/images/SVG-home2.png'} alt="" width={1000} height={10000} className="w-[140px] h-auto" />
                    </div>
                    <div className=" px-2 py-2">
                        <Image src={'/images/SVG-home3.png'} alt="" width={1000} height={10000} className="w-[140px] h-auto" />
                    </div>
                    <div className=" px-2 py-2">
                        <Image src={'/images/SVG-home4.png'} alt="" width={1000} height={10000} className="w-[140px] h-auto" />
                    </div>
                    <div className=" px-2 py-2">
                        <Image src={'/images/SVG-home5.png'} alt="" width={1000} height={10000} className="w-[140px] h-auto" />
                    </div>

                </div>

                <div id="main-section-div" className="min-h-[100vh] layout-sm:w-10/1 px-0 mx-auto py-[80px] pb-[130px] overflow-x-hidden overflow-y-hidden ">

                    <div className=" text-white gap-y-4 w-fit mx-auto ">
                        <div className="text-center font-syne font-[400]" >
                            <h1 className=" pl-2 sm:text-[41px] text-[27px] font-syne ">Build a Scalable Lead</h1>
                            <h1 className="text-[27px] sm:text-[41px]">Generation Framework</h1>
                        </div>
                        <p className="mt-10 sm:mt-[50px] text-[16px] sm:text-[21px] font-[200] font-syne  sm:text-base text-center">
                            We Known how to connect you with high-quality AI leads.
                        </p>
                    </div>

                    <section className="mt-[140px] flex flex-col gap-y-[140px]  layout px-0 ">
                        <div className=" font-syne xl:pl-[100px] text-white py-[50px] ">
                            <h1 className="text-[35px] sm:text-[42px] font-[400]  bg-gradient-to-r from-[#FACC69] from-[-5%] to-[50%]  to-[#FA75F8]  bg-clip-text text-transparent">
                                Reach consumers
                                <br />
                                with relevance.
                            </h1>
                            <p className="mt-6 text-[19px] sm:text-[21px] font-[400] max-w-[528px]">
                                dmsolving designs frictionless, data-driven conversion journeys, guiding users through the funnel and retaining high-quality leads across all channels.
                            </p>
                        </div>

                        <div className="  font-syne  text-white bg-radia py-[50px flex justify-between bg-red-40 relative overflow" >
                            <div className="xl:pl-[100px] ">
                                <h1 className="text-[35px] sm:text-[42px] font-[400] bg-gradient-to-r from-[#FACC69]  from-[-25%] to-[30%]  to-[#FA75F8]  bg-clip-text text-transparent">
                                    Acquire Users
                                    <br />
                                    for Less.
                                </h1>
                                <p className="mt-6 text-[19px] sm:text-[21px] font-[400] max-w-[528px] py-[50px]">
                                    Automate common phrases, emails, and
                                    attachments with your keyboard. You can even
                                    include hyperlinks, add people to CC, or BCC
                                    internal systems.
                                </p>
                            </div>
                            <div className="h-[1230px] min-w-[1845px]  bg-radial bg-opacity-5 absolute right-[-800px] top-[-400px]">
                            </div>
                        </div>

                        

                        <div className="  font-syne  text-white bg-radia py-[50px flex justify-between bg-red-40 relative overflow" >
                            <div className="xl:pl-[100px] ">
                                <h1 className="text-[35px] sm:text-[42px] font-[400] bg-gradient-to-r from-[#FA75F8] from-[-5%] to-[50%]  to-[#5CC3FA]  bg-clip-text text-transparent">
                                <span className=" bg-gradient-to-r from-[#FA75F8] from-[1%] to-[95%]  to-[#9E6EE6]  bg-clip-text text-transparent">Follw up</span> on
                                    <br />
                                    time,every time
                                </h1>
                                <p className="mt-6 text-[19px] sm:text-[21px] font-[400] max-w-[528px] py-[50px]">
                                We execute high-impact, cost-effective marketing strategies using AI and automation to drive lead generation and customer retention, achieving rapid growth for top AI startups and enterprises.
                                </p>
                            </div>
                            <div className="h-[1230px] min-w-[1845px]  bg-radial3 bg-opacity-5 absolute left-[-1130px] top-[-400px]">
                            </div>
                        </div>


                        <div className="  font-syne  text-white bg-radia py-[50px flex justify-between bg-red-40 relative overflow" >
                            <div className="xl:pl-[100px] ">
                                <h1 className="text-[35px] sm:text-[42px] font-[400] bg-gradient-to-r from-[#FA75F8] from-[-5%] to-[50%]  to-[#5CC3FA]  bg-clip-text text-transparent">
                                    Acquire Users
                                    <br />
                                    for Less.
                                </h1>
                                <p className="mt-6 text-[19px] sm:text-[21px] font-[400] max-w-[528px] py-[50px]">
                                    Each platform serves a unique purpose and so do our channel-specific strategies.
                                </p>
                            </div>
                            <div className="h-[1230px] min-w-[1845px]  bg-radial2 bg-opacity-5 absolute right-[-800px] top-[-400px]">
                            </div>
                        </div>

                    </section>
                </div>

            </section>
        </>
    )
}

export default SecondSection