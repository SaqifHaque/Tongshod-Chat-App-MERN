import { RouterProvider } from "react-router-dom";
import router from "./configurations/router";
import axios from 'axios';
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh";
import PublicLayout from "./components/shared/PublicLayout";
import Loader from "./components/loader/Loader";

axios.defaults.withCredentials = true;

function App() {
  const { loading } = useLoadingWithRefresh();

  return (
    <>
      { loading && <Loader/> }
      <RouterProvider router={router} />
    </>
  );
}

export default App;
