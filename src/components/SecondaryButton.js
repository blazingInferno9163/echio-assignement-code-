import "./SecondaryButton.css";

const SecondaryButton = () => {
  return (
    <section className="secondary-button2">
      <div className="bg-gradient1">
        <div className="frame" />
      </div>
      <div className="multi-cards">
        <img className="disclaimer-icon" alt="" src="/disclaimer@2x.png" />
        <img className="multi-cards-child" alt="" src="/rectangle-446@2x.png" />
        <img
          className="multi-cards-item"
          loading="lazy"
          alt=""
          src="/rectangle-447@2x.png"
        />
        <img
          className="multi-cards-inner"
          loading="lazy"
          alt=""
          src="/rectangle-445@2x.png"
        />
      </div>
      <h1 className="brand">
        <b>Brand</b>
        <span>{` `}</span>
      </h1>
      <div className="automate-your-influencer">
        Automate your influencer marketing journey from day zero with the magic
        of data and AI, creating impact for your brand, tracking performance and
        achieving results.
      </div>
      <button className="login-now-container">
        <div className="login-now2">Brand Login</div>
        <img className="arrow-right-icon2" alt="" src="/arrowright-2@2x.png" />
        <div className="agency-info" />
      </button>
      <button className="secondary-button3">
        <div className="more-details">More Details</div>
        <img className="arrow-right-icon3" alt="" src="/arrowright@2x.png" />
      </button>
    </section>
  );
};

export default SecondaryButton;
