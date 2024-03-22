import Image from "next/image"

interface Props {
  heading: string,
  price: number,
  attributes: {
    isIncluded?: boolean,
    name: string
  }[]
}

const PricingCard = ({ heading, price, attributes }: Props) => {
  return (
    <div className="border-[2px] rounded-[10px] border-[#FFFFFF99] pricing-lg:max-w-[497px] max-w-[753px] h-[825px] w-full px-[50px] pt-[43px] pb-[99px]">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="text-center flex flex-col gap-3">
            <span className="font-syne font-[500] sm:text-[30px] text-[20px] text-[#FFFFFFCC]">{heading}</span>
            <span className="font-[700] sm:text-[50px] text-[30px] text-white">
              ${price}<span className="font-[500] sm:text-[30px] text-[20px]">/Project</span>
            </span>
          </div>
          <hr className="border-b-[1px] border-[#CECECE] my-10" />
          <div className="flex flex-col gap-5">
            {
              attributes.map((e, idx) => {
                return (
                  <div key={idx} className="flex gap-4 items-center">
                    <Image src={e.isIncluded ? "/images/pricing/star_blue.png" : "/images/pricing/star_white.png"} width={21.83} height={21.83} alt="star" className="w-[21.83px] h-[21.83px]" />
                    <span className="font-[400] sm:text-[20px] text-[15px] text-white">{e.name}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-end items-center">
          <div className="rounded-[40px] px-[30px] py-[12px] bg-white flex gap-3 items-center hover:scale-[1.05] cursor-pointer">
            <span className="font-[700] text-[14px] text-black">Get Started</span>
            <Image src="/images/pricing/starling.png" width={35.13} height={35.13} alt="starling" className="w-[35.13px] h-[35.13px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingCard;