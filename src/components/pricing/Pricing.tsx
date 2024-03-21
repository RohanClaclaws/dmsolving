import Banner from "../resuable/Banner";
import PricingCard from "./PricingCard";
import PricingCardCustom from "./PricingCardCustome";

const Pricing = () => {
  const basicPlan = [
    {
      isIncluded: false,
      name: "Domain Name"
    },
    {
      isIncluded: false,
      name: "Web Hosting"
    },
    {
      isIncluded: false,
      name: "Web Development"
    },
    {
      isIncluded: true,
      name: "Responsive Design"
    },
    {
      isIncluded: true,
      name: "Content Management System"
    },
    {
      isIncluded: true,
      name: "Website Auditing"
    },
  ];

  const advancedPlan = [
    {
      isIncluded: false,
      name: "Basic Plan"
    },
    {
      isIncluded: true,
      name: "Logo & Theme Design"
    },
    {
      isIncluded: true,
      name: "Appointment & In-site Search Function"
    },
    {
      isIncluded: true,
      name: "Content Creation"
    },
    {
      isIncluded: true,
      name: "Social Media Analytics Integration"
    },
    {
      isIncluded: true,
      name: "On Page SEO"
    },
  ];

  const proPlan = [
    {
      isIncluded: false,
      name: "Advanced Plan"
    },
    {
      isIncluded: true,
      name: "6-Month Maintenance"
    },
    {
      isIncluded: true,
      name: "Social Media Setup & Design"
    },
    {
      isIncluded: true,
      name: "Chat Function"
    },
  ];

  const customizable = {
    attributes: [
      {
        isIncluded: false,
        name: "Uniqueness"
      },
      {
        isIncluded: false,
        name: "User Experience"
      },
      {
        isIncluded: false,
        name: "Flexibility"
      },
      {
        isIncluded: false,
        name: "Performance Boost"
      },
      {
        isIncluded: false,
        name: "Professional Image"
      },
    ],
    uiUX: [
      {
        isIncluded: false,
        name: "User-Centric Design"
      },
      {
        isIncluded: false,
        name: "Visual Consistency"
      },
      {
        isIncluded: false,
        name: "Efficient Navigation"
      },
    ],
    frontDev: [
      {
        isIncluded: false,
        name: "Responsive Design"
      },
      {
        isIncluded: false,
        name: "Optimized Performance"
      },
      {
        isIncluded: false,
        name: "Cross-Browser Compatibility"
      },
    ],
    backDev: [
      {
        isIncluded: false,
        name: "Scalable Architecture"
      },
      {
        isIncluded: false,
        name: "Robust Security Measures"
      },
      {
        isIncluded: false,
        name: "Efficient Data Management"
      },
    ]
  };

  const basicPlan2 = [
    {
      isIncluded: false,
      name: "Digital Marketing Consultation"
    },
    {
      isIncluded: false,
      name: "Social Media Management"
    },
    {
      isIncluded: true,
      name: "Social Media Original Content Creation (Once Per Week On Three Platforms)"
    },
  ];

  const advancedPlan2 = [
    {
      isIncluded: false,
      name: "Basic Plan"
    },
    {
      isIncluded: true,
      name: "Social Media Original Content Creation (Twice Per Week On Three Platforms)"
    },
    {
      isIncluded: true,
      name: "Pay Per Click Advertising"
    },
    {
      isIncluded: true,
      name: "Website Content Creation"
    },
    {
      isIncluded: true,
      name: "Conversion Rate Analytics"
    },
  ]

  const proPlan2 = [
    {
      isIncluded: false,
      name: "Advanced Plan"
    },
    {
      isIncluded: true,
      name: "Social Media Original Content Creation (Five Contents Per Week On Three Platforms)"
    },
    {
      isIncluded: true,
      name: "Visual Content Creation"
    },
    {
      isIncluded: true,
      name: "Search Engine Optimization"
    },
    {
      isIncluded: true,
      name: "Performance Analysis"
    },
  ];

  return (
    <div className="bg-black">
      <Banner heading="Pricing" subheading="Home" />
      <div className="layout">
        <h2 className="font-syne font-[700] sm:text-[42px] text-[32px] text-center text-white py-20">
          Find the Right Solution for your business
        </h2>
        <span className="font-syne text-white font-[700] sm:text-[42px] text-[32px] pricing-lg:text-start text-center w-full">01 / Web Design</span>
        <div className="flex justify-evenly items-center gap-5 py-10 pricing-lg:flex-row flex-col ">
          <PricingCard heading="Basic Plan" price={699} attributes={basicPlan} />
          <PricingCard heading="Advanced Plan" price={1999} attributes={advancedPlan} />
          <PricingCard heading="PRO Plan" price={6999} attributes={proPlan} />
        </div>
        {/** Customizable */}
        <div className="flex justify-center">
          <PricingCardCustom heading="Customize" price={9999} attributes={customizable.attributes} uiUX={customizable.uiUX} frontDev={customizable.frontDev} backDev={customizable.backDev} />
        </div>
        {/** Customizable  END */}
      </div>
      {/** Web 2 */}
      <div className="layout py-20 pt-40">
        <span className="font-syne text-white font-[700] sm:text-[42px] text-[32px] pricing-lg:text-start text-center w-full">02 / Web Design</span>
        <div className="flex justify-evenly items-center gap-5 py-10 pricing-lg:flex-row flex-col ">
          <PricingCard heading="Basic Plan" price={999} attributes={basicPlan2} />
          <PricingCard heading="Advanced Plan" price={1999} attributes={advancedPlan2} />
          <PricingCard heading="PRO Plan" price={3999} attributes={proPlan2} />
        </div>
        {/** Customizable */}
        {/* <div className="flex justify-center">
          <PricingCardCustom heading="Customize" price={9999} attributes={customizable.attributes} uiUX={customizable.uiUX} frontDev={customizable.frontDev} backDev={customizable.backDev} />
        </div> */}
        {/** Customizable  END */}
      </div>
    </div>
  )
}

export default Pricing;