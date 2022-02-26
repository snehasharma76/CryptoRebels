import { AppInfo } from "../../../info";

const Appbar = ({ forCreators, forFans, forBoth }) => {
  return (
    <nav className="flex items-center justify-between h-20 text-white">
      <div className="w-1/5 flex items-center justify-center text-center">
        <img src="/static/icon.svg" alt="icon" />
        <h1 className="text-2xl ml-4 font-bold">{AppInfo.name}</h1>
      </div>
      <div className="flex justify-around w-2/5">
        {(forCreators || forBoth) && <p className="text-lg">For Creators</p>}
        {(forFans || forBoth) && <p className="text-lg">For Fans</p>}
        <p className="text-lg">Connect Wallet</p>
      </div>
    </nav>
  );
};

export default Appbar;
