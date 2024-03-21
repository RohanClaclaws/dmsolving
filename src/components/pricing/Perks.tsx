import Image from "next/image";

interface Props {
  img: string,
  title: string,
  attributes: {
    isIncluded?: boolean,
    name: string
  }[]
}

const Perks = ({ img, title, attributes }: Props) => {
  return (
    <div className="flex gap-3 justify-center md:justify-start">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <Image src={img} width={48.94} height={48.94} alt="Logo" className="w-[48.94px] h-[48.94px]" />
          <span className="font-syne font-[700] sm:text-[20px] text-[18px] text-white">{title}</span>
        </div>
        {
          attributes.map((e, idx) => {
            return (
              <div key={idx} className="flex gap-3">
                <div className="w-[48.94px]"></div>
                <Image src={e.isIncluded ? "/images/pricing/star_blue.png" : "/images/pricing/star_white.png"} width={21.83} height={21.83} alt="star" className="w-[21.83px] h-[21.83px]" />
                <span className="text-white font-[400] sm:text-[18px] text-[15px]">{e.name}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Perks;