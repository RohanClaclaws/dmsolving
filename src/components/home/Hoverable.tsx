
const Hoverable = ({ title }: { title: string }) => {
  return (
    <div className="absolute w-full h-full bg-[#00000080] px-[16px] py-[20px] top-0">
      <div className="flex flex-col text-white">
        <span className="font-[500] text-[24px] leading-[43.2px]">{title}</span>
        <span className="font-[500] text-[14px] leading-[43.2px]">UI/UX Design, Web Design</span>
      </div>
    </div>
  )
}

export default Hoverable;