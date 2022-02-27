import { useState } from "react";
import { create } from "ipfs-http-client";
import { useWeb3 } from "../../contexts/Web3Context";

const client = create("https://ipfs.infura.io:5001/api/v0");

const Login = ({ visible, setVisible }) => {
  const { loading, registerNewUser } = useWeb3();
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await client.add(image);
    const uri = `https://ipfs.infura.io/ipfs/${added.path}`;
    await registerNewUser(username, description, uri);
  };

  if (!visible) return null;

  return (
    <>
      <div className="absolute top-0 left-0 h-full w-full bg-[#00000052] z-10"></div>
      <div className="flex flex-col pb-[35px] px-[25px] pt-[14px] md:pb-[70px] md:px-[50px] md:pt-[30px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white max-w-[400px] w-full rounded-[10px] z-50">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className="w-full flex justify-end items-center">
              <span
                className="text-[32px] cursor-pointer"
                onClick={() => setVisible(false)}
              >
                &times;
              </span>
            </div>
            <form
              onSubmit={handleSubmit}
              className="h-full flex flex-col items-start justify-center"
            >
              <label htmlFor="username" className="text-lg font-semibold">
                Enter username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                className="bg-gray-100 px-[20px] py-[10px] mt-[15px] w-full outline-none"
                placeholder="Enter a username"
                required
              />
              <label htmlFor="description" className="text-lg font-semibold">
                Enter short description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                onChange={(e) => setDescription(e.target.value)}
                className="bg-gray-100 px-[20px] py-[10px] mt-[15px] w-full outline-none"
                placeholder="Enter a username"
                required
              />
              <label htmlFor="description" className="text-lg font-semibold">
                Enter membership amount
              </label>
              <input
                type="text"
                name="description"
                id="description"
                className="bg-gray-100 px-[20px] py-[10px] mt-[15px] w-full outline-none"
                placeholder="Enter a amount"
                required
              />
              <label htmlFor="description" className="text-lg font-semibold">
                Add a profile Image
              </label>
              <input
                type="file"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
                className="bg-gray-100 px-[20px] py-[10px] mt-[15px] w-full outline-none"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold text-base px-[20px] py-[10px] rounded w-full mt-[15px]"
              >
                Complete Signup
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
