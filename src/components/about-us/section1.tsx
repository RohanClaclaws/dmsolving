'use client'
import {motion } from "framer-motion"
import Image from 'next/image'

const Section1 = () => {
    return (
        <section className="layout pt-10">
            <div className="lg:w-6/6 ">

                <div className="flex flex-col justify-center lg:flex-row mt-10">
                <motion.div
              whileInView={{x:[-200,0],opacity:[0,1],y:[100,0]}}
              transition={{
                duration:0.85,
              }}
            >
                    {/* <div className="sm:mr-12 sm:block hidden">
                        <Image
                            src="/about/about-back.png"
                            width={500}
                            height={500}
                            alt="Picture of the about back"
                            className=' max-w-[500px]  min-w-[500px] '
                        />

                        <Image
                            src="/about/about-front.png"
                            width={500}
                            height={500}
                            alt="Picture of the about back"
                            className=' max-w-[300px]  min-w-[300px] -mt-[260px] -ml-[40px] mb-[80px]'
                        />
                    </div> */}
                    <div className="sm:mr-12 sm:block hidden">
                        <Image
                            src="/about/about-section1.png"
                            width={500}
                            height={500}
                            alt="Picture of the about back"
                            className=' max-w-[500px]  min-w-[500px] '
                        />
                        </div>
                    </motion.div>

                    <motion.div
              whileInView={{x:[200,0],opacity:[0,1],y:[100,0]}}
              transition={{
                duration:0.85,
              }}
            >
                    <div className="flex flex-col max-w-[646px] w-full">
                        <h2 className="font-dmsans text-white text-2xl items-start mb-16">We’re 
                        
                         <span className='font-dmsans text-[#FFD526] text-2xl'> happy </span> 
                        
                         that you’re interested to learn more about us</h2>


                        <p className="font-syne text-white mb-10">
                        At DMSolving, our mission is to bring your business success through creative and innovative solutions.
                        </p>

                        <p className="font-syne text-white mb-10">
                        We understand that in today’s fast-paced digital landscape,
                         creativity is the driving force behind effective marketing strategies,
                          web design, and app development. Our dedicated team of experts are committed
                           to crafting solutions that not only captivate and engage your audience, 
                           but also drive tangible profits to your company. 
                        </p>
                        <div className="w-20 h-0.5 bg-[#FFFFFF] mt-2 mb-4"></div>
                    </div>

                   </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Section1;