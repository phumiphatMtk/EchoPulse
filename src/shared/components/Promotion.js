import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import P1 from "../../assets/images/P1.jpg";
import P2 from "../../assets/images/P2.jpg";
import P3 from "../../assets/images/P3.jpg";
import P4 from "../../assets/images/P4.jpg";

const Promotion = () => {
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
    className: "promotion-swiper",
  };

  const slideImages = [P1, P2, P3, P4];

  const handleButtonClick = (index) => {
    const url = "https://google.com";
    window.location.href = url;
  };

  return (
    <div className="headerprocess">
      <h1 className="text-center text-3xl mt-3">
        <i className="fa-solid fa-gift gtnbtn"></i>โปรโมชั่น
      </h1>
      <Swiper {...swiperOptions}>
        {slideImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="image-container">
              <Image src={image} alt="slide_image" />
              <button
                className="image-button"
                onClick={() => handleButtonClick(index)}
              >
                รับโบนัส
              </button>
            </div>
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

export default Promotion;
