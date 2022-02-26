import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <a className="bg-white text-black px-[64px] font-semibold py-[16px] rounded-md">
        {text}
      </a>
    </Link>
  );
};

export default Button;
