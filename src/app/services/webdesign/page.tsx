import ServicesDetail from "@/components/servicesdetail/ServicesDetail";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Web Design - Services | Dmsolving',
  description: 'Learn web design their details and more'
}

const servciesDetailObject={
  heading1:{
    title:`Web Design`,
    para:`We focus on building creative design, innovative strategies, and cutting-edge technology to elevate your business presence.`,
  },
  mainImage:`/images/webdesign/d1.png`,
  bullet1:`Research`,
  bullet2:`UI Design`,
  bullet3:`UX Design`,
  bullet4:`Illustration`,
  bullet5:`Prototype`,
  bullet6:`Test`,
  bannerImage:`/images/breadcrumb2.png`,

  heading2:{
    title:`What does web design include?`,
    para:`A successful web design relies on visual appeal, user-friendliness, optimization, SEO, quality assurance, relevant content, and maintenance to create engaging first impressions, enhance user interactions, and adapt to evolving trends and user needs.`
  },
  section1:{
    image:`/images/webdesign/d2.png`,
    title:`Visual Design`,
    para:`Enhances the first impression, encourages exploration, and ensures that  users can easily find the information they seek.`,
    bullet1:`Aesthetics`,
    bullet2:`Consistency`,
    bullet3:`Branding`,
    bullet4:`Creativity`
  },
  section2:{
    image:`/images/webdesign/d3.png`,
    title:`Functionality`,
    para:`A responsive design ensures that the site adapts seamlessly to desktops, tablets, and mobile devices, expanding its reach to a broader audience.`,
    bullet1:`Usability`,
    bullet2:`Efficiency`,
    bullet3:`Interactivity`,
    bullet4:`Navigation`
  },
  section3:{
    image:`/images/webdesign/d4.png`,
    title:`Quality`,
    para:`Long-term maintenance and updates are essential for keeping the website  aligned with evolving technology, security, and user expectations.`,
    bullet1:`Reliability`,
    bullet2:`Performance`,
    bullet3:`Security`,
    bullet4:`Scalability`
  }
}

export default function Page() {
  return <>
    <ServicesDetail detailObject={servciesDetailObject} mainHeading="Web Design" />
  </>
}