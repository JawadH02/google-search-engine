import { SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon } from "@heroicons/react/solid";
import Image from "next/image";
import googleLogo from "../assets/google_logo.png";
import { useRef, useCallback } from "react";
import { useRouter } from "next/router";

export const Landing = () => {
    const searchInputRef = useRef(null);
    const router = useRouter();

    const search = useCallback((e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if (!term) return;
        router.push(`/search?term=${term}`);
    }, [searchInputRef, router]);

  return (
    <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
      <figure>
        <Image src={googleLogo} height={200} width={300} alt="google image" />
      </figure>
      <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border-gray-200 px-5 py-3 sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input ref={searchInputRef} className="focus:outline-none flex-grow" type="text" />
        <MicrophoneIcon className="h-5" />
      </div>

      <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">Google Search</button>
          <button onClick={search} className="btn">I&apos;m Feeling Lucky</button>
      </div>
    </form>
  );
};
