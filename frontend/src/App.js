import { RouterProvider } from "react-router-dom";
import router from "./configurations/router";

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
