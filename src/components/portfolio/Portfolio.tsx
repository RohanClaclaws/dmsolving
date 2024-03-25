"use client"
import Image from "next/image";
import React, { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import BannerText from "../resuable/BannerText";
import { motion } from 'framer-motion';
import Banner from "../resuable/Banner";
import { useRouter } from 'next/navigation';

const Portfolio = () => {
  const router = useRouter();

  const row1 = [
    {
      img: "/images/portfolio/p1.png",
      title: "Clash of The Claws",
      description: "Game",
      award_winning: true,
      link: "/portfolio/clash-of-the-claws",
      comingSoon: false
    },
    {
      img: "/images/portfolio/p22.png",
      title: "Centure",
      description: "Website",
      link: "/portfolio/clash-of-the-claws",
      comingSoon: true
    },
    {
      img: "/images/portfolio/p3.png",
      title: "ATET AUTO",
      description: "Website",
      link: "/portfolio/atet-auto",
      comingSoon: false
    },
  ];

  const row2 = [
    {
      img: "/images/portfolio/p4.png",
      title: "inletsky",
      description: "Website",
      link: "/portfolio/clash-of-the-claws",
      comingSoon: true
    },
    {
      img: "/images/portfolio/p55.png",
      title: "Clawclaws",
      description: "Website",
      link: "/portfolio/claclaws",
      comingSoon: false
    },
    {
      img: "/images/portfolio/p6.png",
      title: "AIFISH",
      description: "Website",
      link: "/portfolio/clash-of-the-claws",
      comingSoon: true
    },
  ];

  const row3 = [
    {
      img: "/images/portfolio/p7.png",
      title: "The Tasteat",
      description: "Website",
      link: "/portfolio/clash-of-the-claws",
      comingSoon: true
    },
    {
      img: "/images/portfolio/p8.png",
      title: "Londrino",
      description: "Digital Marketing",
      link: "/portfolio/clash-of-the-claws",
      comingSoon: true
    },
    {
      img: "/images/portfolio/p9.png",
      title: "NoQclinic",
      description: "Website & Mobile App",
      link: "/portfolio/clash-of-the-claws",
      comingSoon: true
    },
  ];

  const [awardWinning, setAwardWinning] = useState({ status: false, index: -1 });

  return (
    <div className="bg-black py-[50px] pt-[100px] overflow-hidden">
      <Banner heading="Portfolio" subheading="Home" image="/images/ppbg.png" />
      <div className="layout py-20">
        <div className="flex flex-col gap-20">
          <div className="flex gap-10 justify-center p-md:flex-row flex-col py-20">
            <Image src="/images/portfolio/portfolio_head.png" width={660} height={490} alt="Portfolio" className="-w-[660px] h-[490px] hover:scale-[1.05] active:scale-[.9] transition-all ease-in-out cursor-pointer" onClick={() => router.push("/portfolio/clash-of-the-claws")} />
            <div className="flex flex-col justify-between">
              <div className="font-syne flex flex-col">
                <span className="text-[#00EBFF] text-[26px] font-[600] leading-[31.2px]">Project by DM solving</span>
                <span className="text-[#8FA8BD] text-[20px] font-[400] leading-[30px]">VR Game</span>
              </div>
              <div className="flex flex-col gap-5">
                <span className="text-white font-[700] text-[42px] leading-[50.4px] font-syne">Clash of The Claws</span>
                <span className="text-[#8FA8BD] font-[400] text-[16px] leading-[25.6px] font-dmsans">
                  {`We present to you the "Clash of the claws" landing page project - a video game website inspired by neo-futurism and cyberpunk styles. In this work, We utilized unique images created by figma and adobe illustration to emphasize the fantastic dynamics of the gaming world. The simplicity and functionality of the design enable users to quickly immerse themselves.`}
                </span>
                {/* <span className="text-[#8FA8BD] font-[400] text-[16px] leading-[25.6px] font-dmsans">
                  Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows, carrot cake, and perhaps e on top. Design sweet lorem ipsum
                </span> */}
              </div>
            </div>
          </div>
          {/** Row 1 */}
          <div className="flex md:gap-5 justify-center md:flex-row flex-col items-center gap-10">
            {
              row1.map((e, idx) => {
                return (
                  <motion.span key={idx} className={`${idx === 1 ? "md:mt-10" : "mt-0"}`} onMouseEnter={() => setAwardWinning({ status: true, index: idx + 1 })} onMouseLeave={() => setAwardWinning({ status: false, index: -1 })} initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ ease: 'easeIn', duration: .75 }}>
                    <PortfolioCard img={e.img} description={e.description} title={e.title} award_winning={awardWinning.status && awardWinning.index === idx + 1} link={e.link} comingSoon={e.comingSoon} />
                  </motion.span>
                )
              })
            }
          </div>
          {/** Row 1 end */}
          {/** Row 2 */}
          <div className="flex md:gap-5 justify-center md:flex-row flex-col items-center gap-10">
            {
              row2.map((e, idx) => {
                return (
                  <motion.span key={idx} className={`${idx === 1 ? "md:mt-10" : "mt-0"}`} onMouseEnter={() => setAwardWinning({ status: true, index: idx + 100 })} onMouseLeave={() => setAwardWinning({ status: false, index: -1 })} initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ ease: 'easeIn', duration: .75 }}>
                    <PortfolioCard img={e.img} description={e.description} title={e.title} award_winning={awardWinning.status && awardWinning.index === idx + 100} link={e.link} comingSoon={e.comingSoon} />
                  </motion.span>
                )
              })
            }
          </div>
          {/** Row 2 END */}
          {/** Row 3 */}
          <div className="flex md:gap-5 justify-center md:flex-row flex-col items-center gap-10">
            {
              row3.map((e, idx) => {
                return (
                  <motion.span key={idx} className={`${idx === 1 ? "md:mt-10" : "mt-0"}`} onMouseEnter={() => setAwardWinning({ status: true, index: idx + 200 })} onMouseLeave={() => setAwardWinning({ status: false, index: -1 })} initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ ease: 'easeIn', duration: .75 }}>
                    <PortfolioCard img={e.img} description={e.description} title={e.title} award_winning={awardWinning.status && awardWinning.index === idx + 200} link={e.link} comingSoon={e.comingSoon} />
                  </motion.span>
                )
              })
            }
          </div>
          {/** Row 3 END */}
          {/* <div className="flex justify-center mb-20 animate-pulse">
            <div className="w-[165px] h-[165px] border-[1px] border-[#FFD55B] flex items-center justify-center rounded-[1000px] hover:scale-[1.1] cursor-pointer ease-in-out transition-all hover:bg-[#1C2F47]">
              <span className="font-[600] text-[18px] leading-[21.6px] font-syne text-[#CFDDE8]">Load More</span>
            </div>
          </div> */}
        </div>
      </div>
      <BannerText />
    </div>
  )
}

export default Portfolio;