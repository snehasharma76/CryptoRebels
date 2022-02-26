import { AppInfo } from "../../../info";

const Appbar = ({ forFans, forBoth }) => {
  return (
    <nav className="flex items-center justify-between h-20 text-white max-w-[1440px] mx-auto">
      <div className="w-1/5 flex items-center justify-center text-center">
        <img src="/static/icon.svg" alt="icon" />
        <h1 className="text-2xl ml-4 font-bold">{AppInfo.name}</h1>
      </div>
      <div className="flex justify-around w-2/5">
        {forBoth && <p className="text-lg">For Creators</p>}
        <p className="text-lg">{forFans ? "For Fans" : "For Creators"}</p>
        <p className="text-lg">Connect Wallet</p>
      </div>
    </nav>
  );
};

export default Appbar;
