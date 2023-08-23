import "./LandingPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Title from "../../components/Title/Title";
import SocialHandles from "../../components/SocialHandles/SocialHandles";
import Moon from "../../components/Moon/Moon";

function LandingPage() {
   return (
      <div className="landing-main">
         <Navbar />
         <Title />
         <SocialHandles />


         <Moon />
      </div>
   );
}

export default LandingPage;
