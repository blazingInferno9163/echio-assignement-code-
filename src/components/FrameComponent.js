import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <section className="bg-gradient-parent">
      <div className="bg-gradient2">
        <div className="header-frame" />
      </div>
      <div className="text-frame">
        <div className="instance-parent">
          <div className="instance">
            <h1 className="studio1">Studio</h1>
          </div>
          <div className="a-place-for">
            A place for executing what's possible, our studio is ready to meet
            every requirement of the content creation journey along with special
            catering to brand’s advertising requirements
          </div>
        </div>
      </div>
      <div className="image-parent">
        <img className="image-icon" alt="" src="/image@2x.png" />
        <img className="image-icon1" alt="" src="/image@2x.png" />
        <div className="frame-child" />
        <div className="frame-item" />
        <img className="image-icon2" alt="" src="/image-2@2x.png" />
      </div>
    </section>
  );
};

export default FrameComponent;
