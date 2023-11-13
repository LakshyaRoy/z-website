// import { useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/shop"} element={"/shop"} />
        <Route path={"/pages"} element={"/pages"} />
        <Route path={"/blog"} element={"/blog"} />
        <Route path={"/contact"} element={"/contact"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
