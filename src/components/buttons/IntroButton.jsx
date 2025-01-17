import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

function IntroButton() {
  return (
    <button className="flex justify-center items-center gap-2 px-3 py-1.5 rounded-3xl border-[1px] border-gray-500 bg-zinc-800 text-xs text-gray-200">
      Introducing Proactiv Template
      <RiArrowRightSLine />
    </button>
  );
}

export default IntroButton;
