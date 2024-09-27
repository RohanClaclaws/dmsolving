import Image from "next/image"

const Hero = () => {
    return (
        <div className="p-md:h-screen h-[1500px]">

            <div className="pt-[200px] grid grid-cols-1 p-md:grid-cols-2 gap-4 layout  justify-items-center justify-self-center ">
                <div className="grid grid-cols-1 gap-6">
                    <div className="flex flex-col">
                        <text className="font-normal text-[48px]  text-white">The Leading AI</text>
                        <text className="font-normal text-[48px]  text-white">Marketing Agency for</text>
                        <text className="font-normal text-[48px]  text-white">Startups and</text>
                        <text className="font-normal text-[48px]  text-white">Enterprises</text>
                    </div>
                    <div className="grid grid-cols-1">
                        <text className="font-normal text-[24px] text-white">Rapidly grow users for AI subscriptions with  </text>
                        <text className="font-normal text-[24px] text-white"> high-velocity, full-funnel experimentation</text>
                        <text className="font-normal text-[24px] text-white">tailored for B2B and B2C solutions.</text>
                    </div>
                    <div>
                        <button className="font-dmsans text-center font-[400] text-white py-3 px-5 w-fit mt-4 rounded-lg 
                    bg-gradient-to-r from-[rgba(158,110,229,1)] to-[rgba(250,117,248,1)] hover:from-[rgba(250,117,248,1)] hover:to-[rgba(158,110,229,1)]" >
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="realtive ml-[-300px]">
                    <div className="flex flex-col gap-y-4 absolute ml-[-100px] z-10">
                        <div className="max-w-sm p-6  rounded-lg bg-gradient-to-r from-[#3c4953] to-[#103949]">
                          
                            <h5 className="mb-0  font-semibold tracking-tight text-white dark:text-white text-[48px]">
                                95%
                            </h5>
                       
                            <p className="mb-0 font-normal text-white dark:text-gray-400 text-[24px]">
                                Increase Active Users
                            </p>
                        </div>

                        <div className="max-w-sm p-6  rounded-lg bg-gradient-to-r from-[#3c4953] to-[#103949]">
                         
                            <h5 className="mb-0  font-semibold tracking-tight text-white dark:text-white text-[48px]">
                                93%
                            </h5>
                          
                            <p className="mb-0 font-normal text-white dark:text-gray-400 text-[24px]">
                               NPS
                            </p>
                        </div>

                        <div className="max-w-sm p-6  rounded-lg bg-gradient-to-r from-[#3c4953] to-[#103949]">
                          
                            <h5 className="mb-0  font-semibold tracking-tight text-white dark:text-white text-[48px]">
                                4+ hours
                            </h5>
                           
                            <p className="mb-0 font-normal text-white dark:text-gray-400 text-[24px]">
                                Saved per week
                            </p>
                        </div>



                    </div>
                    <div className="absolute mt-[40px]">
 <Image src="/images/ai/hero-bg.png" width={416} height={520} alt="Picture of the hero section" />
                    </div>
                   
                </div>
            </div>

        </div>
    )
}

export default Hero