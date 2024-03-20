import PortfolioDetail from "@/components/portfoliodetail/PortfolioDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Portfolio Details | Dmsolving',
  description: 'Learn more about Portfolio details and how we process in Dmsolving'
}

export default function Page() {
  return <PortfolioDetail/>
}