import React from "react";
import Label from "./ui/Label";
import { NavLink } from "react-router-dom";

function NavBar() {
  const navItems = [
    {
      name: "Components",
      link: "/components",
      label: false,
    },
    {
      name: "Templates",
      link: "/templates",
      label: true,
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
    <nav className="flex justify-between items-center py-6 bg-black">
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
      <section className="flex gap-5">
        <span className="text-sm text-gray-400">Discord</span>
        <span className="text-sm text-gray-400">Twitter</span>
      </section>
    </nav>
  );
}

export default NavBar;
