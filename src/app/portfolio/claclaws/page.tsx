import PortfolioDetail from "@/components/portfoliodetail/PortfolioDetail";
import Image from "next/image";

const Page = () => {
  const claclaws = {
    image1: `/images/claclaws/c1.png`,
    image2: `/images/claclaws/c2.png`,
    image3: `/images/claclaws/c3.png`,
    heading1: {
      title: `Structuring the site`,
      description: `The website's structure is designed to showcase the Claclaws brand and ensure the theme is presented seamlessly throughout the website.  With that in mind,  we emphasized on maintaining a consistent brand identity throughout, ensured single concepts were in view at any time and selected images and content to match their preferred tone.`
    },
    heading2: {
      title: `Design System`,
      description: `When designing Claclaws we had to ensure the consistent use of branding elements such as the logo, brand colours, and tagline throughout the website to reinforce brand identity and create a cohesive visual experience. By implementing a comprehensive design system that encompasses these elements, a claw machine store website can effectively convey the excitement and allure of the arcade experience.`
    },
    heading3: {
      title: `Iconography`,
      description: `The iconography on the website, meticulously selected to symbolize different aspects of the claw machine experience, enriches user interaction and navigation, ensuring a smooth engagement with the brand's visual identity. These specific icons are chosen to visually communicate the focus of the store, simplify navigation, highlight the variety of prizes and services, encourage engagement, convey reliability, and foster social connection. Together, these elements create a cohesive and user-friendly browsing experience tailored to arcade enthusiasts and potential patrons.`
    },
    heading4: {
      title: `UI components`,
      description: `At the heart of the website's user interface were meticulously crafted UI components, offering visitors effortless ways to navigate and interact with the content. From interactive buttons and forms to sleek navigation menus, each element was designed with usability as the utmost priority, while maintaining a stylish appearance. These UI components seamlessly integrated with the overall aesthetic of the website, ensuring a seamless and enjoyable browsing experience across all platforms for patrons of the claw machine arcade.`
    },
    maindescription: `This Claw machine website is designed based on encapsulating a vibrant, exciting space for all ages to enjoy colorful and enticing games. With classic arcade-style machines and modern cabinets, we aimed to provide users an immersive experience filled with cheerful music, and coins, ensuring a chance to win and create lasting memories.`

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
    "/images/claclaws/c4.png",
    "/images/claclaws/c5.png",
    "/images/claclaws/c6.png"
  ]
  return (
    <div className="bg-black">
      <PortfolioDetail detailObject={claclaws} delivery={projectDelivarables} bannerImage="/images/coc.png">
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
