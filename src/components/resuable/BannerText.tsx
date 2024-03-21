'use client'
import { motion} from "framer-motion"

const BannerText = () => {
    const text = "Let's chat with".split(" ");
    const text2 = "DMSolving".split(" ");

    return (
        <div className="text-center py-[85px] bg-[#061b2D]">
            <h3 className=" font-syne text-[21px] mb-2 sm:text-[27px] text-[#ffffff]">
                Tell us about your project
            </h3>
            <motion.h1 className="font-syne font-[600] text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] text-[#fff]">
                {
                    text.map((el, i) => {

                        return <motion.span
                            whileInView={{

                                opacity: [0, 1]
                            }}
                            transition={{
                                duration: 1.1,
                                delay: i / 10,
                            }}
                            key={i}
                        >
                            {el}{" "}
                        </motion.span>
                    })
                }

                
            <span className="text-[#00EbFF]">
            {
                    text2.map((el, i) => {
                        return <motion.span
                            whileInView={{
                                opacity: [0, 1]
                            }}
                            transition={{
                                duration: 1.25,
                                delay: i / 1
                            }}
                            key={i}
                        >
                            {el}{" "}
                        </motion.span>
                    })
                }
            </span>

            </motion.h1>

        </div>
    )
}

export default BannerText;