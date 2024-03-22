"use client"
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Hoverable = ({ title, path }: { title: string, path: string }) => {
  const router = useRouter();

  return (
    <motion.div className="absolute w-full h-full bg-[#00000080] px-[16px] py-[20px] top-0" initial={{opacity: 0}} whileInView={{opacity: 1}} 
    onClick={() => router.push(path)}>
      <div className="flex flex-col text-white">
        <span className="font-[500] text-[24px] leading-[43.2px]">{title}</span>
        <span className="font-[500] text-[14px] leading-[43.2px]">UI/UX Design, Web Design</span>
      </div>
    </motion.div>
  )
}

export default Hoverable;