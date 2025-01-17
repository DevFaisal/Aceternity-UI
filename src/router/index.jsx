import React from "react";
import { createBrowserRouter, Router } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Components, { ComponentsOutlet } from "../pages/Components";

const elements = [
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/components",
        element: <Components />,
        children: [
          {
            path: "",
            element: <ComponentsOutlet />,
            children: elements.map((element) => ({
              path: element.link,
              element: <h1>{element.name}</h1>,
            })),
          },
        ],
      },
    ],
  },
]);

export default router;
