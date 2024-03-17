import "./FooterBase.css";

const footer = () => {
  return (
    <footer className="footer-base flex justify-center items-center mx-6 md:mx-20 py-10 md:py-20">
      <div className="footer">
        <div className="echio-logo1">
          <div className="echio-logo2">
            <img
              className="echio-white-bg-logo-1"
              loading="lazy"
              alt=""
              src="/echio-white-bg-logo-1@2x.png"
            />
          </div>
          <button className="secondary-button9">
            <div className="more-details4">Stay in Touch</div>
            <img
              className="arrow-right-icon10"
              alt=""
              src="/arrowright@2x.png"
            />
          </button>
        </div>
        <div className="feature-list">
          <div className="company-name">
            <h2 className="disclaimer">Disclaimer</h2>
            <div className="companylogo">
              <div className="echiofy-private-limited-container">
                <p className="echiofy-private-limited">
                  Echiofy Private Limited is an unlisted private company
                  incorporated on 25 March 2022. It is classified as a
                </p>
                <p className="private-limited-company">
                  private limited company and is located in Delhi. The Corporate
                  Identification Number (CIN) of Echiofy Private
                </p>
                <p className="limited-is-u72900dl2022ptc3955">
                  Limited is U72900DL2022PTC395579.
                </p>
                <p className="p"></p>
                <p className="the-registered-office">
                  The registered office of Echiofy Private Limited is at 303,
                  Tower B, Logix Technova, Sector 132, Noida-
                </p>
                <p className="p1">201301.</p>
              </div>
            </div>
          </div>
          <div className="blogsandmore">
            <h2 className="company">Company</h2>
            <div className="companyinfo">
              <div className="blogs">Blogs</div>
              <div className="team1">Team</div>
              <div className="about">About</div>
              <div className="partner-with-us">Partner with Us</div>
              <div className="our-case-study">Our Case Study</div>
              <div className="our-journey">Our Journey</div>
            </div>
          </div>
          <div className="emailcontact">
            <h2 className="features">Features</h2>
            <div className="brands-parent">
              <div className="brands1">Brands</div>
              <div className="influencers2">Influencers</div>
              <div className="studio2">Studio</div>
              <div className="agency3">Agency</div>
              <div className="our-services1">Our Services</div>
            </div>
          </div>
          <div className="policy-section">
            <h2 className="policy">Policy</h2>
            <div className="privacypolicy">
              <div className="privacy-policy1">Privacy Policy</div>
              <div className="terms-conditions">{`Terms & Conditions`}</div>
            </div>
          </div>
          <div className="contactusemail">
            <h2 className="contact-us1">Contact Us</h2>
            <div className="followsocialus">
              <div className="call-us">Call Us</div>
              <div className="email-us">Email Us</div>
              <div className="bangalore-india">Bangalore, India</div>
            </div>
          </div>
        </div>
        <div className="echiofy">
          <div className="copyright-2023-echiofy">
            201301. © Copyright 2024 Echiofy Private Limited. All Rights
            Reserved.
          </div>
          <div className="follow-links">
            <div className="follow-us-on1">Follow Us On</div>
            <div className="social-links">
              <img
                className="social-icons"
                loading="lazy"
                alt=""
                src="/social-icons.svg"
              />
              <div className="social-icons1">
                <img className="gradient-icon" alt="" src="/gradient@2x.png" />
                <img
                  className="path-icon"
                  loading="lazy"
                  alt=""
                  src="/path.svg"
                />
                <img className="gradient-icon1" alt="" src="/gradient@2x.png" />
              </div>
              <img className="social-icons2" alt="" src="/social-icons-1.svg" />
              <img className="social-icons3" alt="" src="/social-icons-2.svg" />
              <img className="social-icons4" alt="" src="/social-icons-3.svg" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
