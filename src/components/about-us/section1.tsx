import Image from 'next/image'

const Section1 = () => {
    return (
        <section className="layout pt-10">
            <div className="lg:w-6/6 ">

                <div className="flex flex-col justify-center lg:flex-row mt-10">

                    <div className="mr-12">
                        <Image
                            src="/about/about-back.png"
                            width={500}
                            height={500}
                            alt="Picture of the about back"
                            className=' max-w-[500px]  min-w-[500px]'
                        />

                        <Image
                            src="/about/about-front.png"
                            width={500}
                            height={500}
                            alt="Picture of the about back"
                            className=' max-w-[300px]  min-w-[300px] -mt-[260px] -ml-[40px] mb-[80px]'
                        />
                    </div>
                    <div className="flex flex-col max-w-[646px] w-full">
                        <h2 className="font-dmsans text-white text-2xl items-start mb-16">We Are Complete Solution For Every Idea</h2>


                        <p className="font-syne text-white mb-10">
                            Design sweet lorem ipsum? You got it with Cupcake Ipsum,
                            the only text generator that includes marsh mallows, carrot cake, and perhaps
                            e on top. Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text
                            generator that includes marsh mallows, carrot cake.
                        </p>

                        <p className="font-syne text-white mb-10">
                            Design sweet lorem ipsum? You got it with Cupcake Ipsum,
                            the only text generator that includes marsh mallows,
                            carrot cake, and perhaps e on top. Design sweet lorem ipsum
                        </p>
                        <div className="w-20 h-0.5 bg-[#FFD55B] mt-2 mb-4"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1;