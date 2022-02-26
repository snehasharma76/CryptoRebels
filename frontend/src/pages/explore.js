import Appbar from "../components/Appbar";
import CreatorCard from "../components/Common/CreatorCard";
import LandingLayout from "../layouts/LandingLayout";

const dummy = {
  id: 0,
  username: "JohnDoe",
  address: "0xasdasdasd12312qasd",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptate corporis quas facilis, esse sapiente saepe maiores est numquam ipsam.",
  image:
    "https://images.pexels.com/photos/5738030/pexels-photo-5738030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};

const Explore = () => {
  return (
    <LandingLayout>
      <Appbar forBoth />
      <div className="flex flex-col items-center">
        <h2 className="text-[48px] font-extrabold mb-[32px] w-full mt-[60px]">
          Explore Creators
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mb-[60px]">
          {Array(8)
            .fill(dummy)
            .map(({ id, username, address, description, image }) => (
              <CreatorCard
                username={username}
                address={address}
                description={description}
                image={image}
                key={id}
              />
            ))}
        </div>
      </div>
    </LandingLayout>
  );
};

export default Explore;
