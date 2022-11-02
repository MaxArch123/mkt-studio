import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import TopNav from "./TopNav/TopNav";
import Footer from "./Footer/Footer";
import "./layout.scss";

export default function Layout(props) {
  const {language, setLanguage} = props

  return (
    <>
      <TopNav setLanguage={setLanguage} language={language}/>
      <Outlet />
      <Footer setLanguage={setLanguage} language={language}/>
    </>
  );
}
