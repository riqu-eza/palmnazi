import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./navbar";
import Section from "./about";
import Footer from "./footer";
import Getstarted from "./getstarted";
import { Provider } from "react-redux";
import  AuthPage  from "./signup/login"
import Dashboard from "./admin/dashboard";
import BlogAdmin from "./admin/blogadmin";
import Adminlist from "./listing/activities";
import Resortcity from "./resortcitys/cityresort";

export default function Home1() {
  return (
    <div>
      <BrowserRouter>
        {" "}
        <Navbar />
        <Section />
        <Footer />
        {/* <AuthPage/> */}
      </BrowserRouter>
      {/* <BlogAdmin/>
      <Getstarted />
      <Adminlist/>
      <Resortcity/>
       */}
    </div>
  );
}
