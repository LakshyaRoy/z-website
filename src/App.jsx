import { NAV_LINKS } from "../Contants";
import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={""} />
        <Route path={"/shop"} element={"/shop"} />
        <Route path={"/pages"} element={"/pages"} />
        <Route path={"/blog"} element={"/blog"} />
        <Route path={"/contact"} element={"/contact"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
