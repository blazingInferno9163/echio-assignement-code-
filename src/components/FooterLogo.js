import NavBar from "./NavBar";
import "./FooterLogo.css";

const FooterLogo = () => {
  return (
    <div className="footer-logo">
      <NavBar />
      <div className="makes-you-viral-wrapper">
        <b className="makes-you-viral-container">
          <p className="makes-you">
            <span>
              <span className="span">
                <span className="span1">{` `}</span>
              </span>
            </span>
            <span className="makes-you1">
              <span>
                <span className="makes-you2">Makes You</span>
                <span className="span2">{` `}</span>
              </span>
            </span>
          </p>
          <p className="viral">
            <span className="viral1">
              <span className="viral2">Viral.</span>
            </span>
          </p>
        </b>
      </div>
      <div className="company-text">
        <div className="header-logo-container">
          <div className="dive-into-echios">
            Dive into Echio’s AI-driven ecosystem and explore the intriguing
            possibilities lying with redefined influencer experience for all.
          </div>
          <img
            className="dfa92892fbac7c6f504fd2a52e55cb-icon"
            loading="lazy"
            alt=""
            src="/4dfa92892fbac7c6f504fd2a52e55cb5removebgpreview-1@2x.png"
          />
        </div>
        <div className="partnerships-frame">
          <button className="login-now-group">
            <div className="login-now1">Get Started</div>
            <img
              className="arrow-right-icon1"
              alt=""
              src="/arrowright-1@2x.png"
            />
            <div className="text" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterLogo;
