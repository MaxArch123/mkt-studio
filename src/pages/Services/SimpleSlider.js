// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default function SimpleSlider(props) {
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
      <h3>{title}</h3>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
        pauseOnMouseEnter={true}
      >
        <SwiperSlide>
          <div className="min-pack">
            <h5 className="title">{minCardTitle}</h5>
            {rowElements(rowsInMin)}
            <p className="time">{minTime}</p>
            <div className="price">
              <p>{priceMin}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="standart-pack">
            <h5 className="title">{standartСardTitle}</h5>
            {rowElements(rowsInStandart)}
            <p className="time">{time}</p>
            <div className="price">
              <p>{price}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="plus-pack">
            <h5 className="title">{maxCardTitle}</h5>
            {rowElements()}
            {maxTime && priceMax ? (
              <>
                <p className="time">{maxTime}</p>
                <div className="price">
                  <p>{priceMax}</p>
                </div>
              </>
            ) : (
              <>
                <p className="time">∞</p>
                {/* <div className="price unspecified"> */}
                {language === "ukrainian" && (
                  <div className="price unspecified">
                    Залежить від <br /> проєкту
                  </div>
                )}
                {language === "english" && (
                  <div className="price unspecified">
                    Depends on the <br /> project
                  </div>
                )}
                {/* </div> */}
              </>
            )}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
