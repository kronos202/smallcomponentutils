import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const SwitchDarkMode = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((curState) => {
      return !curState;
    });
  };
  console.log(toggle);
  return (
    <div>
      <div
        className={` border-[2px] border-blue-500  rounded-full cursor-pointer ${
          toggle ? "bg-black" : "bg-white"
        }`}
        onClick={handleToggle}
      >
        <div className="flex gap-4 py-2 px-4 ">
          <FaSun className={`w-6 h-6 ${toggle && "text-white"}`} />
          <FaMoon className={`w-6 h-6 ${toggle && "text-black"}`} />
        </div>
      </div>
      <span
        className={`${
          toggle ? "translate-x-14 bg-white" : "translate-x-2 bg-black"
        } cursor-pointer w-8 h-8  absolute translate-y-[-37px] rounded-full transform transition-transform`}
        onClick={handleToggle}
      />
    </div>
  );
};

export default SwitchDarkMode;
