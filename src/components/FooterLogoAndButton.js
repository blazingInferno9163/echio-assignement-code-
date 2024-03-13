import "./FooterLogoAndButton.css";

const FooterLogoAndButton = () => {
  return (
    <div className="footer-logo-and-button">
      <div className="disclaimer-frame">
        <div className="blogs-team">
          <div className="brands-influencers-studio">
            <h1 className="influencers1">Influencers</h1>
            <div className="yes-influencers-we">
              Yes influencers, we have an exclusive place just for you, with not
              just catching up with the trends but creating ones, facilitating
              your growth, taking care of your everyday requirements and topping
              it off with monetization.
            </div>
          </div>
          <div className="contact-us-call-email-frame">
            <button className="view-services-parent">
              <div className="view-services">View Services</div>
              <img
                className="arrow-right-icon4"
                alt=""
                src="/arrowright-3@2x.png"
              />
              <div className="brands-influencers-studio-agen" />
            </button>
            <button className="secondary-button4">
              <div className="more-details1">More Details</div>
              <img
                className="arrow-right-icon5"
                alt=""
                src="/arrowright@2x.png"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="app-promo">
        <div className="follow-us-on">
          <img
            className="imockup-iphone-15-pro-max"
            loading="lazy"
            alt=""
            src="/imockup--iphone-15-pro-max@2x.png"
          />
        </div>
        <img
          className="app-promo-child"
          loading="lazy"
          alt=""
          src="/line-48.svg"
        />
      </div>
    </div>
  );
};

export default FooterLogoAndButton;
