const ProfilePostCard = () => {
  const postImg =
    "https://www.datocms-assets.com/46272/1633199491-1633199490440.jpg";
  return (
    <figure className="my-8">
      <img src={postImg} alt="post img" className="max-w-[500px]" />
      <figcaption className="w-[500px]">
        <h2 className="text-xl font-semibold mt-4 mb-2">
          Lorem ipsum dolor lorem ipsum lorem dolor
        </h2>
        <p className="text-sm text-neutral-200">
          Lorem ipsum dolor lorem ipsum lorem dolor. Lorem ipsum dolor lorem
          ipsum lorem dolor. Lorem ipsum dolor lorem ipsum lorem dolor. Lorem
          ipsum dolor lorem ipsum lorem dolor.
        </p>
      </figcaption>
    </figure>
  );
};

export default ProfilePostCard;
