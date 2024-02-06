import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

const Sliderbanner = () => {
  return (
    <div className="m-3">
      <div>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
            {/* <Image src={banner1.src} alt="slide_image" /> */}
            Slide 1
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Sliderbanner;
