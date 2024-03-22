import ServicesDetail from "@/components/servicesdetail/ServicesDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Digital Marketing - Services | Dmsolving',
  description: 'Learn more about digital marketing here at Dmsolving'
}

const servciesDetailObject={
  heading1:{
    title:`Digital Marketing`,
    para:`Our team of experienced developers can make any app you desire, from mobile games to enterprise apps and everything in between. `,
  },
  mainImage:`/images/digitalMarketing/dmMain.png`,
  bullet1:`DEO`,
  bullet2:`SEM`,
  bullet3:`SMM`,
  bullet4:`Content Marketing`,
  bullet5:`Email Marketing`,
  bullet6:`PPC Advertising`,
  bannerImage:`/images/breadcrumb2.png`,

  heading2:{
    title:`What does web design include?`,
    para:`Digital marketing is a multifaceted approach aimed at maximizing your online presence and driving business growth. It encompasses a wide array of strategies and techniques, including search engine optimization (SEO) to enhance your visibility in search engine results, social media marketing for fostering meaningful connections with your audience, content creation and marketing to engage and inform, email marketing to nurture leads and maintain customer relationships, pay-per-click (PPC) advertising for targeted outreach, and data analytics to continually refine and optimize your strategies.`
  },
  section1:{
    image:`/images/digitalMarketing/d1.png`,
    title:`SEO`,
    para:`SEO is paramount in digital marketing, as it focuses on optimizing your online content to appear prominently in search engine results. It enhances visibility, drives organic traffic, and boosts brand recognition.`,
    bullet1:`Keywords`,
    bullet2:`Backlinks`,
    bullet3:`On-page Optimization`,
    bullet4:`Local SEO`
  },
  section2:{
    image:`/images/digitalMarketing/d2.png`,
    title:`Content Marketing`,
    para:`High-quality, relevant content is the lifeblood of digital marketing. It encompasses various forms, from blog posts and videos to social media updates and infographics. Content marketing builds trust, informs, and engages your audience, driving leads and conversions.`,
    bullet1:`Blogging`,
    bullet2:`Infographics`,
    bullet3:`Video Marketing`,
    bullet4:`Social Media Content`
  },
  section3:{
    image:`/images/digitalMarketing/d3.png`,
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
    <ServicesDetail detailObject={servciesDetailObject} mainHeading="Digital Marketing"/>
  </>
}