import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./navbar";
import Section from "./about";
import Footer from "./footer";
import NavLinkRoutes from "../routes/navbarlink";
import Getstarted from "./getstarted";
import { Provider } from "react-redux";
import  AuthPage  from "./signup/login"


export default function Home1() {
  return (
    <div>
      <BrowserRouter>
        {" "}
        <Navbar />
        <Section />
        <Footer />
        <AuthPage/>
       
      </BrowserRouter>
      <Getstarted />
    </div>
  );
}
