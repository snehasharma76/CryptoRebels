import { useRouter } from "next/router";
import Appbar from "../../components/Appbar";
import Button from "../../components/Common/Button";
import ProfilePostCard from "../../components/Common/ProfilePostCard";
import FeatherIcon from "../../components/FeatherIcon";
import Footer from "../../components/Footer";
import { LandingLayout } from "../../layouts";

const Profile = () => {
  const router = useRouter();
  const { username } = router.query;
  const profileUrl =
    "https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image-300x300.jpeg";

  return (
    <div className="max-w-[1440px] mx-auto px-[32px] md:px-[64px] lg:px-[120px]">
      <Appbar forCreators />
      <div className="">
        <figure className="flex">
          <img
            src={profileUrl}
            alt="profilePic"
            className="w-[220px] h-auto rounded-md"
          />
          <figcaption className="ml-9">
            <h1 className="text-4xl leading-[54px] font-semibold">
              {username}
            </h1>
            <p className="text-lg leading-7 color-[#BCBCBC]">
              Lorem ipsum dolor lorem ipsum lorem dolor
            </p>
            <p className="text-[16px] leading-5">
              <b className="font-semibold">Membership fee: </b>3{" "}
              <span>CELO</span>/month
            </p>
            <div className="flex my-4">
              <div className="flex flex-col items-center justify-center my-2 p-4 bg-neutral-900 rounded-md">
                <h1 className="text-lg font-semibold">300</h1>
                <p className="text-[14px]">Private Posts</p>
              </div>
              <div className="flex flex-col items-center justify-center mx-4 my-2 p-4 bg-neutral-900 rounded-md">
                <h1 className="text-lg font-semibold">2.1 K</h1>
                <p className="text-[14px]">Supporters</p>
              </div>
            </div>
          </figcaption>
        </figure>
        <div className="my-8">
          <h3 className="text-center font-bold text-[36px] my-4">Posts</h3>
          <div className="relative">
            {/* START: mask */}
            <div className="bg-black opacity-30 h-full w-full backdrop-blur-2xl absolute z-10"></div>
            {/* END: mask */}

            <div className="absolute z-20 m-auto flex flex-col align-middle justify-center text-center w-full h-[600px]">
              {/* <div className="bg-slate-300"> */}
              <h1 className="text-[36px] font-bold">
                Take a membership now to view <br /> exclusive contents from{" "}
                {username}
              </h1>
              <div className="flex justify-center my-4">
                <Button text="Support Now" url={"/payment"} />
              </div>
              {/* </div> */}
            </div>
            <div className="flex flex-wrap justify-between">
              {Array(4)
                .fill(0)
                .map((i, index) => (
                  <ProfilePostCard key={index} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
