import Link from "next/link";
import { AppInfo } from "../../../info";
import { useWeb3 } from "../../contexts/Web3Context";

const Appbar = ({ forFans, forBoth }) => {
  const { address } = useWeb3();

  return (
    <nav className="flex items-center justify-between h-20 text-white max-w-[1440px] mx-auto">
      <Link href="/">
        <a className="w-1/5 flex flex-1 items-center justify-start text-center">
          <img src="/static/icon.svg" alt="icon" />
          <h1 className="text-2xl ml-4 font-bold">{AppInfo.name}</h1>
        </a>
      </Link>
      <div className="flex items-center justify-end flex-1">
        <p className="text-lg">{forBoth && "For Creators"}</p>
        <p className="text-lg ml-[27px]">
          {forFans ? "For Creators" : "For Fans"}
        </p>
        {address ? (
          <Link href="/profile">
            <a className="ml-[27px] px-[24px] py-[10px] rounded-full bg-white text-[#040404] font-semibold">
              {address.slice(0, 5)}...{address.slice(-5)}
            </a>
          </Link>
        ) : (
          <button
            onClick={() => {}}
            className="text-lg ml-[27px] px-[32px] py-[10px] rounded-[6px] bg-white text-[#040404]"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
};

export default Appbar;
