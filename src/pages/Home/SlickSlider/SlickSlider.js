import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2500,
      pauseOnDotsHover: false,
      pauseOnHover: false,
      infinite: true,
      accessibility: true,
      dots: true,
      arrows: false,
      center: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Slider {...settings}>
        <div className="slide slide-1"></div>
        <div className="slide slide-2"></div>
        <div className="slide slide-3"></div>
        <div className="slide slide-4"></div>
        <div className="slide slide-5"></div>
        <div className="slide slide-6"></div>
        <div className="slide slide-7"></div>
        <div className="slide slide-8"></div>
      </Slider>
    );
  }
}
