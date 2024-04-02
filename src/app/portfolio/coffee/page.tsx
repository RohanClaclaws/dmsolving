import PortfolioDetail from "@/components/portfoliodetail/PortfolioDetail";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Coffee - Portfolio | Dmsolving',
    description: 'Learn more about Coffee and how we process in Dmsolving'
}

const Page = () => {
    const claclaws = {
        image1: `/images/mainPhotoCoffee.png`,
        image2: `/images/coffeeimage2.png`,
        image3: `/images/coffeeimage3.png`,
        heading1: {
            title: `Structuring the site`,
            description: `The website's structure was meticulously designed to ensure seamless navigation and optimal user engagement. Acting as the primary gateway, the homepage offers a comprehensive overview of CoffeeZone's offerings, featuring key features of our cafe experience. Sections like 'About Us' provide insight into our cafe's background, while our 'Menu' categorizes our delicious coffee blends and treats for easy exploration. The 'Cat Lounge' showcases captivating visuals, offering visitors a glimpse into our unique atmosphere. Lastly, the 'Contact Us' section provides convenient communication channels for inquiries and feedback, ensuring a satisfying experience for every visitor.`
        },
        heading2: {
            title: `Design System`,
            description: `Our design system at CoffeeZone has been meticulously crafted to harmonize with our brand's identity and enhance the overall user experience. We've carefully selected colors from our palette to maintain visual consistency and evoke the inviting ambiance of our cafe. Thoughtfully curated fonts ensure clarity and elegance across all platforms, enhancing readability for our visitors. Our clean and intuitive layouts facilitate seamless navigation, making it effortless for users to explore our diverse range of products and services. With every element carefully considered, our design system reflects our commitment to quality and excellence in every aspect of the CoffeeZone experience.`
        },
        heading3: {
            title: `Iconography`,
            description: `At CoffeeZone, our iconography serves as a cornerstone in elevating user experience and visual communication. Every icon within our design system is meticulously honed to embody our brand identity and values. Whether representing coffee blends or aiding navigation, each icon is crafted for intuitive recognition and seamless interaction. Consistency in style and color ensures a unified visual language across our website and brand materials. With purposeful and clear icons, we strive to enhance navigation, empower users, and elevate the overall aesthetic allure of our digital platform.`
        },
        heading4: {
            title: `UI components`,
            description: `In CoffeeZone, we predominantly utilize a palette of forest green, brown, and milk tea hues, crafting a serene and natural visual experience for our users. These colors permeate our interface, lending consistency and coherence to buttons, icons, and other UI components. Forest green instills depth and stability, while brown and milk tea hues add a sense of natural comfort. Together, these colors curate a captivating and authentically soothing user journey, showcasing the unique ambiance and style of our coffee shop.`
        },
        maindescription: `CoffeeZone is a lively coffee shop known for its premium blends and cozy atmosphere. Our task was to create a modern website reflecting our cafe's essence, showcasing our offerings, and ensuring seamless navigation. We integrated features like online ordering and highlighted our commitment to stray cat rescue, aiming to engage our audience while showcasing our web design expertise.
    `

    }

    const projectDelivarables = {
        section1: {
            title: `About Project`,
            para1: `3 Weeks / Aug, 2023 / Website `,
            para2: `Development`
        },
        section2: {
            title: `Deliverables`,
            para1: `Wireframes, Design System, Dark &`,
            para2: `Light mode UI design, Coding`
        },
        section3: {
            title: `Our Role`,
            para1: `User experience user interface`,
            para2: `iconography, continued functionality`
        }
    }

    const bottomPics = [
        "/images/coffeeimage4.png",
    ]

    const extraPara = {
        heading: `Project Deliverables`,
        para: ` We collaborated closely with CoffeeZone to design a modern and responsive website that artfully showcases their unique offerings and inviting atmosphere. Our primary focus was on optimizing the user experience, achieved through intuitive navigation menus, clear presentation of menu items, and seamless online ordering options. Each aspect of the website was meticulously crafted to enhance usability and ensure a seamless journey for visitors. Additionally, we emphasized CoffeeZone's distinctive brand image through captivating design elements and attention to detail, reinforcing its reputation as a welcoming destination for coffee enthusiasts. Our meticulous approach not only captivated users but also bolstered trust in the CoffeeZone brand, solidifying its position as a go-to coffee spot in the community.
        `
    }

    return (
        <div className="bg-black">
            <PortfolioDetail detailObject={claclaws} delivery={projectDelivarables} bannerImage="/images/coffeeBanner.png" prev="/portfolio/atet-auto" next="/portfolio/clash-of-the-claws">
                <div className="flex flex-col items-center gap-20 py-20">
                    {
                        bottomPics.map((e, idx) => {
                            return (
                                <Image src={e} key={idx} width={1217} height={620} className="w-[1217] h-[620]" alt="car" />
                            )
                        })
                    }
                    { extraPara &&
                        <div className=" max-w-[1004px] min-h-[400px mx-auto  ">
                            <h1 className="font-syne font-[600] text-[21px] 2xs:text-[26px] text-[#ffffff] pb-[30px] pl-[10px]">{extraPara.heading}</h1>
                            <p className="px-4 text-[#8fA8Bd] font-[400]  font-dmsans xs:text-[17px] sm:text-[20px] pb-[80px]">
                            {
                                extraPara.para
                            }
                            </p>
                        </div>
                    }
                </div>
            </PortfolioDetail>
        </div>
    )
}

export default Page;
