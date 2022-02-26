import Appbar from "../components/Appbar";
import Button from "../components/Common/Button";
import Footer from "../components/Footer";
import { LandingLayout } from "../layouts";

const Home = () => {
  return (
    <LandingLayout>
      <Appbar forBoth />
      <div className="min-h-[870px] flex flex-col items-center justify-center">
        <h1 className="text-center max-w-[800px] text-white text-5xl font-extrabold">
          A decentralised platform for fans and creators
        </h1>
        <p className="text-center max-w-[700px] text-white mt-6">
          Let your most passionate fans support your creative work via monthly
          membership or support your favourite creator anonymously!
        </p>
        <div className="flex items-center justify-center space-x-4 mt-[60px]">
          <Button text="For Fans" url="/fans" />
          <Button text="For Creators" url="/creators" />
        </div>
      </div>
      <Footer />
    </LandingLayout>
  );
};

export default Home;
