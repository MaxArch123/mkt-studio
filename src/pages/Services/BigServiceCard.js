import React from "react";

export default function BigServiceCard(props) {
  const {
    language,
    title,
    rows,
    time,
    minCardTitle,
    minTime,
    priceMin,
    rowsInMin,
    standartСardTitle,
    price,
    rowsInStandart,
    maxCardTitle,
    maxTime,
    priceMax,
  } = props;

  function rowElements(rowsToSHow = rows.length) {
    return rows.map((row, id) => {
      if (id > rowsToSHow) {
        return (
          <p className="service-row-empty" key={id}>
            -
          </p>
        );
      } else {
        return (
          <p className="service-row" key={id}>
            {row}
          </p>
        );
      }
    });
  }

  return (
    <>
      <div className="service-card-big">
        <h3>{title}</h3>
        <div className="service-cards container">
          <div className="min-pack">
            <h5 className="title">{minCardTitle}</h5>
            {rowElements(rowsInMin)}
            <p className="time">{minTime}</p>
            <div className="price">
              {language === "english" && 
              (<p className="english">{priceMin}</p>)}
              {language === "ukrainian" && (
                <p className="ukrainian">{priceMin}</p>
              )}
            </div>
          </div>
          <div className="standart-pack">
            <h5 className="title">{standartСardTitle}</h5>
            {rowElements(rowsInStandart)}
            <p className="time">{time}</p>
            <div className="price">
              {language === "english" && <p className="english">{price}</p>}
              {language === "ukrainian" && (
                <p className="ukrainian">{price}</p>
              )}
            </div>
          </div>
          <div className="plus-pack">
            <h5 className="title">{maxCardTitle}</h5>
            {rowElements()}
            {maxTime && priceMax ? (
              <>
                <p className="time">{maxTime}</p>
                <div className="price">
                  {language === "english" && (
                    <p className="english">{priceMax}</p>
                  )}
                  {language === "ukrainian" && (
                    <p className="ukrainian">{priceMax}</p>
                  )}
                </div>
              </>
            ) : (
              <>
                <p className="time">∞</p>
                {language === "english" && (
                  <div className="price unspecified">
                    Depending on the <br /> project
                  </div>
                )}
                {language === "ukrainian" && (
                  <div className="price unspecified">
                    Залежить від <br /> проєкту
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
