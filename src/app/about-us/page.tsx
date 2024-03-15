import About from "@/components/about-us/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Us | Dmsolving',
  description: 'Learn more about Dmsolving'
}

export default function Page() {
  return <About />
}