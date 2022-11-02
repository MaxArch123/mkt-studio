import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./projectPage.scss";
import allProjects from "../../../assets/data/allProjects";
import NoMatch from "../../NoMatch/NoMatch";
import Attachment from "./Attachement/Attachment";
import useISHeightSmall from "../../../customHooks/useISHeightSmall";

export default function ProjectPage({ language }) {
  const [modalImage, setModalImage] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [imgStart, setImgStart] = useState(null);
  const isSmall = useISHeightSmall();
  let { projId } = useParams();

  useEffect(() => {
    if (document) {
      if (isSmall) {
        document.querySelector("section").style.height = "100%";
        document.querySelector(".App").style.height = "100%";
        document.querySelector("nav.top-nav").style.position = "static";
      } else {
        document.querySelector("section").style.height = "fit-content";
        document.querySelector(".App").style.height = "fit-content";
        document.querySelector("nav.top-nav").style.position = "fixed";
      }
    }
  }, [isSmall]);

  //#region to get prog ID, return proj or NoMatch
  const underlineIndex = projId.indexOf("_");
  const idToNum = projId.slice(0, underlineIndex);

  if (!projId) {
    return <NoMatch />;
  }

  function getProjById(id) {
    // const underlineIndex = id.indexOf("_");
    // const idToNum = id.slice(0, underlineIndex);
    return allProjects.find((project) => project.id === parseInt(idToNum));
  }

  let proj = getProjById(projId);

  if (!proj) {
    return <NoMatch />;
  }
  //#endregion to get prog ID, return proj or NoMatch

  // #region open full image
  function openImage(e) {
    setModalImage(!modalImage);
    const target = e.target;
    setImgSrc(e.target.src);

    // #region find a pisition of the center of the clicked attachment
    function getImgCenter(element) {
      const { left, right, top, bottom } = element.getBoundingClientRect();
      const centerX = right - (right - left) / 2;
      const centerY = bottom - (bottom - top) / 2;

      return { centerX, centerY };
    }
    // #endregion fing pisition of center of the clicked attachment

    setImgStart({
      left: `${getImgCenter(target).centerX}px`,
      top: `${getImgCenter(target).centerY}px`,
    });
  }
  // #endregion open full image

  // #region attachments
  let attachs;
  if (allProjects[idToNum - 1].attachments) {
    attachs = allProjects[idToNum - 1].attachments.map((project) => {
      return (
        <Attachment
          key={project.id}
          id={project.id}
          language={language}
          title={project.describe}
          titleUA={project.describeUA}
          image={project.image}
          imageAlt={project.whatIsOnImage}
          openImage={openImage}
        />
      );
    });
  }
  // #endregion attachments

  return (
    <section className="project">
      <div className="hero-project">
        {language === "english" && <h2 className="container">{proj.title}</h2>}
        {language === "ukrainian" && (
          <h2 className="container">{proj.titleUA}</h2>
        )}

        {language === "english" && (
          <p className="container">{proj.description}</p>
        )}
        {language === "ukrainian" && (
          <p className="container">{proj.descriptionUA}</p>
        )}

        <img src={proj.image} alt={proj.whatIsOnImage} />
      </div>
      <div className="proj-attachments container">
        {!attachs && (
          <>
            {language === "english" && (
              <p className="no-attachments container">
                We can't show attachments to this project.
              </p>
            )}
            {language === "english" && (
              <p className="no-attachments container">
                Ми не можемо показати фото.
              </p>
            )}
          </>
        )}
        {attachs}
      </div>
      {modalImage && (
        <div
          className="attachment-modal"
          onClick={() => setModalImage(!modalImage)}
        >
          <img
            className={!modalImage && "go-back"}
            src={`${imgSrc}`}
            alt="attachment"
            style={imgStart}
          />
        </div>
      )}
    </section>
  );
}
