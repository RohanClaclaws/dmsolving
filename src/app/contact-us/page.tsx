import Contact from "@/components/contact-us/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Us | Dmsolving',
  description: 'Contact Us at Dmsolving'
}

export default function Page() {
  return <Contact />
}