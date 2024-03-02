/* eslint-disable tailwindcss/no-custom-classname */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import CarousellItem from "./CarousellItem";
import "./carousell.css";
import { Movie } from "@/lib/types";

function Carousell({ movies }: { movies: Movie[] }) {
  return (
    <section className="container">
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
          } as React.CSSProperties
        }
        navigation={true}
        pagination={{
          el: ".pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return '<span class="' + className + '">' + "</span>";
          },
        }}
        modules={[Navigation, Pagination]}
      >
        {movies.map((movie, index) => {
          return (
            <SwiperSlide key={movie.id}>
              <CarousellItem movie={movie} index={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="pagination mt-5 flex items-center justify-center gap-3 text-center" />
    </section>
  );
}

export default Carousell;
