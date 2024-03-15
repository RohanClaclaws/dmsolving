import Portfolio from "@/components/portfolio/Portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Portfolio | Dmsolving',
  description: "Dmsolving's robust portfolio"
}

export default function Page() {
  return <Portfolio />
}