'use client'
import Link from "next/link";
import { motion } from "framer-motion";

const PageNotFound = () => {

    const svgVariant = {
        hidden: {
            pathLength: 0,
        },
        visible: {
            pathLength: 1,
        }
    }


    return <>
        <div className="min-h-[90vh] bg-black flex justify-center items-center">
            <div className="bg-red-40 text-center">
                <div className="text-white bg-red-40 px-5 py-5 text-center flex justify-center">
                    <motion.svg
                        className={' text-center'}
                        style={{ width: "100%", height: "100%" }}
                        viewBox="-40 -30 680 280"
                    >
                        <motion.path
                            initial="hidden"
                            animate="visible"
                            variants={svgVariant}
                            transition={{
                                duration: 2,
                                ease: "circInOut",
                                repeat: Infinity,
                                repeatType: "mirror",
                                repeatDelay: 0.5
                            }}
                            stroke={'#00EBFF'}
                            strokeWidth={2}
                            strokeDasharray="0 1"
                            fill="none"
                            d="M103.718 213.64V174.64H0.21836V144.04L98.6184 3.63963H142.118V141.34H169.718V174.64H142.118V213.64H103.718ZM41.3184 141.34H106.118V45.9396L41.3184 141.34ZM286.006 217.24C266.606 217.24 250.006 212.74 236.206 203.74C222.406 194.54 211.706 181.84 204.106 165.64C196.706 149.24 193.006 130.24 193.006 108.64C193.006 87.2396 196.706 68.3396 204.106 51.9396C211.706 35.5396 222.406 22.8396 236.206 13.8396C250.006 4.63965 266.606 0.0396447 286.006 0.0396447C305.406 0.0396447 322.006 4.63965 335.806 13.8396C349.606 22.8396 360.206 35.5396 367.606 51.9396C375.206 68.3396 379.006 87.2396 379.006 108.64C379.006 130.24 375.206 149.24 367.606 165.64C360.206 181.84 349.606 194.54 335.806 203.74C322.006 212.74 305.406 217.24 286.006 217.24ZM286.006 182.74C301.806 182.74 314.706 176.14 324.706 162.94C334.706 149.74 339.706 131.64 339.706 108.64C339.706 85.6396 334.706 67.5396 324.706 54.3396C314.706 41.1396 301.806 34.5396 286.006 34.5396C270.006 34.5396 257.006 41.1396 247.006 54.3396C237.206 67.5396 232.306 85.6396 232.306 108.64C232.306 131.64 237.206 149.74 247.006 162.94C257.006 176.14 270.006 182.74 286.006 182.74ZM508.894 213.64V174.64H405.394V144.04L503.794 3.63963H547.294V141.34H574.894V174.64H547.294V213.64H508.894ZM446.494 141.34H511.294V45.9396L446.494 141.34Z"
                        />
                    </motion.svg>

                </div>
                <div className="flex flex-col gap-y-5 px-[25px] py-7">
                    <h1 className="text-[#CfDDE8] font-syne font-[700] text-[21px] 2xs:text-[24px] xs:text-[32px] md:text-[42px]">Sorry ! The page isn{"'"}t found here</h1>
                    <p className="max-w-[768px] font-dmsans font-[400] text-[14px] xs:text-[16px] text-[#8DA8BD]">
                        Our error is a HTTP status code indicating that the requested resource could not be found on the server. It is commonly displayed as a webpage with the message. This can occur when a user attempts to access a URL that no longer exists or has been moved, or when a URL is typed incorrectly.
                    </p>
                    <Link href={'/'}>
                        <button className="text-[#FFD55B] cursor-pointer px-2 py-3">Back to Home ↗</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
}

export default PageNotFound;