import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { elements } from "../utils/elements";

function Components() {
  return (
    <Container>
      <main className="flex justify-between fixed max-w-7xl w-full mx-auto">
        <section className="p-5 w-1/4 h-[100vh]">
          <div>
            <h1 className="font-semibold py-8">All Components</h1>
            <div className="flex scrollbar scrollbar-thumb-zinc-800 scrollbar-track-black h-[80vh] overflow-x-hidden overflow-y-scroll pb-7 flex-col gap-4">
              {elements?.map((el, idx) => (
                <NavLink
                  key={idx}
                  to={el.link}
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm font-semibold text-emerald-600"
                      : "text-sm text-zinc-400 hover:text-emerald-500 duration-300 hover:translate-x-1"
                  }
                >
                  {el.name}
                </NavLink>
              ))}
            </div>
          </div>
        </section>
        <section className="flex max-h-screen overflow-y-scroll bg-zinc-900 justify-center items-center  w-full flex-col gap-4">
          <ComponentsOutlet />
        </section>
      </main>
    </Container>
  );
}

export default Components;

function Container({ children }) {
  return <div className="container mx-auto max-w-7xl">{children}</div>;
}

export function ComponentsOutlet() {
  return (
    <span>
      <Outlet />
    </span>
  );
}
