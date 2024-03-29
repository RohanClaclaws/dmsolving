import Image from 'next/image'
import Link from 'next/link'
const Section6 = () => {
    return (
        <section className="relative">

        <Image src="/about/section5-bg.png"
          width={1500}
          height={1500}
          alt="section6 bg"
          className="w-full" />


        <div className="flex flew-col justify-center text-center">

          <div className="absolute sm:top-1/3 top-1/4 px-auto text-white z-10">
            <p className=" font-syne sm:text-[64px] text-[32px]">
            Let’s <span className="font-syne sm:text-[64px] text-[32px] text-[#00EBFF] ">Solve</span>  Together
            </p>

            <p className=" font-sans sm:text-[18px] text-[12px] max-w-[900px] mt-[30px]">
            We’re a diverse team of strategies, developers, 
            designers, and digital experts who collaborate 
            to turn the ordinary into extraordinary
            </p>

               <Link href={'/contact-us'}>
                <button className="font-dmsans text-center font-[400] text-[#081D34] py-3 px-5  bg-white w-fit mt-4 rounded-lg hover:bg-transparent hover:text-white border-[1px] border-transparent hover:border-white" >
                    Send Message
                </button>
            </Link>
          </div>
       
        </div>
      </section>
    )
}

export default Section6