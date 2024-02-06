import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import banner1 from "../../assets/images/6.jpg";

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
            <div className="p-14">
              <Image src={banner1} alt="slide_image" className="rounded-lg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-14">
              <Image src={banner1} alt="slide_image" className="rounded-lg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-14">
              <Image src={banner1} alt="slide_image" className="rounded-lg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-14">
              <Image src={banner1} alt="slide_image" className="rounded-lg" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Sliderbanner;
