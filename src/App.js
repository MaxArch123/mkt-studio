// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import NoMatch from "./pages/NoMatch/NoMatch";
import Projects from "./pages/Projects/Projects";
import ProjectPage from "./pages/Projects/ProjectPage/ProjectPage";
import React, { useState } from "react";
import emailjs from '@emailjs/browser'

function App() {
  const [language, setLanguage] = useState("english");

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Layout setLanguage={setLanguage} language={language} />}
        >
          <Route
            index
            element={<Home setLanguage={setLanguage} language={language} />}
          />

          <Route
            path="about"
            element={<About setLanguage={setLanguage} language={language} />}
          />
          {/*          
          <Route
            path="about"
            element={
              <React.Suspense fallback={<>...</>}>
                <About setLanguage={setLanguage} language={language}/>
              </React.Suspense>
            }
          /> */}
          <Route
            path="projects/interior_design"
            element={
              <Projects
                component={"interior"}
                setLanguage={setLanguage}
                language={language}
              />
            }
          />
          <Route
            path="projects/architecture"
            element={
              <Projects
                component={"architecture"}
                setLanguage={setLanguage}
                language={language}
              />
            }
          />
          <Route
            path="projects/graphic_design"
            element={
              <Projects
                component={"graphic"}
                setLanguage={setLanguage}
                language={language}
              />
            }
          />
          <Route
            path="projects/visualisation"
            element={
              <Projects
                component={"visualisation"}
                setLanguage={setLanguage}
                language={language}
              />
            }
          />
          <Route
            path="projects/supervision"
            element={
              <Projects
                component={"supervision"}
                setLanguage={setLanguage}
                language={language}
              />
            }
          />
          <Route
            path="project/:projId"
            element={
              <ProjectPage setLanguage={setLanguage} language={language} />
            }
          />
          <Route
            path="services"
            element={<Services setLanguage={setLanguage} language={language} />}
          />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route
            path="*"
            element={<NoMatch setLanguage={setLanguage} language={language} />}
          />
        </Route>
      </Routes>

      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
      ></script>
      <script type="text/javascript">
        {(function () {
          emailjs.init("WjZjaniKPgV0ht-n1");
        })()}
      </script>
    </div>
  );
}

export default App;
