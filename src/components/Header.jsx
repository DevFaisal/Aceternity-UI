import React from "react";
import NavBar from "./NavBar";

function Header() {
  return (
    <>
      <header className="py-1 bg-gradient-to-r flex justify-center w-full from-pink-500 to-indigo-500">
        <h1 className="text-[0.8em] text-white p-0 m-0">
          Introducing <span className="font-semibold ">Aceternity UI Pro</span>{" "}
          - Premium component packs and templates to build awesome websites.
        </h1>
      </header>
      <div className="container mx-auto max-w-7xl sticky top-0">
        <NavBar />
      </div>
    </>
  );
}

export default Header;
