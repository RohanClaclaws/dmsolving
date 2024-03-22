import Image from 'next/image'
const Section6 = () => {
    return (
        <section className="relative">

        <Image src="/about/section5-bg.png"
          width={1500}
          height={1500}
          alt="section6 bg"
          className="w-full" />


        <div className="flex flew-col justify-center text-center">

          <div className="absolute top-1/3 px-auto text-white z-10">
            <p className=" font-syne text-[64px]">
            Let’s <span className="font-syne text-[64px] text-[#00EBFF]">Solve</span>  Together
            </p>

            <p className=" font-sans text-[18px] max-w-[900px] mt-[30px]">
            We’re a diverse team of strategies, developers, 
            designers, and digital experts who collaborate 
            to turn the ordinary into extraordinary
            </p>
          </div>
        </div>
      </section>
    )
}

export default Section6