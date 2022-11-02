import React from "react";

export default function Attachment(props) {
  const { language, title, titleUA, image, imageAlt, openImage } = props;

  return (
    <div className="attachment">
      {language === "english" && <h3>{title}</h3>}
      {language === "ukrainian" && <h3>{titleUA}</h3>}

      <img src={image} alt={imageAlt} onClick={(e) => openImage(e)} />
    </div>
  );
}
