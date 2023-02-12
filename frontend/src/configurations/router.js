import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import GuestRoute from "./GuestRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <GuestRoute>
        <Home/>
      </GuestRoute>
    ),
  },
  {
    path: "register",
    element: (
      <GuestRoute>
        <Register/>
      </GuestRoute>
    ),
  },
]);

export default router;