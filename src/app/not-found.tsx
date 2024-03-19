import PageNotFound from "@/components/pagenotfound/PageNotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: '404 Not Found | DMsolving',
    description: 'Sorry, we cannot find this page'
}
const NotFoundPage=()=>{
    return (
        <PageNotFound/>
    )
}

export default NotFoundPage;