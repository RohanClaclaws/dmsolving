'use client'
import { motion } from "framer-motion"
interface BeautyData {
    beautyData: props
}

interface props {
    image1: string,
    image2: string,
    image3: string,
    image4: string,
    image5: string,
    image6: string,
    image7: string,
    image8: string,
    headingTitle: string,
    description: string

}

const Beauty = ({ beautyData }: BeautyData) => {
    return (
        <>
            <div className="flex flex-col items-center gap-20 py-20 bg-red-40">
                {/* Row 1 */}
                <motion.div className=""
                    whileInView={{ x: [-200, 0], opacity: [0, 1] }}
                    transition={{
                        duration: 1, ease: 'easeInOut'
                    }}
                >
                    <img src={beautyData.image1} alt="beauty4" className="" />
                </motion.div>
                {/* Row2 */}
                <div className="flex">
                    <motion.div className="self-center"
                        whileInView={{ x: [-200, 0], y: [100, 0], opacity: [0, 1] }}
                        transition={{
                            duration: 1, ease: 'easeInOut'
                        }}
                    >
                        <img src={beautyData.image2} alt="beauty5" className="" />
                    </motion.div>
                    <motion.div
                        whileInView={{ x: [200, 0], y: [-100, 0], opacity: [0, 1] }}
                        transition={{
                            duration: 1, ease: 'easeInOut'
                        }}
                    >
                        <img src={beautyData.image3} alt="beauty6" />
                    </motion.div>
                </div>
                {/* Row3 */}
                <motion.div className=""
                    whileInView={{ x: [200, 0], opacity: [0, 1] }}
                    transition={{
                        duration: 1, ease: 'easeInOut'
                    }}
                >
                    <img src={beautyData.image4} alt="imag7" className="" />
                </motion.div>
                {/* Row4 */}
                <div className="flex gap-x-5 flex-wrap">
                    <div className="flex flex-col gap-y-6">
                        <motion.img src={beautyData.image5} alt="beauty8"
                            whileInView={{ x: [-200, 0],y:[150,0], opacity: [0, 1] }}
                            transition={{
                                duration: 1, ease: 'easeInOut'
                            }}
                        />
                        <motion.img src={beautyData.image7} alt="beauty9"
                            whileInView={{ x: [-200, 0],y:[150,0], opacity: [0, 1] }}
                            transition={{
                                duration: 1, ease: 'easeInOut'
                            }}
                        />
                    </div>
                    <div className="flex flex-col gap-y-[40px]">
                        <motion.img src={beautyData.image6} alt="beauty10"
                            whileInView={{ x: [200, 0], opacity: [0, 1] }}
                            transition={{
                                duration: 1, ease: 'easeInOut'
                            }}
                        />
                        <motion.img src={beautyData.image8} alt="beauty11"
                            whileInView={{ x: [200, 0], opacity: [0, 1] }}
                            transition={{
                                duration: 1, ease: 'easeInOut'
                            }}
                        />
                    </div>
                </div>
                {/* Row 5 */}
                <div className=" max-w-[1004px] min-h-[400px mx-auto  ">
                    <h1 className="font-syne font-[600] text-[21px] 2xs:text-[26px] text-[#ffffff] pb-[30px] pl-[10px]">{beautyData.headingTitle}</h1>
                    <p className="px-4 text-[#8fA8Bd] font-[400]  font-dmsans xs:text-[17px] sm:text-[20px] pb-[80px]">
                        {beautyData.description}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Beauty;