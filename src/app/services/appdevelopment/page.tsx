import ServicesDetail from "@/components/servicesdetail/ServicesDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Mobile App Development - Services | Dmsolving',
  description: 'Learn more about mobile app development here at Dmsolving'
}

const servciesDetailObject={
  heading1:{
    title:`Mobile App Development`,
    para: `Our team of skilled developers is ready to turn your app dreams into reality, whether it’s an engaging mobile game or a robust enterprise application. We have the expertise to craft a wide variety of mobile apps, ensuring your vision comes to life seamlessly.`,
  },
  mainImage:`/images/mobile/m1.png`,
  bullet1:`DEO`,
  bullet2:`SEM`,
  bullet3:`SMM`,
  bullet4:`Content Marketing`,
  bullet5:`Email Marketing`,
  bullet6:`PPC Advertising`,
  bannerImage:`/images/mobile/m0.png`,

  heading2:{
    title:`What does web design include?`,
    para:`Digital marketing is a multifaceted approach aimed at maximizing your online presence and driving business growth. It encompasses a wide array of strategies and techniques, including search engine optimization (SEO) to enhance your visibility in search engine results, social media marketing for fostering meaningful connections with your audience, content creation and marketing to engage and inform, email marketing to nurture leads and maintain customer relationships, pay-per-click (PPC) advertising for targeted outreach, and data analytics to continually refine and optimize your strategies.`
  },
  section1:{
    image:`/images/mobile/m2.png`,
    title:`SEO`,
    para:`SEO is paramount in digital marketing, as it focuses on optimizing your online content to appear prominently in search engine results. It enhances visibility, drives organic traffic, and boosts brand recognition.`,
    bullet1:`Keywords`,
    bullet2:`Backlinks`,
    bullet3:`On-page Optimization`,
    bullet4:`Local SEO`
  },
  section2:{
    image:`/images/mobile/m3.png`,
    title:`Content Marketing`,
    para:`High-quality, relevant content is the lifeblood of digital marketing. It encompasses various forms, from blog posts and videos to social media updates and infographics. Content marketing builds trust, informs, and engages your audience, driving leads and conversions.`,
    bullet1:`Blogging`,
    bullet2:`Infographics`,
    bullet3:`Video Marketing`,
    bullet4:`Social Media Content`
  },
  section3:{
    image:`/images/mobile/m4.png`,
    title:`Data Analytics`,
    para:`Digital marketing relies on data-driven insights to measure and fine-tune strategies. Analyzing user behavior, conversion rates, and other metrics helps in understanding what works and where adjustments are needed, ensuring a more effective and efficient marketing approach.`,
    bullet1:`Traffic Analysis`,
    bullet2:`Conversion Tracking`,
    bullet3:`Customer Segmentation`,
    bullet4:`A/B Testing`
  }
}

export default function Page() {
  return <>
    <ServicesDetail detailObject={servciesDetailObject} mainHeading="Mobile App Development" />
  </>
}