import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const elements = [
  { name: "3D Card Effect", link: "3d-card-effect" },
  { name: "3D Pin", link: "3d-pin" },
  { name: "Animated Modal", link: "animated-modal" },
  { name: "Animated Testimonials", link: "animated-testimonials" },
  { name: "Animated Tooltip", link: "animated-tooltip" },
  { name: "Apple Cards Carousel", link: "apple-cards-carousel" },
  { name: "Aurora Background", link: "aurora-background" },
  { name: "Background Beams", link: "background-beams" },
  {
    name: "Background Beams With Collision",
    link: "background-beams-collision",
  },
  { name: "Background Boxes", link: "background-boxes" },
  { name: "Background Gradient", link: "background-gradient" },
  { name: "Background Lines", link: "background-lines" },
  { name: "Bento Grid", link: "bento-grid" },
  { name: "Canvas Reveal Effect", link: "canvas-reveal-effect" },
  { name: "Card Hover Effect", link: "card-hover-effect" },
  { name: "Card Spotlight", link: "card-spotlight" },
  { name: "Card Stack", link: "card-stack" },
  { name: "Cards", link: "cards" },
  { name: "Carousel", link: "carousel" },
  { name: "Codeblock", link: "codeblock" },
  { name: "Compare", link: "compare" },
  { name: "Container Cover", link: "container-cover" },
  { name: "Container Scroll Animation", link: "container-scroll-animation" },
  { name: "Direction Aware Hover", link: "direction-aware-hover" },
  { name: "Evervault Card", link: "evervault-card" },
  { name: "Expandable Card", link: "expandable-card" },
  { name: "Feature Sections", link: "feature-sections" },
  { name: "File Upload", link: "file-upload" },
  { name: "Flip Words", link: "flip-words" },
  { name: "Floating Dock", link: "floating-dock" },
  { name: "Floating Navbar", link: "floating-navbar" },
  { name: "Focus Cards", link: "focus-cards" },
  { name: "Following Pointer", link: "following-pointer" },
  { name: "GitHub Globe", link: "github-globe" },
  { name: "Glare Card", link: "glare-card" },
  { name: "Glowing Stars", link: "glowing-stars" },
  { name: "Google Gemini Effect", link: "google-gemini-effect" },
  { name: "Gradient Animation", link: "gradient-animation" },
  { name: "Grid and Dot Backgrounds", link: "grid-dot-backgrounds" },
];

function Components() {
  return (
    <Container>
      <main className="flex justify-between h-screen">
        <section className="p-5 w-1/4 h-[100vh]">
          <div>
            <h1 className="font-semibold py-8">All Components</h1>
            <div className="flex h-[80vh] overflow-y-scroll flex-col gap-4">
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
        <section className="flex h-screen justify-center items-center  w-full flex-col gap-4">
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
