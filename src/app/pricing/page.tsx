import Pricing from "@/components/pricing/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing | Dmsolving',
  description: 'Learn about our pricing here at Dmsolving'
}

const Page = () => {
  return <Pricing />
}

export default Page;