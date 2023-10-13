"use client";
import Image from "next/image";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

type Photo = {
  id: string;
  attributes: {
    formats: { small: { url: string } };
  };
};
interface CarouselProps {
  props: Photo[];
}
export const Carousel = ({ props }: CarouselProps) => {
  return (
    <Swiper cssMode navigation pagination mousewheel keyboard modules={[Pagination, Navigation, Mousewheel, Keyboard]} className="mySwiper">
      {props.map((item: Photo) => (
        <SwiperSlide key={item.id}>
          <Image src={item.attributes.formats.small.url} alt="" fill />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
