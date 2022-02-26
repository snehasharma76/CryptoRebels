import Button from "./Button";

const CreatorCard = ({ image, username, description, address }) => {
  return (
    <div className="flex flex-col">
      <img
        src={image}
        alt={`Profile Picture of ${username}`}
        height={256}
        width={256}
        className="h-[256px] w-full object-cover object-center rounded-[6px] mb-[10px]"
      />
      <h3 className="font-bold text-[24px]">{username}</h3>
      <p className="text-[14px] mb-[10px]">
        {description.length > 70
          ? `${description.slice(0, 67)}...`
          : description}
      </p>
      <Button
        creatorButton
        text={`Go to ${username}'s page`}
        url={`/creator/${address}`}
      />
    </div>
  );
};

export default CreatorCard;
