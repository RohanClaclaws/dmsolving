import { Inter,Syne,DM_Sans } from "next/font/google";
export const inter = Inter({ subsets: ["latin"] });

export const syne=Syne({
    subsets:["latin"],
    variable:'--font-syne',
    weight:['400','600','700']
})

export const dmsans=DM_Sans({
    variable:'--font-dmsans',
    subsets:['latin-ext']
})
