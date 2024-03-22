import PortfolioDetail from "@/components/portfoliodetail/PortfolioDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Clash of the Claws | Dmsolving',
  description: 'Learn more about Clash of th Claws and how we process in Dmsolving'
}

const claclaws={
  image1:'',
  image2:'',
  image3:'',
  heading1:{
    title:'',
    description:''
  },
  heading2:{
    title:'',
    description:''
  },
  heading3:{
    title:'',
    description:''
  },
  heading4:{
    title:'',
    description:''
  },
  maindescription:''

}



export default function Page() {
  return <PortfolioDetail detailObject={claclaws}/>
}