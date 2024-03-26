
import Beauty from "@/components/UBeauty/Beauty";
import PortfolioDetail from "@/components/portfoliodetail/PortfolioDetail";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'UBeauty - Portfolio | Dmsolving',
  description: 'Learn more about UBeauty and how we made it'
}

const Page = () => {
  const claclaws = {
    image1: `/images/beauty1.png`,
    image2: `/images/beauty2.png`,
    image3: `/images/beauty3.png`,
    heading1: {
      title: `Structuring the site`,
      description: `The website's architecture was meticulously crafted for effortless navigation and enhanced user engagement. Serving as the main gateway, the homepage showcased key features of the beauty salon, providing a comprehensive overview of its services. Sections like 'About Us' delved into the salon's background, while 'Product' categorized skincare solutions for easy exploration. The 'Shop' displayed captivating visuals, offering a glimpse into the salon's ambiance. Lastly, the 'Consultant' section provided convenient communication channels for inquiries and feedback.`
    },
    heading2: {
      title: `Design System`,
      description: `Our design system at UBeauty was meticulously crafted to complement our brand's aesthetics and elevate the overall user experience. Colors were thoughtfully selected from our brand palette to maintain visual consistency and evoke the ambiance of our salon. Carefully curated fonts were chosen for clarity and elegance, ensuring readability across all platforms. Our layouts were designed to be clean and intuitive, facilitating seamless navigation and making it effortless for users to explore our range of products and services.`
    },
    heading3: {
      title: `Iconography`,
      description: `At UBeauty, our iconography plays a vital role in enhancing user experience and visual communication. Each icon within our design system is meticulously crafted to reflect our brand identity and values. From representing skincare categories to navigation elements, every icon is thoughtfully designed to be intuitive and easily recognizable. Our iconography maintains consistency in style and color, ensuring a cohesive visual language across our website and other brand materials. With clear and meaningful icons, we aim to streamline navigation, guide users effectively, and enhance the overall aesthetic appeal of our digital presence.`
    },
    heading4: {
      title: `UI components`,
      description: `In our UI design at UBeauty, we've incorporated a palette of blush pink, nude, and yellow tones to create a visually appealing experience. These colors add warmth, elegance, and vitality to our interface. Our UI components, including buttons and icons, feature these colors to maintain consistency and coherence. Blush pink exudes femininity and sophistication, nude tones offer subtlety, and yellow accents inject energy. Together, they create a dynamic and engaging user experience reflective of our brand identity.`
    },
    maindescription: `UBeauty is a beauty salon focused on providing high-quality beauty products and services. They aimed to showcase their product line and beauty services through a modern and appealing website, while also providing convenient purchasing options to attract more customers.
    `

  }

  const projectDelivarables = {
    section1: {
      title: `About Project`,
      para1: `3 Weeks / June, 2023 / Website`,
      para2: `Development`
    },
    section2: {
      title: `Deliverables`,
      para1: `Wireframes, Design System, Dark &`,
      para2: `Light mode UI design Coding`
    },
    section3: {
      title: `Our Role`,
      para1: `User experience user interface`,
      para2: `iconography,continued functionality`
    }
  }

  const bottomPics = [
    "/images/atet-auto/c4.png",
    "/images/atet-auto/c5.png",
    "/images/atet-auto/c6.png"
  ]

  const beautyData={
    image1:`/images/beauty4.png`,
    image2:`/images/beauty5.png`,
    image3:`/images/beauty6.png`,
    image4:`/images/beauty7.png`,
    image5:`/images/beauty8.png`,
    image6:`/images/beauty9.png`,
    image7:`/images/beauty10.png`,
    image8:`/images/beauty11.png`,
    headingTitle:`Project Deliverables`,
    description:`We collaborated closely with the client to design a modern and responsive website that beautifully showcases UBeauty's extensive product line and premium beauty services. Our focus was on optimizing the user experience, achieved through intuitive navigation menus, clear product display pages, and seamless purchasing options. Every element was meticulously crafted to enhance usability and ensure a smooth journey for visitors. Furthermore, we emphasized the professional image of the UBeauty brand by presenting content with exquisite design and attention to detail. This meticulous approach not only captivated users but also instilled trust in the brand, reinforcing its reputation for excellence in the beauty industry.`

  }

  return (
    <div className="bg-black">
      <PortfolioDetail detailObject={claclaws} delivery={projectDelivarables} bannerImage="/images/beautyBanner.png" prev="/portfolio/claclaws" next="/portfolio/tasteat">
        <Beauty beautyData={beautyData}/>
      </PortfolioDetail>
    </div>
  )
}

export default Page;

