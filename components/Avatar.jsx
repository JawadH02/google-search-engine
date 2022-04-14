import Image from "next/image";

export const Avatar = ({ url, className }) => {
  return (
    <figure className={`${className}`}>
      <Image
        className="rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
        width={40}
        height={40}
        src={url}
        alt="profile-picture"
      />
    </figure>
  );
};
