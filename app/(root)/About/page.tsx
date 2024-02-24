import AboutBanner from "@/components/About/AboutBanner/page";
import AboutCompany from "@/components/About/AboutCompany/page";
import AboutProjects from "@/components/About/AboutProjects/page";
import AboutTeam from "@/components/About/AboutTeam/page";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      {/*ABout Banner -- Start */}
      <AboutBanner />
      {/*ABout Banner -- End */}
      {/*ABout Company -- Start */}
      <div>
        <AboutCompany />
      </div>
      {/*About Company -- End */}
      {/*About Team -- Start */}
      <AboutTeam />
      {/*About Team -- End */}
      {/*About Projects -- Start */}
      <AboutProjects />
      {/*About Projects -- End */}
      <Footer />
    </div>
  );
};

export default About;
