import Appbar from "../components/Appbar";
import Footer from "../components/Footer";
import { LandingLayout } from "../layouts";

const Home = () => {
  return (
    <LandingLayout>
      <Appbar forBoth />
      <div className="h-4/6 flex flex-col items-center justify-center">
        <h1 className="text-center w-1/2 text-white text-5xl font-extrabold">
          A decentralised platform for fans and creators
        </h1>
        <p className="text-center w-1/2 text-white mt-6">
          Let your most passionate fans support your creative work via monthly
          membership or support your favourite creator anonymously!
        </p>
        <div className="flex">
          <button className="h-12 bg-white text-black px-12 rounded-md m-4">
            For Fans
          </button>
          <button className="h-12 bg-white text-black px-12 rounded-md m-4">
            For Creators
          </button>
        </div>
      </div>
      <Footer />
    </LandingLayout>
  );
};

export default Home;
