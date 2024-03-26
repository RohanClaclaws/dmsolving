'use client'
import Image from "next/image";
import { motion } from "framer-motion";

const TasteEat = ({ image1, image2, image3, image4, deliverableContent }: {
  image1: string, image2: string, image3: string, image4: string, deliverableContent: string
}) => {
  return (
    <>
      <div className="flex items-center flex-col bg-[#2B2D35] gap-20 py-20 overflow-hidden">
        <motion.span className="text-white text-center text-[65px]" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Web Design</motion.span>
        <motion.span initial={{ opacity: 0, x: -300 }} whileInView={{ opacity: 1, x: 0 }} transition={{ease: 'easeIn', delay: .25}}>
          <Image src={image1} width={1200} height={752} alt="Restaurant" className="object-cover w-[1200px] h-[752px]" />
        </motion.span>
        <motion.span initial={{ opacity: 0, x: 300 }} whileInView={{ opacity: 1, x: 0 }} transition={{ease: 'easeIn', delay: .25}}>
          <Image src={image2} width={1200} height={752} alt="Restaurant" className="object-cover w-[1200px] h-[752px]" />
        </motion.span>
        <motion.span initial={{ opacity: 0, x: -300 }} whileInView={{ opacity: 1, x: 0 }} transition={{ease: 'easeIn', delay: .25}}>
          <Image src={image3} width={1200} height={752} alt="Restaurant" className="object-cover w-[1200px] h-[752px]" />
        </motion.span>
      </div>
      <div className="my-20">
        <Image src={image4} width={1920} height={1276} alt="rest" className="w-[1920px] h-[1276px] object-cover" />
      </div>
      <div className="flex flex-col items-center py-20">
        <div className="max-w-[870px] w-full flex flex-col gap-10">
          <motion.span className="text-white text-[32px]" initial={{opacity: 0}} whileInView={{opacity: 1}}>Project Deliverables</motion.span>
          <motion.p className="text-[20px] text-[#8FA8BD]" initial={{opacity: 0}} whileInView={{opacity: 1}}>
            {deliverableContent}
          </motion.p>
        </div>
      </div>
    </>
  )
}

export default TasteEat;