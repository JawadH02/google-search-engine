import React from "react";
import { HeaderOption } from "./index";
import { items } from "./data";

export const HeaderOptions = () => {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
      <div className="flex space-x-6">
        {items?.map((item, index) => (
          <HeaderOption
            Icon={item.icon}
            title={item.title}
            key={index}
            selected={item?.selected}
          />
        ))}
      </div>
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};
