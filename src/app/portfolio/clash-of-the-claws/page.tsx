import PortfolioDetail from "@/components/portfoliodetail/PortfolioDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Clash of the Claws | Dmsolving',
  description: 'Learn more about Clash of th Claws and how we process in Dmsolving'
}

const claclaws={
  image1:'/images/Placeholder1.png',
  image2:'/images/Placeholder3.png',
  image3:'/images/Placeholder2.png',
  heading1:{
    title:`Structuring the site`,
    description:`The website's architecture was meticulously designed to ensure seamless navigation and optimal user engagement. The homepage served as a gateway, featuring prominent displays of the game's key features and providing an overview of its immersive world. Sections such as 'About Us' delved into the background story of the game's development team, while 'Game Overview' categorically listed various aspects of gameplay, mechanics, and storyline. Additionally, the 'Media Center' showcased an array of screenshots, videos, and other media assets to offer users a comprehensive glimpse into the game's visual appeal. Finally, the 'Contact Us' section provided users with convenient channels to reach out and provide feedback.`
  },
  heading2:{
    title:`Design System`,
    description:`Our design system was meticulously crafted to harmonize with the game's aesthetics and enhance the overall user experience. Colors were chosen from the game's thematic palette to maintain visual consistency and evoke the game's ambiance. Fonts were carefully selected for clarity and legibility, ensuring seamless readability across various devices. Layouts were kept clean and intuitive, facilitating effortless navigation and enabling users to find information with ease.`
  },
  heading3:{
    title:`Iconography`,
    description:`Iconography within the website was meticulously curated to align seamlessly with the game's visual identity. Each icon was chosen with precision to represent different functionalities and features within the VR game. From navigation elements to interactive buttons, every icon was designed to be intuitive and easily recognizable, enhancing user experience and facilitating smooth interaction with the website.`
  },
  heading4:{
    title:`UI components`,
    description:`UI components formed the backbone of the website's user interface, providing users with intuitive tools to navigate and interact with the content. From sleek navigation menus to interactive buttons and forms, each component was meticulously designed to prioritize functionality without sacrificing aesthetics. The UI elements were crafted to complement the overall design language of the website and ensure a seamless and engaging user experience across all devices.`
  },
  maindescription:`This portfolio encapsulates a website we crafted for a VR game project. Our paramount objective was to immerse users in the game's universe and highlight its distinctive features. Through a blend of captivating design elements and user-friendly navigation, our aim was to captivate users and draw them into exploring the game's allure.`

}

const projectDelivarables={
  section1:{
    title:`About Project`,
    para1:`4 Weeks / Dec, 2022 / Website`,
    para2:`Development`
  },
  section2:{
    title:`Deliverables`,
    para1:`Wireframes, Design System, Dark &`,
    para2:`Light mode UI design Coding`
  },
  section3:{
    title:`Our Role`,
    para1:`User experience user interface`,
    para2:`iconography, continued functionality`
  }
}



export default function Page() {
  return <PortfolioDetail detailObject={claclaws} delivery={projectDelivarables} bannerImage="/images/clashclaw.png" />
}