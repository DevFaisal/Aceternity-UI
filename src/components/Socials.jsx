import React from "react";
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

function Socials() {
  return (
    <div className="flex gap-5 pt-5">
      <span className="flex justify-center items-center gap-3">
        <RiNextjsLine className="text-gray-500" size={"2.5em"} />
        <h1 className="text-sm text-gray-500">Next.js</h1>
      </span>
      <span className="flex justify-center items-center gap-3">
        <FaReact className="text-gray-500" size={"2.5em"} />
        <h1 className="text-sm text-gray-500">React</h1>
      </span>
      <span className="flex justify-center items-center gap-3">
        <RiTailwindCssFill className="text-gray-500" size={"2.5em"} />
        <h1 className="text-sm text-gray-500">Tailwind CSS</h1>
      </span>
      <span className="flex justify-center items-center gap-3">
        <TbBrandFramerMotion className="text-gray-500" size={"2.5em"} />
        <h1 className="text-sm text-gray-500">Framer Motion</h1>
      </span>
    </div>
  );
}

export default Socials;
