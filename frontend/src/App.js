import { RouterProvider } from "react-router-dom";
import router from "./configurations/router";
import axios from 'axios';

axios.defaults.withCredentials = true;

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
