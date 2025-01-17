import React, { useEffect, useRef, useState } from "react";

const RightSection = () => {
  return (
    <section className="w-1/2 pt-20">
      <div className="flex h-16 justify-end relative">
        <img
          src="https://avatars.githubusercontent.com/u/74142521?v=4"
          alt=""
          width={50}
          className="rounded-full hover:translate-x-1 z-40  duration-700 absolute right-0 ring-2 ring-white"
        />
        <img
          src="https://avatars.githubusercontent.com/u/74142521?v=4"
          alt=""
          width={50}
          className="rounded-full hover:translate-x-1  hover:z-50 z-30 duration-700 absolute right-10 ring-2 ring-white"
        />
        <img
          src="https://avatars.githubusercontent.com/u/74142521?v=4"
          alt=""
          width={50}
          className="rounded-full hover:translate-x-1 z-20 hover:z-40 duration-700  absolute right-20 ring-2 ring-white"
        />
        <img
          src="https://avatars.githubusercontent.com/u/74142521?v=4"
          alt=""
          width={50}
          style={{ right: "19%" }}
          className="rounded-full hover:translate-x-1 z-10 hover:z-30 duration-700  absolute  ring-2 ring-white"
        />
        <img
          src="https://avatars.githubusercontent.com/u/74142521?v=4"
          alt=""
          width={50}
          style={{ right: "25%" }}
          className="rounded-full hover:translate-x-1 z-0 hover:z-20 duration-700  absolute  ring-2 ring-white"
        />
      </div>
      <HoverComponent />
      <div className="flex gap-4 pt-3">
        <CurserReveal />
        <HoverLights />
      </div>
    </section>
  );
};

export default RightSection;

function HoverComponent() {
  return (
    <div className="flex flex-col items-start gap-3 h-63 px-6 py-10 bg-zinc-900 rounded-xl w-full border-[0.4px] border-zinc-700">
      <div className="flex flex-col gap-3">
        <h1>Beautify your website within minutes</h1>
        <p className="text-zinc-400 text-sm">
          With Aceternity UI, you can build great looking websites within
          minutes.
        </p>
      </div>
      <h4 className="text-5xl hover:text-white duration-500 py-10 font-bold text-zinc-700 text-nowrap">
        Hover over me to reveal
      </h4>
    </div>
  );
}

function CurserReveal() {
  // const colors = ["orange", "blue", "slate", "yellow", "pink"];
  const curserRef = useRef();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  // const [index, setIndex] = useState(Math.floor(Math.random() * 5));

  function handleMouseMove(e) {
    setX(e.clientX);
    setY(e.clientY);
  }
  // useEffect(() => {
  //   setIndex((prevColor) => Math.floor(Math.random() * 5));
  //   console.log(colors[index]);
  // }, [curserRef]);

  return (
    <div
      ref={curserRef}
      onMouseMove={handleMouseMove}
      className="relative flex flex-col  items-start gap-3 h-63 overflow-hidden bg-zinc-100 rounded-xl w-full border-[1px] border-zinc-100"
    >
      <span
        className={`absolute ${
          x ? "flex" : "hidden"
        } justify-between gap-2 rounded-3xl items-center w-30 px-1 pr-4 py-1 bg-orange-500`}
        style={{ left: `${x % 300}px`, top: `${y % 450}px` }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/74142521?v=4"
          alt=""
          width={30}
          height={30}
          className="rounded-full"
        />
        <h1 className="text-xs">Faisal</h1>
      </span>
      <div className="h-36 bg-blue-600 w-full"></div>
      <div className="px-4 py-10">
        <h1 className="text-black font-semibold">
          Copy paste components like these in minutes.
        </h1>
      </div>
    </div>
  );
}

function HoverLights() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 h-63 px-6 py-10 bg-slate-900 rounded-xl w-full border-[0.4px] border-zinc-700">
      <h1 className="text-xl text-gray-500">Hover over me</h1>
    </div>
  );
}
