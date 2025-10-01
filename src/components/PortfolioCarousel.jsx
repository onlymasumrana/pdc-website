import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function PortfolioCarousel({ images }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      // Optional: Access Swiper instance for manual control
      console.log("Swiper initialized");
    }
  }, []);

  return (
    <Swiper
      ref={swiperRef}
      modules={[Autoplay]}
      spaceBetween={0} // Zero on mobile to prevent overflow
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          spaceBetween: 16,
        },
      }}
      className="h-full overflow-hidden rounded"
    >
      {images.map((image, index) => (
        <SwiperSlide
          key={index}
          className="flex h-full items-center justify-center"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-full max-w-full rounded object-contain transition"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
