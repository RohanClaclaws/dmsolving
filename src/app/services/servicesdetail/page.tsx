import ServicesDetail from "@/components/servicesdetail/ServicesDetail";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Services Detail | Dmsolving',
  description: 'Learn about our services adn their details and more'
}

export default function Page() {
  return <>
    <ServicesDetail/>
  </>
}