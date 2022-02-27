import { useState, useEffect } from "react";
import { useWeb3 } from "../../contexts/Web3Context";
import Button from "../Common/Button";
import CreatorCard from "../Common/CreatorCard";

// const dummy = {
//   id: 0,
//   username: "JohnDoe",
//   address: "0xasdasdasd12312qasd",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptate corporis quas facilis, esse sapiente saepe maiores est numquam ipsam.",
//   image:
//     "https://images.pexels.com/photos/5738030/pexels-photo-5738030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
// };

const Explore = () => {
  const { getCreators, Patreon } = useWeb3();
  const [data, setData] = useState();

  useEffect(() => {
    if (Patreon) getData();
  }, [Patreon]);

  const getData = async () => {
    const data = await getCreators();
    setData(data);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-[48px] font-extrabold mb-[32px]">Explore Creators</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mb-[60px]">
        {data?.map(({ id, username, userAddress, description, image }) => (
          <CreatorCard
            username={username}
            address={userAddress}
            description={description}
            image={image}
            key={id}
          />
        ))}
      </div>
      <div className="mb-[104px]">
        <Button text="View all creators" url="/explore" />
      </div>
    </div>
  );
};

export default Explore;
