import React from "react";

function BackgroundGrid() {
  return (
    <main className="-z-50 absolute h-screen overflow-hidden">
      <div className="flex flex-col justify-center gap-8 items-center h-screen w-screen relative">
        {Array.from({ length: 100 }, (v, idx) => (
          <span className="p-[0.1px] bg-zinc-900 w-full" />
        ))}
        <div className="flex gap-8 justify-evenly absolute items-between h-screen">
          {Array.from({ length: 200 }, (v, idx) => (
            <span className="p-[0.1px] bg-zinc-900 h-full" />
          ))}
        </div>
      </div>
    </main>
  );
}

export default BackgroundGrid;
