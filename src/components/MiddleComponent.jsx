import React from "react";
import { NavLink } from "react-router-dom";

const MiddleComponent = () => {
  return (
    <main className="container mx-auto max-w-[77%] z-50 h-screen">
      <div className="h-12/3 space-y-5  w-1/2 p-5 py-10">
        <h1 className="text-2xl font-semibold">As simple as copy and paste</h1>
        <p className="text-l">
          Copy paste the code into your ui folder and use the <br /> components
          in your projects. It's that simple, really.
        </p>
      </div>
      <section className="flex relative justify-between   w-full">
        <div className="w-4/2">
          <Keyboard />
        </div>
        <div className=" h-[30rem] w-[30rem] right-3 -bottom-3 absolute bg-gray-700 overflow-visible rounded-lg">
          <div className="flex gap-2 pl-3 bg-slate-900 w-full py-3 rounded-t-md">
            <span className="p-2 h-[10px] w-[10px] bg-red-600 rounded-full"></span>
            <span className="p-2 h-[10px] w-[10px] bg-white rounded-full"></span>
            <span className="p-2 h-[10px] w-[10px] bg-green-600 rounded-full"></span>
          </div>
          <div className="flex justify-center items-center h-full pb-10">
            <h1 className="text-gray-500 font-semibold">
              This is designed by{" "}
              <NavLink
                className={"underline text-cyan-700"}
                to={"https://www.linkedin.com/in/dev-faisal/"}
              >
                @Faisal
              </NavLink>
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MiddleComponent;

function Keyboard() {
  return (
    <div className="flex justify-center">
      <div className=" px-5  grid bg-gray-800 grid-cols-12 grid-rows-5 justify-center items-center gap-3  border py-4 border-slate-800 rounded-md">
        {Array.from({ length: 84 }).map((key, idx) => (
          <span className="h-10 flex justify-center items-center text-xs p-5 ring-1 bg-black ring-black rounded-md shadow-md shadow-orange-200 hover:shadow-none hover:duration-300">
            {idx}
          </span>
        ))}
      </div>
    </div>
  );
}
