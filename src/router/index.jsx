import React from "react";
import { createBrowserRouter, Router } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Components, { ComponentsOutlet } from "../pages/Components";
import { elements } from "../utils/elements";

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
              element: (
                <div className="text-5xl flex justify-center items-center h-screen overflow-y-scroll font-semibold">
                  <h1>{element.name}</h1>
                </div>
              ),
            })),
          },
        ],
      },
    ],
  },
]);

export default router;
