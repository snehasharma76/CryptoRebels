import Link from "next/link";

const Button = ({ text, url, creatorButton }) => {
  return (
    <Link href={url}>
      <a
        className={`flex items-center justify-center bg-white text-black ${
          creatorButton ? "px-[32px]" : "px-[64px]"
        } font-semibold py-[16px] rounded-md`}
      >
        {text}
      </a>
    </Link>
  );
};

export default Button;
