import PortfolioDetail from "@/components/portfoliodetail/PortfolioDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Clash of the Claws | Dmsolving',
  description: 'Learn more about Clash of th Claws and how we process in Dmsolving'
}

export default function Page() {
  return <PortfolioDetail/>
}