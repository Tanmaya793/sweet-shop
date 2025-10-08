import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ width: "80%", margin: "0 auto", marginTop: "20px" }}>
      <Slider {...settings}>
        <div>
          <img
            src="/images/poster.jpg"
            alt="Poster 1"
            style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
        <div>
          <img
            src="/images/icecream1.jpg"
            alt="Ice Cream"
            style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
        <div>
          <img
            src="/images/chocolate1.jpg"
            alt="Chocolate"
            style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
