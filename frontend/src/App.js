import { RouterProvider } from "react-router-dom";
import router from "./configurations/router";
import axios from 'axios';
import { useState } from "react";
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh";

axios.defaults.withCredentials = true;

function App() {
  const { loading } =useLoadingWithRefresh();

  return loading ? (
    'Loading...'
  ) : (
    <RouterProvider router={router} />
  );
}

export default App;
