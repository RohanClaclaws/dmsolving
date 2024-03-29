import Image from "next/image";
import Link from "next/link";

interface PortfolioCardProps {
  img: string,
  title: string,
  description: string,
  award_winning?: boolean
  link: string,
  comingSoon?: boolean
}

const PortfolioCard = ({ img, title, description, award_winning, link, comingSoon }: PortfolioCardProps) => {
  return (
    <div className="flex flex-col max-w-[407.98px] w-full md:gap-8 relative gap-3">
      <Image src={img} width={407.98} height={450} alt={title} className="w-[407.98px] h-[450px] object-cover" />
      <div className="flex flex-col gap-2">
        <div className="flex gap-5">
          <span className="text-[#CFDDE8] font-syne font-[600] text-[26px] leading-[31.2px]">{title}</span>
          {
            comingSoon &&
            (
              <div className="flex items-center bg-[#191919] py-2 px-3 rounded-2xl">
                <span className="text-[16px] text-white">coming soon</span>
              </div>
            )
          }
        </div>
        <span className="text-[#8FA8BD] text-[16px] font-[400] font-dmsans leading-[25.6px]">{description}</span>
      </div>
      {
        award_winning &&
        (
          <Link className="absolute left-0 right-0 max-w-[368px] max-h-[410px] w-full h-full bg-[#00EBFF66] ml-auto mr-auto top-5 p-5 flex items-end justify-center"
            href={link}>
            <div className="flex justify-between items-center">
              {/* <span className="max-w-[258px] w-full text-[#CFDDE8] font-[700] text-[26px] leading-[31.2px] font-syne underline">
                Award Winning Project
              </span> */}
              <Link href={link}>
                <Image src="/images/portfolio/BTN.png" width={50} height={50} alt="Big Blue Button" className="w-[50px] h-[50px] cursor-pointer" />
              </Link>
            </div>
          </Link>
        )
      }
    </div>
  )
}

export default PortfolioCard;