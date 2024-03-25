import Image from "next/image"
import Perks from "./Perks"
import Link from "next/link"

interface Props {
  heading: string,
  price: number,
  attributes: {
    isIncluded: boolean,
    name: string
  }[],
  uiUX: {
    isIncluded: boolean,
    name: string
  }[],
  frontDev: {
    isIncluded: boolean,
    name: string
  }[],
  backDev: {
    isIncluded: boolean,
    name: string
  }[]
}

const PricingCardCustom = ({ heading, price, attributes, uiUX, frontDev, backDev }: Props) => {
  return (
    <div className="max-w-[753px] md:h-[773px] w-full rounded-[10px] border-[2px] border-[#FFFFFF99] flex md:flex-row flex-col">
      {/** Left side */}
      <div className="flex flex-col justify-evenly md:gap-0 gap-10 md:py-0 py-10">
        <div className="flex flex-col text-center">
          <span className="font-syne font-[500] sm:text-[30px] text-[20px] text-white">{heading}</span>
          <span className="font-[700] sm:text-[50px] text-[30px] text-white">
            ${price}+<span className="font-[500] sm:text-[30px] text-[20px]">/Project</span>
          </span>
          <div className="flex justify-center">
            <hr className="border-[1px] border-[#FFFFFF99] w-[286px]" />
          </div>
        </div>
        <div className="flex flex-col gap-5 sm:px-20 px-[16px]">
          {
            attributes.map((e, idx) => {
              return (
                <div key={idx} className="flex gap-3 items-center justify-start">
                  <Image src={e.isIncluded ? "/images/pricing/star_blue.png" : "/images/pricing/star_white.png"} width={21.83} height={21.83} alt="star" className="w-[21.83px] h-[21.83px]" />
                  <span className="font-[400] sm:text-[20px] text-[15px] text-white">{e.name}</span>
                </div>
              )
            })
          }
        </div>
        <div className="flex justify-center">
          <Link className="rounded-[40px] px-[30px] py-[12px] bg-white flex gap-3 items-center hover:scale-[1.05] cursor-pointer hover:bg-black hover:text-white text-black border-[1px] border-white" href="/contact-us">
            <span className="font-[700] text-[14px]">Get Started</span>
            <Image src="/images/pricing/starling.png" width={35.13} height={35.13} alt="starling" className="w-[35.13px] h-[35.13px]" />
          </Link>
        </div>
      </div>
      {/** Left side END */}
      {/** Right side */}
      <div className="flex flex-col justify-evenly md:gap-0 gap-10 md:py-0 py-10">
        <Perks img="/images/pricing/uiux.png" title="UI/UX" attributes={uiUX} />
        <Perks img="/images/pricing/frontend.png" title="Frontend Dev" attributes={frontDev} />
        <Perks img="/images/pricing/backend.png" title="Backend Dev" attributes={backDev} />
      </div>
      {/** Right side END */}
    </div>
  )
}

export default PricingCardCustom;