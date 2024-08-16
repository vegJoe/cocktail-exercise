import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

import './App.css'

export function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
