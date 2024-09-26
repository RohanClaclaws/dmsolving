import Image from "next/image";
import Link from "next/link";

const ThirdSection = () => {

    const answersData=[
        {
            icon:"/images/aiIcon1.png",
            title:"What Is an AI marketing Agency?",
            content:"AI marketing agencies commonly use advanced tactics and combine artificial intelligence technologies with automated marketing operations based on data analysis and customer behaviors to make marketing decisions."
        },
        {
            icon:"/images/aiIcon2.png",
            title:"Does NoGood have expertise in AI marketing?",
            content:"It’s one of our specialties. NoGood is a leading integrated AI growth marketing partner for some of the world’s most competitive AI brands. We created a Reforge course to share our learnings from navigating answer engine optimization."
        },
        {
            icon:"/images/aiIcon3.png",
            title:"What Makes AI Marketing Unique?",
            content:"AI marketing commands a mastery of AI capability with an emphasis on data-driven insights, and highlighting personalization and adaptability while showcasing innovation and future potential."
        },
        {
            icon:"/images/aiIcon4.png",
            title:"What Are the Best Channels for AI Marketing?",
            content:"It’s different for every brand. We’ve seen recurring success with organic search, Google Ads, LinkedIn Ads, Meta Ads, organic social, conversion rate optimization, and email."
        },
    ];

    const saleData=[
        "Concierge onboarding","Exclusive team features","VIP support","Custom compliance","Custom pricing","Dedicated Account & Success Manager"
    ];

    return (
        <section className=" bg-black pt-[100px] overflow-x-hidden">
            <div className="layout">
            {/* Part 1 */}
            <div className=" w-full relative">
                <div className="h-[1230px] min-w-[1845px]  bg-radial bg-opacity-5 absolute left-[-800px] top-[200px]"></div>
                <div className="h-[1230px] min-w-[1945px]  bg-radial bg-opacity-5 absolute right-[-400px] top-[-500px]"></div>
                <h2 className="w-full font-syne font-normal lg:text-[48px] md:text-[34px] text-[30px] leading-[64px]  text-center bg-clip-text text-transparent bg-gradient-to-r from-[#5CC3FA] to-[#9E6EE6]">
                    You&apos;ve got the questions,<br/>we&apos;ve got the answers.
                </h2>
                <div className="mt-[80px] w-[90%] mx-auto flex flex-wrap justify-between gap-y-[194px]">
                    {
                        answersData.map((answer,idx)=>(
                            <div key={idx+answer.title} className="w-full lg:w-[48%] flex gap-x-[20px] lg:flex-row flex-col">
                                <Image src={answer.icon} alt="Dmsolving AI" width={48} height={52} className="w-[48px] h-[52px]"/>
                                <div>
                                    <h4 className="font-syne text-[24px] leading-[32px] text-white mt-4 lg:mt-0">
                                        {answer.title}
                                    </h4>
                                    <p className="font-syne text-[24px] leading-[40px] text-white mt-[20px]">
                                        {answer.content}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Part 2 */}
            <div className="w-full mt-[300px] relative">
            <div className="h-[1230px] min-w-[1945px]  bg-radial4 bg-opacity-5 absolute right-[-800px] top-[-300px]"></div>
                <h2 className="text-[48px] leading-[64px] font-syne text-center w-full text-white">What customers are saying...</h2>
                <div className="flex justify-between gap-y-[30px] flex-col lg:flex-row w-full mt-[64px]">
                    <div className="lg:w-[47%] w-full flex flex-col bg-gradient-to-r from-[#FFFFFF26] to-[#FFFFFF1A] rounded-[12px] p-[32px]">
                        <Image src="/images/popl.png" alt="" width={62} height={31} className="w-[62px] h-[31px] mb-[48px]"/>
                        <p className="lg:text-[32px] text-[24px] lg:leading-[48px] leading-[30px] font-syne text-white w-full mb-[88px]">Dmsolving plays a huge role for my team. We use features like Reminders, Send Later, and Snippets to ensure fewer things fall through the cracks, like follow ups with leads.</p>
                        <div className="flex flex-row ">
                            <Image src="/images/reviewprofile1.png" alt="" width={48} height={48} className="w-[48px] h-[48px]"/>
                            <div className="ml-[24px]">
                                <h5 className="font-syne text-[16px] leading-[24px] text-white">Caroline Miller</h5>
                                <p className="font-syne text-[16px] leading-[24px] text-[#cccccc]">Vice President of Sales</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[47%] w-full bg-gradient-to-r from-[#FFFFFF26] to-[#FFFFFF1A] rounded-[12px] p-[32px]">
                        <Image src="/images/deel.png" alt="" width={70} height={31} className="w-[70px] h-[31px] mb-[48px]"/>
                        <p className="lg:text-[32px] text-[24px] lg:leading-[48px] leading-[30px] font-syne text-white w-full mb-[88px]">With Dmsolving, I like that I can see who opened my email within the last few minutes. It allows me to be more intelligent with my follow ups and to reach people at the right time. </p>
                        <div className="flex flex-row ">
                            <Image src="/images/reviewprofile2.png" alt="" width={48} height={48} className="w-[48px] h-[48px]"/>
                            <div className="ml-[24px]">
                                <h5 className="font-syne text-[16px] leading-[24px] text-white">Paul Huczek</h5>
                                <p className="font-syne text-[16px] leading-[24px] text-[#cccccc]">Senior Account Executive</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* part 3 */}
            <div className="mt-[70px]  w-full pt-[64px] pb-[272px] lg:pb-[192px] rounded-[12px] bg-gradient-to-r from-[#FFFFFF26] to-[#FFFFFF1A] relative overflow-hidden">
            <div className="h-[656px] min-w-[1312px]  bg-radial2 bg-opacity-5 absolute inset-0 z-[1]"></div>
                <h2 className="font-syne lg:text-[48px] lg:leading-[64px] text-[24px] leading-[32px] text-center w-full lg:w-[30%] mx-auto text-white">Bring Dmsolving to your team today</h2>
                <div className="mt-[64px]  w-[50%] mx-auto flex flex-row flex-wrap justify-between gap-y-[24px]">
                    {
                        saleData.map((sale,idx)=>(
                            <div key={idx+sale} className="flex w-full lg:w-[50%]">
                                <Image src="/images/ai-mark.png" alt="Dmsolving Mark" width={29} height={32} className="w-[29px] h-[32px]"/>
                                <p className="font-syne text-white lg:text-[24px] lg:leading-[40px] text-[18px] leading-[30px] ml-2">{sale}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="mt-[64px] flex flex-col lg:flex-row mx-auto w-fit gap-x-[16px] gap-y-[16px] absolute z-[2] bottom-[64px] left-1/2 -translate-x-1/2">
                    <Link href="/contact-us" className="rounded-[6px] w-[189px] h-[64px]  font-syne justify-center flex items-center text-[24px]
                     text-white bg-gradient-to-r from-[#9E6EE5] to-[#FA75F8]">Get Started</Link>
                     <Link href="/contact-us" className="rounded-[6px] w-[189px] h-[64px]  font-syne justify-center flex items-center text-[24px]
                     text-white bg-gradient-to-b from-[#FA75F8] to-[#9E6EE5]">Talk To Sales</Link>
                </div>
            </div> 
            </div>
        </section>
    )
}

export default ThirdSection