import Appbar from "../components/Appbar";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import LandingLayout from "../layouts/LandingLayout";

const Creators = () => {
  return (
    <LandingLayout>
      <Appbar forFans />
      <div className="min-h-[870px] flex flex-col items-center justify-center">
        <h1 className="text-center max-w-[800px] text-white text-5xl font-extrabold">
          Follow your favourite creator anonymously.
        </h1>
        <p className="text-center max-w-[700px] text-white mt-6">
          Get access to exclusive content, community, and insight into your from
          your favourite creators
        </p>
        <div className="flex items-center justify-center space-x-4 mt-[60px]">
          <div className="flex items-center justify-center bg-white rounded-full text-lg p-[2px]">
            <input
              type="text"
              className="border-none outline-none pl-[32px] py-[16px] rounded-l-full text-[#040404]"
              placeholder="Find your favourite creator"
            />
            <button className="bg-[#040404]  py-[16px] px-[48px] font-semibold text-xl h-full rounded-full">
              Search
            </button>
          </div>
        </div>
      </div>
      <Explore />
      <Footer />
    </LandingLayout>
  );
};

export default Creators;
