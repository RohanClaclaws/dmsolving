import PortfolioDetail from "@/components/portfoliodetail/PortfolioDetail";
import TasteEat from "@/components/tasteEat/TasteEat";
import { Metadata } from "next";
import Image from "next/image";
// import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'TasteEat - Portfolio | Dmsolving',
  description: 'Learn more about TasteEat and how we process in Dmsolving'
}

const Page = () => {
  const claclaws = {
    image1: '/images/restaurant/r1.png',
    image2: '/images/restaurant/r2.png',
    image3: '/images/restaurant/r3.png',
    heading1: {
      title: `Structuring the site`,
      description: `Our streamlined website structure ensures easy access to essential sections, starting with an inviting homepage showcasing our restaurant's ambiance and offerings. Dive into our story and mission in the About section, explore our meticulously crafted menus, and make reservations effortlessly through our user-friendly booking system. Immerse yourself in the visual feast of our gallery, featuring stunning imagery of our dishes and events. Stay informed and inspired with our blog, offering insights into culinary trends and behind-the-scenes glimpses. For inquiries or feedback, our Contact page provides all necessary information. At TasteEat, we combine elegance with functionality to deliver an exceptional online experience tailored to our discerning guests`
    },
    heading2: {
      title: `Design System`,
      description: `The TasteEat design system blends elegance and functionality for a captivating website. Featuring a refined logo, sophisticated colors, and clear typography, it ensures seamless navigation across devices. Stylish components and high-quality imagery showcase the restaurant's ambiance and cuisine, while custom icons and subtle animations enhance user engagement. With a focus on accessibility and responsive design, TasteEat's online presence epitomizes luxury and usability.`
    },
    heading3: {
      title: `Iconography`,
      description: `The iconography of TasteEat embodies elegance and functionality, with custom-designed icons serving as intuitive visual cues throughout the website. Each icon is carefully crafted to reflect the restaurant's brand identity and enhance user experience. Icons representing key actions such as reservations, contact information, and social media links that are designed with clean lines and subtle details, complementing the overall aesthetic of the site. Consistency in style and size ensures visual coherence, while thoughtful use of color adds depth and sophistication. Whether guiding visitors through navigation menus or prompting interactions, the iconography of TasteEat contributes to a seamless and delightful browsing experience.`
    },
    heading4: {
      title: `UI components`,
      description: `The UI components for the TasteEat website are meticulously designed to evoke a sense of luxury and sophistication while prioritizing functionality and user experience. From stylish buttons and elegant form fields to captivating cards showcasing menu items and blog posts, each component is crafted with attention to detail. Custom icons serve as intuitive visual cues, guiding users through navigation menus and prompting interactions seamlessly. High-quality imagery, combined with subtle animations, enhances engagement and immerses visitors in the restaurant's ambiance. With a focus on accessibility and responsive design, TasteEat's UI components ensure a delightful and seamless browsing experience across devices.`
    },
    maindescription: `Indulge in a culinary journey of unparalleled luxury at TasteEat, where exquisite flavors meet impeccable service in an opulent setting. Explore our meticulously crafted menus, showcasing the finest ingredients prepared with artistry and passion by our world-class chefs. From intimate dining experiences to grand celebrations, every visit to TasteEat promises an unforgettable gastronomic adventure. Reserve your table today and elevate your dining experience to new heights of sophistication.`

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
    <PortfolioDetail detailObject={claclaws} delivery={projectDelivarables} bannerImage="/images/restaurant/b1.png" prev="/portfolio/ubeauty" next="/portfolio/clash-of-the-claws">
      <TasteEat image1="/images/restaurant/r4.png" image2="/images/restaurant/r5.png" image3="/images/restaurant/r6.png" image4="/images/restaurant/r7.png" deliverableContent="TasteEat&apos;s UI components are thoughtfully designed to embody the restaurant&apos;s ethos of luxury dining. Each element ranging from the sleek buttons to the refined form fields and captivating cards, is meticulously crafted to evoke sophistication while prioritizing usability. Custom icons serve as intuitive guides, seamlessly directing users through menus and prompting interactions. The integration of high-quality imagery and subtle animations elevates the browsing experience, immersing visitors in the ambiance of the restaurant. With a keen focus on accessibility and responsiveness, these UI components ensure that every interaction with the TasteEat website is not only visually stunning but also effortless and enjoyable across a variety of devices and screen sizes." />
    </PortfolioDetail>
  )
}

export default Page;