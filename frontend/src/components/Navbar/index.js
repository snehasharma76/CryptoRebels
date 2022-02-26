import FeatherIcon from "../FeatherIcon";

const Navbar = () => {
  const profileUrl =
    "https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image-300x300.jpeg";
  return (
    <nav>
      <figure className="flex">
        <img src={profileUrl} />
        <figcaption>
          <div>
            <h2>John Doe</h2>
            <p>
              Creator <span>Pro +</span>
            </p>
          </div>
          <FeatherIcon icon="plus" />
        </figcaption>
      </figure>
    </nav>
  );
};

export default Navbar;
