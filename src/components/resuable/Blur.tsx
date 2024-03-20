import Image from "next/image";

interface Props {
  left?: number,
  right?: number,
  bottom?: number,
  top?: number
}

const Blur = ({ top, left, right, bottom }: Props) => {
  return <Image src="/images/home/blur.png" width={830} height={1009} alt="blur" className="w-[830px] h-[1009px] absolute right-[-500px] animate-pulse" 
  style={{ top, left, right, bottom }} />
}

export default Blur;