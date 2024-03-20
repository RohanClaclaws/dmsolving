
import GlobalBanner from "../resuable/GlobalBanner";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";

const About = () => {
  return (
    <div>
      <GlobalBanner bread='about' />
      <div className="bg-black">
        <Section1 />

        <Section2 />

        <Section3 />

        <Section4/>

       
      </div>
    </div>
  )
}

export default About;