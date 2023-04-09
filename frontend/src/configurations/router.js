import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Activate from "../pages/register/Activate";
import Register from "../pages/register/Register";
import Rooms from "../pages/rooms/Rooms";
import GuestRoute from "./GuestRoute";
import SemiProtectedRoute from "./SemiProtectedRoute";

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
  {
    path: "activate",
    element: (
      // <SemiProtectedRoute>
        <Activate/>
      // </SemiProtectedRoute>
    ),
  },
  {
    path: "rooms",
    element: (
      // <SemiProtectedRoute>
        <Rooms/>
      // </SemiProtectedRoute>
    ),
  },
  
]);

export default router;