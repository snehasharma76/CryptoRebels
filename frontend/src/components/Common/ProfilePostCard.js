const ProfilePostCard = ({ title, description, image }) => {
  return (
    <figure className="my-8">
      <img
        src={image}
        alt="post img"
        className="w-[500px] h-[350px] object-cover rounded-[6px]"
      />
      <figcaption className="w-[500px]">
        <h2 className="text-xl font-semibold mt-4 mb-2">{title}</h2>
        <p className="text-sm text-neutral-200">{description}</p>
      </figcaption>
    </figure>
  );
};

export default ProfilePostCard;
