import React from "react";
import {
  BrowserRouter as Router,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Navbar from "../pages/navbar";
import Getstarted from "../pages/getstarted";
import AuthPage from "../pages/signup/login";
import Protector from "../components/protector";
import Home1 from "../pages/Home";

const NavLinkRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element= {<Protector/>} >
    <Route path="/" index element = {<Home1/>} />
    </Route>
   
  )
);

export default NavLinkRoutes;
