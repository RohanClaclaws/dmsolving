import PortfolioDetail from "@/components/portfoliodetail/PortfolioDetail";
import { Metadata } from "next";
import Image from "next/image";
// import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'The Buyers Plave - Portfolio | Dmsolving',
  description: 'Learn more about TasteEat and how we process in Dmsolving'
}

const Page = () => {
  const claclaws = {
    image1: '/images/buyers/j1.png',
    image2: '/images/buyers/j2.png',
    image3: '/images/buyers/j3.png',
    heading1: {
      title: `Structuring the site`,
      description: `The Buyers Place website presents a seamless experience for users exploring the multifaceted world of real estate. With a clear and intuitive layout, the site categorizes content into distinct sections including buying, selling, renting, an informative blog, and easy-to-access contact details. Leveraging a minimalist yet visually captivating design, the interface prioritizes user engagement and accessibility across all devices. Through comprehensive user research and iterative design processes, "The Buyers Place" ensures a harmonious blend of functionality and aesthetics, empowering users to navigate the intricacies of property transactions with confidence and ease.`
    },
    heading2: {
      title: `Design System`,
      description: `"The Buyers Place" design system embodies a cohesive framework meticulously crafted to ensure consistency, scalability, and efficiency in every aspect of the website's interface. Anchored by a robust set of design principles, the system encompasses a unified color palette, typography guidelines, and a versatile library of reusable UI components. Each element is thoughtfully designed to maintain visual harmony and reinforce the brand identity, fostering a seamless user experience across all pages and interactions. With a focus on modularity and flexibility, the design system facilitates rapid iteration and adaptation, empowering designers and developers to effortlessly create and maintain a polished and intuitive platform that resonates with users navigating the complexities of the real estate market.`
    },
    heading3: {
      title: `Iconography`,
      description: `"The Buyers Place" employs a comprehensive iconography system to enhance visual communication and streamline user interactions throughout the platform. Consisting of a diverse range of easily recognizable symbols and glyphs, the iconography serves as intuitive visual cues, guiding users through various actions and functionalities with clarity and efficiency. Designed to complement the overall aesthetic and brand identity, the icons adhere to consistent styles, sizes, and colors, ensuring visual coherence across different sections and contexts of the website. Whether navigating property listings, accessing informative blog posts, or engaging with interactive features, users can rely on the iconography system to enhance their browsing experience and facilitate seamless interaction with "The Buyers Place" interface.`
    },
    heading4: {
      title: `UI components`,
      description: `"The Buyers Place" employs a meticulously crafted library of UI components to ensure consistency, efficiency, and ease of use across the platform. From buttons and forms to cards, navigation bars, and modals, each component is thoughtfully designed to maintain visual harmony and streamline user interactions. With a focus on modularity and reusability, these components facilitate rapid development and iteration, empowering designers and developers to create cohesive and intuitive interfaces while reducing redundancy and minimizing maintenance efforts. By adhering to established design patterns and guidelines, "The Buyers Place" delivers a polished and cohesive user experience, enhancing usability and engagement across every interaction.`
    },
    maindescription: `The Buyers Place is your one-stop destination for all things related to real estate. Whether you're looking to buy, sell, or rent a property, our user-friendly platform provides comprehensive listings, expert guidance, and valuable resources to streamline your experience. Explore a diverse range of properties, from cozy apartments to sprawling estates, and access insightful articles and tips in our blog section. With a focus on convenience, transparency, and exceptional service, The Buyers Place empowers users to make informed decisions and navigate the real estate market with confidence.`

  }

  const projectDelivarables = {
    section1: {
      title: `About Project`,
      para1: `4 Weeks / March, 2024 / Website`,
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
      para2: `iconography, continued functionality`
    }
  }

  return (
    <PortfolioDetail detailObject={claclaws} delivery={projectDelivarables} bannerImage="/images/buyers/banner.png" prev="/portfolio/ubeauty" next="/portfolio/clash-of-the-claws">
      <div className="flex justify-center flex-col items-center">
        <Image src="/images/buyers/j4.png" width={1094} height={4196} alt="The Buyers Place" className="w-[1094px] tw-h-[4196px] object-cover" />
        <div className="flex flex-col max-w-[870px] w-full py-36 gap-10">
          <span className="text-white text-[32px] font-semibold font-syne">Project Deliverables</span>
          <p className="text-[20px] font-dmsans text-[#8FABBD]">
           {`The project deliverables for "The Buyers Place" encompass a comprehensive range of assets aimed at guiding stakeholders through the design and development process. Beginning with wireframes delineating the website's layout and functionality, followed by high-fidelity visual designs that establish its aesthetic identity, interactive prototypes enable stakeholders to navigate the user experience firsthand. A meticulously crafted design system ensures consistency and efficiency in interface development, complemented by an iconography set and UI component library designed to enhance visual communication and streamline user interactions. A style guide provides detailed guidelines for maintaining visual coherence, while usability testing reports offer valuable insights for refining the user experience. Collectively, these deliverables serve to facilitate collaboration, communicate design intentions, and drive the successful execution of "The Buyers Place" website.`}
          </p>
        </div>
      </div>
    </PortfolioDetail>
  )
}

export default Page;