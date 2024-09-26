import Hero from "@/components/ai/Hero";
import SecondSection from "@/components/ai/SecondSection";
import ThirdSection from "@/components/ai/ThirdSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'AI | Dmsolving',
  description: 'AI at Dmsolving'
}

export default function Page() {
  return <div className="bg-no-repeat bg-cover bg-black bg-center">
     <div className="layoutt">
      <Hero/>
      <SecondSection/>
      <ThirdSection/>
      {/* comment */}
  </div>
  </div>
}
