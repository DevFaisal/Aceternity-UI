import React from "react";
import BackgroundGrid from "./BackgroundGrid";

function Container({ children }) {
  return (
    <main className="">
      <div className="container">
        <BackgroundGrid />
      </div>
      <section className="container mx-auto max-w-[77%] z-50 h-screen">
        {children}
      </section>
    </main>
  );
}

export default Container;
