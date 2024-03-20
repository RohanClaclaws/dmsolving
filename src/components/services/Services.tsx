import Banner from "../resuable/Banner";
import BannerText from "../resuable/BannerText";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="bg-black">

        <Banner />
        <div className="layout bg-red-40 bg-black">

          <h1 className="font-syne font-[700] text-[32px] xs:text-[34x] sm:text-[40px] text-center pt-[62px] mb-[60px] text-[#CFDDE8]">Tailored Solutions for Your Digital Marketing Challenges</h1>

          <div className=" min-h-[457px] flex justify-evenly flex-wrap mb-[100px] gap-y-7  ">

            <div className="min-h-[355px] max-w-[305px] bg-pink-30 flex flex-col justify-between px-3 py-5 self-start">
              <div className="">
                <svg width="141" height="70" viewBox="0 0 141 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_ddd_338_1600)">
                    <path d="M7 7L40.497 35.3515L7 63.703H33.2565L66.7565 35.3515L33.2565 7H7Z" fill="#081D34" />
                    <path d="M67.4395 7L100.936 35.3515L67.4395 63.703H93.6959L127.196 35.3515L93.6959 7H67.4395Z" fill="#081D34" />
                  </g>
                  <defs>
                    <filter id="filter0_ddd_338_1600" x="0" y="0" width="140.195" height="76.7031" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="3.5" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.054902 0 0 0 0 0.301961 0 0 0 0 0.305882 0 0 0 1 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_338_1600" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dx="4" dy="4" />
                      <feGaussianBlur stdDeviation="4.5" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0293137 0 0 0 0 0.0251562 0 0 0 0 0.0958333 0 0 0 1 0" />
                      <feBlend mode="normal" in2="effect1_dropShadow_338_1600" result="effect2_dropShadow_338_1600" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dx="-1" dy="-1" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0676042 0 0 0 0 0.271809 0 0 0 0 0.275 0 0 0 1 0" />
                      <feBlend mode="normal" in2="effect2_dropShadow_338_1600" result="effect3_dropShadow_338_1600" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_338_1600" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="bg-purple-80">
                <div className="flex flex-col gap-y-4">
                  <h1 className="font-syne font-[600] text-[21px] xs:text-[25px] text-[#cfdde8]"><span className="text-[#00Ebff]">1</span> / Understand</h1>
                  <p className="text-[#8FABBD] font-dmsans font-[400] text-[15px] xs:tw-text-[16px]">Gain deep insights into your needs and goals through comprehensice research and close collaboration</p>
                </div>
              </div>
            </div>

            <div className="min-h-[355px] max-w-[305px] bg-pink-30 flex flex-col justify-between px-3 py-5 self-center">
              <div className="">
                <svg width="141" height="70" viewBox="0 0 141 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_ddd_338_1600)">
                    <path d="M7 7L40.497 35.3515L7 63.703H33.2565L66.7565 35.3515L33.2565 7H7Z" fill="#081D34" />
                    <path d="M67.4395 7L100.936 35.3515L67.4395 63.703H93.6959L127.196 35.3515L93.6959 7H67.4395Z" fill="#081D34" />
                  </g>
                  <defs>
                    <filter id="filter0_ddd_338_1600" x="0" y="0" width="140.195" height="76.7031" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="3.5" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.054902 0 0 0 0 0.301961 0 0 0 0 0.305882 0 0 0 1 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_338_1600" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dx="4" dy="4" />
                      <feGaussianBlur stdDeviation="4.5" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0293137 0 0 0 0 0.0251562 0 0 0 0 0.0958333 0 0 0 1 0" />
                      <feBlend mode="normal" in2="effect1_dropShadow_338_1600" result="effect2_dropShadow_338_1600" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dx="-1" dy="-1" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0676042 0 0 0 0 0.271809 0 0 0 0 0.275 0 0 0 1 0" />
                      <feBlend mode="normal" in2="effect2_dropShadow_338_1600" result="effect3_dropShadow_338_1600" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_338_1600" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="bg-purple-80">
                <div className="flex flex-col gap-y-4">
                  <h1 className="font-syne font-[600] text-[21px] xs:text-[25px] text-[#cfdde8]"><span className="text-[#00Ebff]">2</span> / Design</h1>
                  <p className="text-[#8FABBD] font-dmsans font-[400] text-[15px] xs:tw-text-[16px]">Gain deep insights into your needs and goals through comprehensice research and close collaboration</p>
                </div>
              </div>
            </div>

            <div className="min-h-[355px] max-w-[305px] bg-pink-30 flex flex-col justify-between px-3 py-5 self-start">
              <div className="">
                <svg width="141" height="70" viewBox="0 0 141 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_ddd_338_1600)">
                    <path d="M7 7L40.497 35.3515L7 63.703H33.2565L66.7565 35.3515L33.2565 7H7Z" fill="#081D34" />
                    <path d="M67.4395 7L100.936 35.3515L67.4395 63.703H93.6959L127.196 35.3515L93.6959 7H67.4395Z" fill="#081D34" />
                  </g>
                  <defs>
                    <filter id="filter0_ddd_338_1600" x="0" y="0" width="140.195" height="76.7031" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="3.5" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.054902 0 0 0 0 0.301961 0 0 0 0 0.305882 0 0 0 1 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_338_1600" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dx="4" dy="4" />
                      <feGaussianBlur stdDeviation="4.5" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0293137 0 0 0 0 0.0251562 0 0 0 0 0.0958333 0 0 0 1 0" />
                      <feBlend mode="normal" in2="effect1_dropShadow_338_1600" result="effect2_dropShadow_338_1600" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dx="-1" dy="-1" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0676042 0 0 0 0 0.271809 0 0 0 0 0.275 0 0 0 1 0" />
                      <feBlend mode="normal" in2="effect2_dropShadow_338_1600" result="effect3_dropShadow_338_1600" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_338_1600" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="bg-purple-80">
                <div className="flex flex-col gap-y-4">
                  <h1 className="font-syne font-[600] text-[21px] xs:text-[25px] text-[#cfdde8]"><span className="text-[#00Ebff]">3</span> / Validation</h1>
                  <p className="text-[#8FABBD] font-dmsans font-[400] text-[15px] xs:tw-text-[16px]">Gain deep insights into your needs and goals through comprehensice research and close collaboration</p>
                </div>
              </div>
            </div>

            <div className="min-h-[355px] max-w-[305px] bg-pink-30 flex flex-col justify-between px-3 py-5 self-center">
              <div className="">
                <svg width="141" height="70" viewBox="0 0 141 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_ddd_338_1600)">
                    <path d="M7 7L40.497 35.3515L7 63.703H33.2565L66.7565 35.3515L33.2565 7H7Z" fill="#081D34" />
                    <path d="M67.4395 7L100.936 35.3515L67.4395 63.703H93.6959L127.196 35.3515L93.6959 7H67.4395Z" fill="#081D34" />
                  </g>
                  <defs>
                    <filter id="filter0_ddd_338_1600" x="0" y="0" width="140.195" height="76.7031" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="3.5" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.054902 0 0 0 0 0.301961 0 0 0 0 0.305882 0 0 0 1 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_338_1600" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dx="4" dy="4" />
                      <feGaussianBlur stdDeviation="4.5" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0293137 0 0 0 0 0.0251562 0 0 0 0 0.0958333 0 0 0 1 0" />
                      <feBlend mode="normal" in2="effect1_dropShadow_338_1600" result="effect2_dropShadow_338_1600" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dx="-1" dy="-1" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.0676042 0 0 0 0 0.271809 0 0 0 0 0.275 0 0 0 1 0" />
                      <feBlend mode="normal" in2="effect2_dropShadow_338_1600" result="effect3_dropShadow_338_1600" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_338_1600" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="bg-purple-80">
                <div className="flex flex-col ">
                  <h1 className="font-syne font-[800] text-[50px] text-[#cfdde8]">GO</h1>
                  <div className="flex flex-col gap-y-4">
                    <h1 className="font-syne font-[600] text-[21px] xs:text-[25px] text-[#cfdde8]"><span className="text-[#00Ebff]">4</span> / Go To Run</h1>
                    <p className="text-[#8FABBD] font-dmsans font-[400] text-[15px] xs:tw-text-[16px]">Gain deep insights into your needs and goals through comprehensice research and close collaboration</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-yellow-  py-[60px]  space-y-[80px] pb-[80px]">

            <div className="flex justify-evenly flex-wrap gap-y-6">
              <div className="bg-red-400 self-stretch max-w-[685px] service-image-left-right-calc:w-[479px] h-[618px]">
                <Image src={'/images/service1.jpg'} alt="service1" className="w-full h-full object-cover object-center" width={1000} height={1000} />
              </div>
              <div className="max-w-[685px]  px-4 py-10 bg-pink-60 self-center">
                <h1 className="font-syne font-[700] text-[30px] 2xs:text-[40px] xs:text-[56px] mb-5 text-[#cccccc]">01/Web Design</h1>
                <p className="font-dmsans font-[400] xs:text-[19px] mb-[50px] text-[#cccccc]">With a collective expertise in web design, SEO and software development, we are committed to crafting innovative solutions that exceed expectations and redefine standards</p>
                <div className="flex flex-wrap gap-y-3 gap-x-8  bg-orange-40">
                  <div className="flex flex-col gap-y-3 text-[#cccccc] justify-center font-[400] font-dmsans text-[18px]">
                    <h3 ><span className="mr-2">➕</span> Customized Design solutions</h3>
                    <h3><span className="mr-2">➕</span> EO Integration</h3>
                  </div>
                  <div className="flex flex-col gap-y-3 text-[#cccccc] font-[400] font-dmsans text-[18px]">
                    <h3><span className="mr-2">➕</span> Responsive</h3>
                    <h3><span className="mr-2">➕</span> Content Creation</h3>
                  </div>
                  <div>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex flex-row-reverse justify-evenly flex-wrap gap-y-6">
              <div className="bg-red-400 self-stretch max-w-[685px] service-image-left-right-calc:w-[479px] h-[618px]">
                <Image src={'/images/service2.jpg'} alt="service1" className="w-full h-full object-cover object-center" width={1000} height={1000} />
              </div>
              <div className="max-w-[685px]  px-4 py-10 bg-pink-60 self-center">
                <h1 className="font-syne font-[700] text-[30px] 2xs:text-[40px] xs:text-[56px] mb-5 text-[#cccccc]">02/Digital Marketing</h1>
                <p className="font-dmsans font-[400] xs:text-[19px] mb-[50px] text-[#cccccc]">Drive your digital presence forward with our tailored digital marketing strategies ranging and craft data-driven approaches to boost your brand visibility, engage your audience, and maximize your ROI.</p>
                <div className="flex flex-wrap gap-y-3 gap-x-8  bg-orange-40">
                  <div className="flex flex-col gap-y-3 text-[#cccccc] justify-center font-[400] font-dmsans text-[18px]">
                    <h3 ><span className="mr-2">➕</span> Customized Design solutions</h3>
                    <h3><span className="mr-2">➕</span> EO Integration</h3>
                  </div>
                  <div className="flex flex-col gap-y-3 text-[#cccccc] font-[400] font-dmsans text-[18px]">
                    <h3><span className="mr-2">➕</span> Responsive</h3>
                    <h3><span className="mr-2">➕</span> Content Creation</h3>
                  </div>
                  <div>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex justify-evenly flex-wrap gap-y-6">
              <div className="bg-red-400 self-stretch max-w-[685px] service-image-left-right-calc:w-[479px] h-[618px]">
                <Image src={'/images/service3.jpg'} alt="service1" className="w-full h-full object-cover object-center " width={1000} height={1000} />
              </div>
              <div className="max-w-[685px]  px-4 py-10 bg-pink-60 self-center">
                <h1 className="font-syne font-[700] text-[30px] 2xs:text-[40px] xs:text-[53px] mb-5 text-[#cccccc]">03/App Development</h1>
                <p className="font-dmsans font-[400] xs:text-[19px] mb-[50px] text-[#cccccc]">We bring a touch of style, finesse, and panache to mobile app development, delivering exceptional digital experiences.</p>
                <div className="flex flex-wrap gap-y-3 gap-x-8  bg-orange-40">
                  <div className="flex flex-col gap-y-3 text-[#cccccc] justify-center font-[400] font-dmsans text-[18px]">
                    <h3 ><span className="mr-2">➕</span> Customized Design solutions</h3>
                    <h3><span className="mr-2">➕</span> EO Integration</h3>
                  </div>
                  <div className="flex flex-col gap-y-3 text-[#cccccc] font-[400] font-dmsans text-[18px]">
                    <h3><span className="mr-2">➕</span> Responsive</h3>
                    <h3><span className="mr-2">➕</span> Content Creation</h3>
                  </div>
                  <div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      <BannerText />

    </>
  )
}

export default Services;