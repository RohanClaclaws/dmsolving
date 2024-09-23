
import Hero from "@/components/ai/Hero";
import SecondSection from "@/components/ai/SecondSection";
import ThirdSection from "@/components/ai/ThirdSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'AI | Dmsolving',
  description: 'AI at Dmsolving'
}

export default function Page() {
  return <>
      <Hero/>
      <SecondSection/>
      {/* <ThirdSection/> */}
  </>
}