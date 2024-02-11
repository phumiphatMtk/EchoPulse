import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import A1 from "../../assets/images/A1.jpg";
import A2 from "../../assets/images/A2.jpg";
import A3 from "../../assets/images/A3.jpg";
import A4 from "../../assets/images/A4.jpg";

const Activity = () => {
  const swiperOptions = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      clickable: true,
    },
    modules: [EffectCoverflow, Pagination, Navigation],
    className: "activity-swiper",
  };

  const slideImages = [A1, A2, A3, A4];

  const handleButtonClick = (index) => {
    const url = "https://google.com";
    window.location.href = url;
  };


  return (
    <div className="headerprocess">
      <h1 className="text-center text-3xl mt-3">
        <i className="fa-solid fa-calendar gtnbtn"></i>กิจกรรม
      </h1>
      <Swiper {...swiperOptions}>
        {slideImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image} alt="slide_image" />
            <button
                className="image-button"
                onClick={() => handleButtonClick(index)}
              >
                รับโบนัส
              </button>
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="swiper-button-next slider-arrow">
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Activity;
