import React from "react";

const RightSection = () => {
  return (
    <section className="w-1/2">
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
      <div className="flex gap-4 pt-3">
        <div className="flex flex-col h-full items-start gap-3 h-63 overflow-hidden bg-zinc-100 rounded-xl w-full border-[1px] border-zinc-100">
          <div className="h-36 bg-blue-600 w-full"></div>
          <div className="px-4 py-10">
            <h1 className="text-black font-semibold">
              Copy paste components like these in minutes.
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 h-63 px-6 py-10 bg-slate-900 rounded-xl w-full border-[0.4px] border-zinc-700">
          <h1 className="text-xl text-gray-500">Hover over me</h1>
        </div>
      </div>
    </section>
  );
};

export default RightSection;
