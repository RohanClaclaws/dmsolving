import PortfolioDetail from "@/components/portfoliodetail/PortfolioDetail";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Atet-Auto - Portfolio | Dmsolving',
  description: 'Learn more about atet-auto and how we made it'
}

const Page = () => {
  const claclaws = {
    image1: `/images/atet-auto/c1.png`,
    image2: `/images/atet-auto/c2.png`,
    image3: `/images/atet-auto/c3.png`,
    heading1: {
      title: `Structuring the site`,
      description: `The website's architecture is designed to enhance user engagement and navigation, resembling a well-engineered car. It features a homepage with the latest car models, 'About Us', 'Car Models', 'Gallery', and 'Contact Us' sections, providing a comprehensive introduction to the automotive world and a user-friendly interface.`
    },
    heading2: {
      title: `Design System`,
      description: `Our design system enhances user experience on our car development website, featuring automotive-inspired colors, clear fonts, and intuitive layouts. It ensures visual coherence, readability across platforms, and enables easy exploration of latest automotive technology developments.`
    },
    heading3: {
      title: `Iconography`,
      description: `The website's iconography, carefully chosen to represent distinct automotive features, enhances user experience and navigation, ensuring seamless interaction with the brand's visual identity. This specific iconography is chosen for a car website to visually communicate the website's focus, facilitate navigation, highlight features and services, encourage interaction, convey safety and trust, and promote social engagement, all of which contribute to a cohesive and user-friendly browsing experience tailored to automotive enthusiasts and potential car buyers.`
    },
    heading4: {
      title: `UI components`,
      description: `The core of the website's user interface was made up of UI components, which gave visitors simple ways to explore and engage with the content. Every element, from interactive buttons and forms to slick navigation menus, was meticulously designed with usefulness as the top priority without compromising style. The user interface's components were created to blend in with the website's general style and provide a smooth, enjoyable browsing experience on all platforms. `
    },
    maindescription: `The car website design guide aims to showcase automotive excellence and user experience, blending aesthetics with intuitive navigation. The guide combines color schemes and typography to evoke emotion and confidence, fostering a lasting connection between users and the driving experience.`

  }

  const projectDelivarables = {
    section1: {
      title: `About Project`,
      para1: `4 Weeks / Sep, 2022 / UI/UX`,
      para2: `Designer Portfolio`
    },
    section2: {
      title: `Deliverables`,
      para1: `Wireframes, Design System, Dark &`,
      para2: `Light mode UI design Coding`
    },
    section3: {
      title: `Our Role`,
      para1: `User experience user interface`,
      para2: `iconography`
    }
  }

  const bottomPics = [
    "/images/atet-auto/c4.png",
    "/images/atet-auto/c5.png",
    "/images/atet-auto/c6.png"
  ]
  return (
    <div className="bg-black">
      <PortfolioDetail detailObject={claclaws} delivery={projectDelivarables} bannerImage="/images/atetbg.JPG" prev="/portfolio/clash-of-the-claws" next="/portfolio/claclaws">
        <div className="flex flex-col items-center gap-20 py-20">
          {
            bottomPics.map((e, idx) => {
              return (
                <Image src={e} key={idx} width={1217} height={620} className="w-[1217] h-[620]" alt="car" />
              )
            })
          }
        </div>
      </PortfolioDetail>
    </div>
  )
}

export default Page;