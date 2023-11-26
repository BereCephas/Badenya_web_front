import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Landing from "./pages/Landing";
import Article from "./components/Article";
import Aboutus from "./pages/About";
import Viescolaire from "./pages/Viescolaire";
import Blog from "./pages/Blog";

import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="App h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/articles/:id" element={<Article />}></Route>
          <Route path="/apropos" element={<Aboutus />}></Route>
          <Route path="/viescolaire" element={<Viescolaire />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
