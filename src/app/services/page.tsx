import Services from "@/components/services/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Services | Dmsolving',
  description: 'Learn about our services and more'
}

export default function Page() {
  return <Services />
}