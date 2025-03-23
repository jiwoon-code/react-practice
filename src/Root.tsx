import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Root() {
  return (
    <h1>
      <Header />
      <Outlet />
    </h1>
  );
}

export default Root;
