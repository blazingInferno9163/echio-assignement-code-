import FooterLogo from "../components/FooterLogo";
import Label from "../components/Label";
import SecondaryButton from "../components/SecondaryButton";
import FooterLogoAndButton from "../components/FooterLogoAndButton";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Instance from "../components/Instance";
import FooterBase from "../components/FooterBase";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="agency-text">
        <div className="bg-gradient">
          <div className="secondary-button" />
        </div>
        <FooterLogo />
        <Label />
      </section>
      <SecondaryButton />
      <section className="login-frame">
        <div className="secondary-button1">
          <FooterLogoAndButton />
          <FrameComponent1 />
        </div>
      </section>
      <FrameComponent />
      <Instance />
      <FooterBase />
    </div>
  );
};

export default HomePage;
