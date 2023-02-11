import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    ),
  },
//   {
//     path: "about",
//     element: <div>About</div>,
//   },
]);

export default router;