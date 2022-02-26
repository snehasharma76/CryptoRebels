const LandingLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-50 bg-transparent">
        <img
          src="/static/landing-bg.svg"
          className="absolute top-0 left-0 h-full w-full object-cover z-[-1]"
        />
        {children}
      </div>
    </div>
  );
};

export default LandingLayout;
