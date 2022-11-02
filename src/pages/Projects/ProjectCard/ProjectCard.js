import "./projectCard.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  const {
    language,
    id,
    type,
    titleUA,
    title,
    image,
    whatIsOnImage,
    feature,
    description,
    descriptionUA,
  } = props;
  const [showDescription, setShowDescription] = useState(false);

  const linkEnding = `${id}_${type}_${title.replaceAll(" ", "-")}`;

  return (
    <div className={`card ${type}-design`}>
      <Link to={`/project/${linkEnding}`}>
        <img
          // className={`${showDescription ? "active" : ""}`}
          src={image}
          alt={whatIsOnImage}
          onMouseOver={() => setShowDescription(true)}
          onMouseLeave={() => setShowDescription(false)}
        />
        <h3
          className={`${showDescription ? "active" : "not-active"}`}
          onMouseOver={() => setShowDescription(true)}
          onMouseLeave={() => setShowDescription(false)}
        >
          {language === "english" && title}
          {language === "ukrainian" && titleUA}
        </h3>
        <p
          className={`${showDescription ? "not-active" : "none"}`}
          onMouseOver={() => setShowDescription(true)}
          onMouseLeave={() => setShowDescription(false)}
        >
          {language === "english" && "Click to see more about this project"}
          {language === "ukrainian" && "Натисніть, щоб побачити більше"}
        </p>
        <div
          className={`${showDescription ? "active" : "not-active"}`}
          onMouseOver={() => setShowDescription(true)}
          onMouseLeave={() => setShowDescription(false)}
        >
          {language === "english" && description}
          {language === "ukrainian" && descriptionUA}
        </div>
      </Link>
    </div>
  );
}
