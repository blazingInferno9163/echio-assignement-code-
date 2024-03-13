import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="nav-bar">
      <div className="echio-logo">
        <img className="echio-logo-1" alt="" src="/echio-logo-1@2x.png" />
      </div>
      <nav className="contact-us-text">
        <nav className="exclude">
          <div className="home">Home</div>
          <div className="brands">Brands</div>
          <div className="influencers">Influencers</div>
          <div className="agency">Agency</div>
          <div className="service-provider">Service Provider</div>
          <div className="sixth-frame">
            <div className="studio">Studio</div>
          </div>
          <div className="team">Team</div>
          <div className="contact-us">Contact Us</div>
        </nav>
      </nav>
      <div className="nav-bar-inner">
        <button className="login-now-parent">
          <div className="login-now">Login Now</div>
          <img className="arrow-right-icon" alt="" src="/arrowright@2x.png" />
          <div className="arrowright-instance" />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
