// import Image from "next/image";

import Home from "@/components/home/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Dmsolving',
  description: 'Dmsolving is a digital marketing company who can do websites for you depending on your needs'
}

export default function HomePage() {
  return <Home />
}
