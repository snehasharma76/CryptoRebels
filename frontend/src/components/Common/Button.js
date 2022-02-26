import Link from "next/link";

const Button = ({ text, url, className }) => {
  return (
    <Link href={url}>
      <a
        className={`bg-white text-black px-[64px] font-semibold py-[16px] rounded-md ${className}`}
      >
        {text}
      </a>
    </Link>
  );
};

export default Button;
