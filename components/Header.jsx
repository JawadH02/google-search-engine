import Image from "next/image";
import googleLogo from "../assets/google_logo.png";
import { useRouter } from "next/router";
import { useRef, useCallback } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import { Avatar } from "./index";
import avatarImg from "../assets/Avatar.png";
import { HeaderOptions } from "../components/index";

export const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = useCallback(
    (e) => {
      e.preventDefault();

      const term = searchInputRef.current.value;
      if (!term) return;
      router.push(`/search?term=${term}`);
    },
    [searchInputRef, router]
  );

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <figure>
          <Image
            src={googleLogo}
            height={60}
            width={120}
            onClick={() => router.push("/")}
            alt="google-logo"
            className="cursor-pointer"
          />
        </figure>
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            className="flex-grow w-full focus:outline-none"
            ref={searchInputRef}
            type="text"
            defaultValue={router.query.term}
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar className="ml-auto" url={avatarImg} />
      </div>
      <HeaderOptions />
    </header>
  );
};
