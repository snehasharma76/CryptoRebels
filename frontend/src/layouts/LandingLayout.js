const LandingLayout = ({ children }) => {
  return (
    <div
      className="relative bg-[#040404] h-screen"
      //   style={{ backgroundColor: "#040404" }}
    >
      <img
        src="/static/ellipse_1.svg"
        alt="ellipse_1"
        className="absolute top-0 left-0"
      />
      <img src="/static/ellipse_2.svg" alt="ellipse_2" className="absolute" />
      <img
        src="/static/ellipse_3.svg"
        alt="ellipse_3"
        className="absolute bottom-0 right-0"
      />
      {children}
    </div>
  );
};

export default LandingLayout;
