import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";

const About = () => {
  return (
    <div className="bg-black">
      <Section1 />

      <Section2 />

      <Section3 />

      <section className="layout text-white mt-[150px] pb-[200px]">

        <div className="lg:w-6/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/4 text-start sm:pr-8 sm:py-8">

              <p className="font-syne text-4xl">VALUE</p>

              <p className="font-syne text-sm text-[#00EBFF]">Strength  Feature</p>

            </div>
            <div className="sm:w-3/4 sm:pl-8 sm:py-8 ">
              <div className="w-[full] h-0.5  mt-2 bg-[#00EBFF] mb-[50px]"></div>

              <div className="flex flex-row">
                 <div className="w-[360px] h-[360px] bg-transparent border-white border-[1px] rounded-full"></div>
                 <div className="w-[360px] h-[360px] bg-transparent border-white border-[1px] rounded-full"></div>
                 <div className="w-[360px] h-[360px] bg-transparent border-white border-[1px] rounded-full"></div>
              </div>
            




            </div>
          </div>
        </div>

      </section>




    </div>
  )
}

export default About;