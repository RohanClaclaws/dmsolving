import Image from "next/image"

const Modal = ({img, setModal }: {img: string, setModal: any }) => {
  return (
    <div className="fixed top-0 left-0 h-[100dvh] w-full py-5 px-[16px] bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)] z-[1000]" onClick={() => setModal({status: false, img: ""})}>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <Image src={img} width={400} height={400} alt="Chosen one" className="w-[500px] h-[500px]" onClick={(e) => e.stopPropagation()} />
      </div>
    </div>
  )
}

export default Modal;