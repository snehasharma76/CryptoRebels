import { LandingLayout } from "../layouts";
import { create } from "ipfs-http-client";
import { useWeb3 } from "../contexts/Web3Context";
import { useState } from "react";

const client = create("https://ipfs.infura.io:5001/api/v0");

const Add = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();

  const { createPost, loading } = useWeb3();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await client.add(image);
    const uri = `https://ipfs.infura.io/ipfs/${added.path}`;
    createPost(title, description, uri);
  };

  return (
    <LandingLayout>
      {loading ? (
        "Loading..."
      ) : (
        <div className="flex flex-col text-black items-center justify-center h-screen">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col bg-white py-[100px] px-[50px] rounded-[6px]"
          >
            <h2 className="text-[24px] text-center font-semibold">
              Create Post
            </h2>
            <label className="pt-[10px] text-[18px] font-semibold">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-100 px-[20px] py-[10px] rounded-[6px]"
            />
            <label className="pt-[10px] text-[18px] font-semibold">
              Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-gray-100 px-[20px] py-[10px] rounded-[6px]"
            />
            <label className="pt-[10px] text-[18px] font-semibold">
              Add an image
            </label>
            <input
              className="bg-gray-100 px-[20px] py-[10px] rounded-[6px]"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <button
              type="submit"
              className="bg-[#040404] text-white py-[10px] rounded-[6px] mt-[20px]"
            >
              Post
            </button>
          </form>
        </div>
      )}
    </LandingLayout>
  );
};

export default Add;
