import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Appbar from "../../components/Appbar";
import Button from "../../components/Common/Button";
import ProfilePostCard from "../../components/Common/ProfilePostCard";
import FeatherIcon from "../../components/FeatherIcon";
import Footer from "../../components/Footer";
import { useWeb3 } from "../../contexts/Web3Context";
import { LandingLayout } from "../../layouts";

const dummyData = {
  postName: "Please subscribe rather than trying to hack us with html, lol",
  postDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
  image:
    "https://images.pexels.com/photos/2115217/pexels-photo-2115217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
};

const Profile = () => {
  const {
    web3,
    getUserByAddress,
    Patreon,
    subscribeToCreator,
    address: userAddress,
  } = useWeb3();
  const router = useRouter();
  const { address } = router.query;

  const [creator, setCreator] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (address && Patreon) getCreatorData();
  }, [address, Patreon]);

  const getCreatorData = async () => {
    const data = await getUserByAddress(address);
    setPosts(data?.[0] ?? []);
    setCreator(data?.[1] ?? {});
  };

  return (
    <LandingLayout>
      <Appbar forCreators />
      {creator ? (
        <div className="mt-[60px]">
          <figure className="flex">
            <img
              src={
                creator?.image ??
                "https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image-300x300.jpeg"
              }
              alt="profilePic"
              className="w-[256px] h-[256px] object-center rounded-md object-cover"
            />
            <figcaption className="ml-9">
              <h1 className="text-4xl leading-[54px] font-semibold">
                {creator?.username}
              </h1>
              <p className="text-white pb-[10px]">{creator?.userAddress}</p>
              <p className="text-lg leading-7 color-[#BCBCBC]">
                {creator?.description}
              </p>
              <p className="text-[16px] leading-5">
                <b className="font-semibold">Membership fee: </b>
                {web3 &&
                  web3.utils
                    .fromWei(creator?.amount.toString())
                    .toString()}{" "}
                <span>CELO</span>
                /month
              </p>
              <div className="flex my-4">
                <div className="flex flex-col items-center justify-center my-2 p-4 bg-neutral-900 rounded-md">
                  <h1 className="text-lg font-semibold">{posts?.length}</h1>
                  <p className="text-[14px]">Private Posts</p>
                </div>
                <div className="flex flex-col items-center justify-center mx-4 my-2 p-4 bg-neutral-900 rounded-md">
                  <h1 className="text-lg font-semibold">
                    {creator?.subscribers?.length}
                  </h1>
                  <p className="text-[14px]">Supporters</p>
                </div>
              </div>
            </figcaption>
          </figure>
          <div className="my-8">
            <h3 className="text-center font-bold text-[36px] my-4">Posts</h3>
            <div className="relative">
              {creator?.subscribers?.indexOf(userAddress) === -1 &&
                creator.userAddress !== userAddress && (
                  <div className="z-50">
                    <div className="bg-black/10 rounded-[6px] h-full w-full backdrop-blur-2xl backdrop-filter absolute z-10"></div>
                    <div className="absolute z-20 m-auto flex flex-col align-middle justify-center text-center w-full h-[600px]">
                      {/* <div className="bg-slate-300"> */}
                      <h1 className="text-[36px] font-bold">
                        Take a membership now to view <br /> exclusive contents
                        from {creator?.username}
                      </h1>
                      <div className="flex justify-center my-4">
                        <button
                          onClick={() =>
                            subscribeToCreator(creator?.id, creator?.amount)
                          }
                          className="px-[24px] py-[12px] bg-white text-black rounded-[6px] font-bold text-[18px]"
                        >
                          Subscribe
                        </button>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                )}
              <div className="flex flex-wrap justify-between z-1">
                {(creator?.subscribers?.indexOf(userAddress) === -1 &&
                creator.userAddress !== userAddress
                  ? Array(4).fill(dummyData)
                  : posts
                ).map(({ postName, postDescription, image }, index) => (
                  <ProfilePostCard
                    title={postName}
                    description={postDescription}
                    image={image}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
      <Footer />
    </LandingLayout>
  );
};

export default Profile;
