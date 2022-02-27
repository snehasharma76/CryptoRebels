import Appbar from "../components/Appbar";
import Button from "../components/Common/Button";
import Footer from "../components/Footer";
import { LandingLayout } from "../layouts";
import { routes } from "../utils/routes";
import { AppInfo } from "../../info";
import FeatureCard from "../components/Common/FeatureCard";

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
          <Button text="For Fans" url={routes.FOR_FANS} />
          <Button text="For Creators" url={routes.FOR_CREATORS} />
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-[36px] font-bold mb-[30px]">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 mb-[60px] gap-10">
          {AppInfo.features.map(({ title, description }, i) => (
            <FeatureCard title={title} description={description} key={i} />
          ))}
        </div>
      </div>
      <Footer />
    </LandingLayout>
  );
};

export default Home;
