import React, { useEffect } from "react";
import "./loader.scss";
import useISHeightSmall from "../customHooks/useISHeightSmall";


export default function Loader({ sectionLoaded }) {
  const isSmall = useISHeightSmall();

  useEffect(() => {
    if (document) {
      if (isSmall) {
        document.querySelector("section").style.height = "100%";
        document.querySelector(".App").style.height = "100%";
        document.querySelector("nav.top-nav").style.position = "static";
      } else {
        document.querySelector("section").style.height = "fit-content";
        document.querySelector(".App").style.height = "fit-content";
      }
    }
  }, [isSmall]);

  useEffect(() => {
    if (sectionLoaded) {
      document.querySelector(".App").style.height = "fit-content";
      document.querySelector("nav.top-nav").style.position = "fixed";
    }
  }, [sectionLoaded]);

  return (
    <section
      className="loader"
      style={{
        display: sectionLoaded ? "none" : "flex",
      }}
    >
      <div></div>
      <span>Loading...</span>
    </section>
  );
}
