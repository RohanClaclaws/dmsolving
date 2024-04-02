import ServicesDetail from "@/components/servicesdetail/ServicesDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Graphic Design - Services | Dmsolving',
  description: 'Learn more about Graphic Design here at Dmsolving'
}

const servciesDetailObject={
  heading1:{
    title:`Graphic Design`,
    para:`Our graphic design team who are skilled in typography, color theory, layout design, and image editing are capable of creating visually stunning solutions for print, digital, and multimedia platforms. They collaborate with clients to develop brand identity, print, and digital collateral, delivering high-quality designs. `,
  },
  mainImage:`/images/GraphicImage1.png`,
  bullet1:`Visual Identity Development`,
  bullet2:`Digital Design`,
  bullet3:`Brand Collateral Design`,
  bullet4:`Illustration`,
  bullet5:`Typography`,
  bullet6:`Motion Graphics & Animationg`,
  bannerImage:`/images/breadcrumbGraphic.png`,

  heading2:{
    title:`We connect design with technology.`,
    para:`We will craft the bespoke illustrations, customize product shots, & design/develop animations. We believe in creating meaningful digital experiences.`
  },
  section1:{
    image:`/images/GraphicImage100.png`,
    title:`Defining Desgin`,
    para:`Our guiding principle is user-centric design, prioritizing user needs and behaviors to create intuitive, engaging experiences. We prioritize research, iteration, and testing to create visually appealing, functional, and user-friendly products and services`,
    bullet1:`Customer Feedback`,
    bullet2:`Market Analysis`,
    bullet3:`Data-Driven`,
    bullet4:`User Journeys`
  },
  section2:{
    image:`/images/GraphicImage3.png`,
    title:`Technical Design`,
    para:`Our Technical expertise involves proficiency in various software tools and technologies for creating and manipulating visual elements. We can efficiently execute design projects across different mediums while adhering to industry standards and best practices.`,
    bullet1:`Image editing`,
    bullet2:`Typography`,
    bullet3:`Layout Design`,
    bullet4:`Scaling & Manipulation`,
    bullet5:`Asset & color management`
  },
  section3:{
    image:`/images/GraphicImage4.png`,
    title:`Continuous Refinement`,
    para:`Our Graphic Design process involves continuous testing and iteration, focusing on user feedback and data analysis to refine designs and meet evolving needs, delivering measurable results for clients and stakeholders.`,
    bullet1:`Revision & Improvement`,
    bullet2:`Collaboration`,
    bullet3:`Version Control`,
    bullet4:`Customer Satisfaction `
  }
}

export default function Page() {
  return <>
    <ServicesDetail detailObject={servciesDetailObject} mainHeading="Graphic Design"/>
  </>
}