import { Avatar } from "./index";
import avatarImg from "../assets/Avatar.png";
import { ViewGridIcon } from "@heroicons/react/solid";

export const Nav = () => {
  return (
    <nav className="flex w-full p-5 justify-between text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>

      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

        <Avatar url={avatarImg} />
      </div>
    </nav>
  );
};
