import React from "react";
import Label from "./ui/Label";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";

function NavBar() {
  const navItems = [
    {
      name: "Components",
      link: "/components/3d-card-effect",
      label: true,
    },
    {
      name: "Templates",
      link: "/templates",
      label: false,
    },
    {
      name: "Pricing",
      link: "/pricing",
      label: false,
    },
    {
      name: "Showcase",
      link: "/showcase",
      label: false,
    },
  ];

  return (
    <nav className="z-50 flex justify-between items-center py-4 bg-black">
      <section className="flex justify-center items-center gap-5 text-sm">
        <div className="flex justify-center items-center gap-3">
          <img
            width={22}
            height={22}
            src="https://ui.aceternity.com/_next/image?url=%2Flogo-dark.png&w=128&q=75"
            alt=""
          />
          <NavLink to={"/"} className="text-[1.7em] font-semibold pr-5">
            Aceternity UI
          </NavLink>
        </div>
        <div className="flex gap-6">
          {navItems.map((link, idx) => (
            <span key={idx} className="flex gap-2">
              <NavLink
                to={link.link}
                className="text-[0.8rem] text-gray-400"
                key={idx}
              >
                {link.name}
              </NavLink>
              {link.label ? <Label /> : ""}
            </span>
          ))}
        </div>
      </section>
      <section className="flex justify-center items-center gap-5">
        <span className="text-sm text-gray-400">Discord</span>
        <span className="text-sm text-gray-400">Twitter</span>
        <SearchButton />
      </section>
    </nav>
  );
}

export default NavBar;

function SearchButton() {
  return (
    <div className="relative flex justify-center items-center pl-7 pr-5 py-2 text-xs outline-none rounded-xl border-[0.1px] border-stone-600">
      <input
        placeholder="Search Component"
        className="text-xs px-2 outline-none text-zinc-400 bg-black"
      />
      <span className="absolute left-2">
        <CiSearch size={20} className="text-zinc-600" />
      </span>
      <span className="px-1.5 py-0.5 flex justify-center items-center gap-1 bg-zinc-800 rounded-md">
        <MdOutlineKeyboardCommandKey size={10} className="text-zinc-400" />
        <h6 className="text-xs text-zinc-400">K</h6>
      </span>
    </div>
  );
}
